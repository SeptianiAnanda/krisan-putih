import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "contact@krisanputih.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullname, emailOrPhone } = body;

    if (!fullname?.trim() || !emailOrPhone?.trim()) {
      return NextResponse.json(
        { error: "Full name and email/phone are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email is not configured. Please set RESEND_API_KEY." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM || "Krisan Putih <onboarding@resend.dev>";

    const text = [
      `Book a Free Call request`,
      ``,
      `Full name: ${fullname.trim()}`,
      `Email / Phone: ${emailOrPhone.trim()}`,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      subject: `[Book a Free Call] Request from ${fullname.trim()}`,
      text,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send" },
      { status: 500 }
    );
  }
}
