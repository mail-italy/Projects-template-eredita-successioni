import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const allowedTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
]);
const allowedExtensions = new Set([".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"]);
const attachmentErrorMessage =
  "Formato allegato non supportato. Usa PDF, DOC, DOCX, JPG, JPEG o PNG.";
const deliveryNotConfiguredMessage =
  "Invio email non configurato sul server. Imposta CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USER e SMTP_PASS.";
const deliveryFailureMessage =
  "La richiesta non è stata inviata via email. Riprova oppure usa temporaneamente telefono, WhatsApp o Mail.";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSmtpConfig() {
  const from = process.env.CONTACT_FROM_EMAIL?.trim() ?? "";
  const to = process.env.CONTACT_TO_EMAIL?.trim() ?? "";
  const host = process.env.SMTP_HOST?.trim() ?? "";
  const port = Number(process.env.SMTP_PORT ?? "");
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = process.env.SMTP_PASS ?? "";

  if (!from || !to || !host || !Number.isInteger(port) || port <= 0 || !user || !pass) {
    return null;
  }

  return {
    from,
    to,
    host,
    port,
    user,
    pass,
    secure: port === 465,
  };
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = String(formData.get("name") ?? "").trim();
  const surname = String(formData.get("surname") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const caseSummary = String(formData.get("caseSummary") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();
  const privacy = String(formData.get("privacy") ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ message: "Richiesta non valida." }, { status: 400 });
  }

  if (!name || !surname || !phone || !email || !topic || !caseSummary) {
    return NextResponse.json(
      { message: "Compila tutti i campi obbligatori prima di inviare la richiesta." },
      { status: 400 },
    );
  }

  if (privacy !== "accepted") {
    return NextResponse.json(
      { message: "È necessario accettare l’informativa privacy." },
      { status: 400 },
    );
  }

  const files = formData
    .getAll("attachments")
    .filter((value): value is File => value instanceof File && value.name.trim() !== "");

  for (const file of files) {
    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json(
        { message: "Ogni allegato deve avere dimensione massima di 8 MB." },
        { status: 400 },
      );
    }

    const extension = file.name.includes(".")
      ? `.${file.name.toLowerCase().split(".").pop() ?? ""}`
      : "";
    const hasValidType = file.type ? allowedTypes.has(file.type) : false;
    const hasValidExtension = allowedExtensions.has(extension);

    if (!hasValidType && !hasValidExtension) {
      return NextResponse.json({ message: attachmentErrorMessage }, { status: 400 });
    }
  }

  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return NextResponse.json({ message: deliveryNotConfiguredMessage }, { status: 503 });
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type || undefined,
    })),
  );

  const fullName = `${name} ${surname}`.trim();
  const subject = `Nuova richiesta contatti: ${fullName} - ${topic}`;
  const escapedSummary = escapeHtml(caseSummary).replaceAll("\n", "<br />");
  const attachmentSummary =
    attachments.length > 0
      ? attachments.map((attachment) => escapeHtml(attachment.filename ?? "")).join(", ")
      : "Nessuno";

  const text = [
    "Nuova richiesta dal form contatti",
    `Nome: ${name}`,
    `Cognome: ${surname}`,
    `Telefono: ${phone}`,
    `Email: ${email}`,
    `Ambito richiesta: ${topic}`,
    "Sintesi del caso:",
    caseSummary,
    `Allegati: ${attachmentSummary}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #16202b; line-height: 1.6;">
      <h1 style="font-size: 20px; margin-bottom: 16px;">Nuova richiesta dal form contatti</h1>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Cognome:</strong> ${escapeHtml(surname)}</p>
      <p><strong>Telefono:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Ambito richiesta:</strong> ${escapeHtml(topic)}</p>
      <p><strong>Sintesi del caso:</strong><br />${escapedSummary}</p>
      <p><strong>Allegati:</strong> ${attachmentSummary}</p>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
    });

    const info = await transporter.sendMail({
      from: smtpConfig.from,
      to: smtpConfig.to,
      replyTo: email,
      subject,
      text,
      html,
      attachments,
    });

    const acceptedRecipients = info.accepted.map((recipient) => String(recipient).toLowerCase());

    if (acceptedRecipients.length === 0 || !acceptedRecipients.includes(smtpConfig.to.toLowerCase())) {
      return NextResponse.json({ message: deliveryFailureMessage }, { status: 502 });
    }

    return NextResponse.json(
      {
        message:
          "Richiesta inviata correttamente. Lo studio ti ricontatterà dopo aver esaminato le informazioni ricevute.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ message: deliveryFailureMessage }, { status: 502 });
  }
}
