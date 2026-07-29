import { NextResponse } from "next/server";

const resendApiUrl = "https://api.resend.com/emails";
const maxNameLength = 100;
const maxEmailLength = 180;
const maxMessageLength = 4000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function toCleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function jsonError(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonError("Invalid request body.");
  }

  const honeypot = toCleanString(payload.company, 120);

  if (honeypot) {
    return NextResponse.json({
      message: "Message sent successfully.",
    });
  }

  const name = toCleanString(payload.name, maxNameLength);
  const email = toCleanString(payload.email, maxEmailLength).toLowerCase();
  const message = toCleanString(payload.message, maxMessageLength);

  if (!name || !email || !message) {
    return jsonError("Please fill in all fields.");
  }

  if (!isValidEmail(email)) {
    return jsonError("Please enter a valid email address.");
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return jsonError("Email service is not configured yet.", 500);
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "lucas-dev@outlook.pt";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Lucas Silva Portfolio <onboarding@resend.dev>";
  const submittedAt = new Date().toISOString();
  const subject = `Portfolio contact from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Submitted at: ${submittedAt}`,
    "",
    "Message:",
    message,
  ].join("\n");
  const html = `
    <div>
      <h2>New portfolio contact</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
      <hr />
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "lucas-silva-portfolio",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
      html,
      tags: [
        {
          name: "source",
          value: "portfolio",
        },
      ],
    }),
  });

  if (!response.ok) {
    return jsonError("Unable to send your message right now.", 502);
  }

  return NextResponse.json({
    message: "Message sent successfully. I will get back to you soon.",
  });
}
