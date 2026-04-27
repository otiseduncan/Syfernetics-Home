import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_TO ||
      !process.env.CONTACT_FROM
    ) {
      console.error("Missing contact form environment variables:", {
        SMTP_HOST: Boolean(process.env.SMTP_HOST),
        SMTP_PORT: Boolean(process.env.SMTP_PORT),
        SMTP_USER: Boolean(process.env.SMTP_USER),
        SMTP_PASS: Boolean(process.env.SMTP_PASS),
        CONTACT_TO: Boolean(process.env.CONTACT_TO),
        CONTACT_FROM: Boolean(process.env.CONTACT_FROM),
      });

      return NextResponse.json(
        { error: "Contact form is missing server email settings." },
        { status: 500 }
      );
    }

    const secure = process.env.SMTP_SECURE === "true";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure,
      requireTLS: !secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      authMethod: "LOGIN",
      tls: {
        minVersion: "TLSv1.2",
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Syfernetics Website" <${process.env.CONTACT_FROM}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Syfernetics Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Syfernetics Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact form error:", {
      message: error?.message,
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
    });

    return NextResponse.json(
      { error: "Message could not be sent." },
      { status: 500 }
    );
  }
}