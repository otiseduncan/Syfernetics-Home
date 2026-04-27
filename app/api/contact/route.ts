import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");

      return NextResponse.json(
        { error: "Contact form email service is not configured." },
        { status: 500 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO ||
      process.env.TO_EMAIL ||
      "otis.duncan@syfernetics.com";

    const fromEmail =
      process.env.RESEND_FROM || "Syfernetics Website <onboarding@resend.dev>";

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Syfernetics Contact Message from ${name}`,
      replyTo: email,
      text: `
New Syfernetics contact form message

Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Syfernetics Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend contact form error:", error);

      return NextResponse.json(
        { error: "Message could not be sent." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: any) {
    console.error("Contact form error:", {
      message: error?.message,
      code: error?.code,
      response: error?.response,
    });

    return NextResponse.json(
      { error: "Message could not be sent." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}