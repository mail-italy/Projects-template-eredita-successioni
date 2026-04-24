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
const emailBannerText = "Richiesta proveniente dal sito Eredità e Successioni";

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
    emailBannerText,
    "",
    "Nuova richiesta dal modulo contatti",
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
    <div style="margin:0; padding:32px 0; background:#f4efe7; color:#16202b;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td align="center" style="padding:0 16px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:720px; border-collapse:separate; border-spacing:0; overflow:hidden; background:#ffffff; border:1px solid rgba(48,65,85,0.12); border-radius:20px; box-shadow:0 18px 45px rgba(16,32,51,0.08);">
              <tr>
                <td style="background:#c7792d; padding:16px 24px; font-family:Arial, sans-serif; font-size:15px; font-weight:700; line-height:1.45; color:#ffffff;">
                  ${emailBannerText}
                </td>
              </tr>
              <tr>
                <td style="padding:28px 24px 10px; font-family:Arial, sans-serif;">
                  <p style="margin:0 0 8px; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#8b6a3e; font-weight:700;">
                    Studio Legale Del Monte
                  </p>
                  <h1 style="margin:0; font-size:24px; line-height:1.2; color:#16202b;">
                    Nuova richiesta dal modulo contatti
                  </h1>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px 28px; font-family:Arial, sans-serif; color:#16202b;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:0 0 12px; width:180px; vertical-align:top; font-size:13px; line-height:1.45; color:#7b8796; font-weight:700;">Nome</td>
                      <td style="padding:0 0 12px; font-size:15px; line-height:1.55; color:#16202b;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 12px; width:180px; vertical-align:top; font-size:13px; line-height:1.45; color:#7b8796; font-weight:700;">Cognome</td>
                      <td style="padding:0 0 12px; font-size:15px; line-height:1.55; color:#16202b;">${escapeHtml(surname)}</td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 12px; width:180px; vertical-align:top; font-size:13px; line-height:1.45; color:#7b8796; font-weight:700;">Telefono</td>
                      <td style="padding:0 0 12px; font-size:15px; line-height:1.55; color:#16202b;">${escapeHtml(phone)}</td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 12px; width:180px; vertical-align:top; font-size:13px; line-height:1.45; color:#7b8796; font-weight:700;">Email</td>
                      <td style="padding:0 0 12px; font-size:15px; line-height:1.55; color:#16202b;">${escapeHtml(email)}</td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 12px; width:180px; vertical-align:top; font-size:13px; line-height:1.45; color:#7b8796; font-weight:700;">Ambito richiesta</td>
                      <td style="padding:0 0 12px; font-size:15px; line-height:1.55; color:#16202b;">${escapeHtml(topic)}</td>
                    </tr>
                    <tr>
                      <td style="padding:4px 0 12px; width:180px; vertical-align:top; font-size:13px; line-height:1.45; color:#7b8796; font-weight:700;">Sintesi del caso</td>
                      <td style="padding:4px 0 12px;">
                        <div style="padding:16px 18px; border-radius:16px; background:#f7f3ec; border:1px solid rgba(48,65,85,0.1); font-size:15px; line-height:1.7; color:#16202b;">
                          ${escapedSummary}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0; width:180px; vertical-align:top; font-size:13px; line-height:1.45; color:#7b8796; font-weight:700;">Allegati</td>
                      <td style="padding:0; font-size:15px; line-height:1.55; color:#16202b;">${attachmentSummary}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
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
