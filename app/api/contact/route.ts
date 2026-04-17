import { NextResponse } from "next/server";

const allowedTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
]);

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
    return NextResponse.json({ message: "Richiesta acquisita." }, { status: 200 });
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

  const files = formData.getAll("attachments").filter((value): value is File => value instanceof File);

  for (const file of files) {
    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json(
        { message: "Ogni allegato deve avere dimensione massima di 8 MB." },
        { status: 400 },
      );
    }

    if (file.type && !allowedTypes.has(file.type)) {
      return NextResponse.json(
        { message: "Formato allegato non supportato. Usa PDF, DOC, DOCX, JPG o PNG." },
        { status: 400 },
      );
    }
  }

  return NextResponse.json(
    {
      message:
        "Richiesta inviata correttamente. Lo studio ti ricontatterà dopo aver esaminato le informazioni ricevute.",
    },
    { status: 200 },
  );
}
