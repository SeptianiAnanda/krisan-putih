import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "contact@krisanputih.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      package: pkg,
      fullname,
      email,
      company,
      goal,
      goalOther,
      referenceWebsites,
      budgetRange,
      mustHaveFeatures,
      additionalNotes,
    } = body;

    if (!fullname || !email) {
      return NextResponse.json(
        { error: "Full name and email are required." },
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

    const goalText = Array.isArray(goal) ? goal.join(", ") : String(goal || "");
    const goalFull = goalText + (goalOther ? ` | Other: ${goalOther}` : "");

    const text = [
      `Package: ${pkg || "—"}`,
      `Full name: ${fullname}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Primary goal: ${goalFull || "—"}`,
      `Reference websites: ${referenceWebsites || "—"}`,
      `Budget range: ${budgetRange || "—"}`,
      `Must-have features: ${mustHaveFeatures || "—"}`,
      `Additional notes: ${additionalNotes || "—"}`,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      subject: `[${pkg || "Quote"}] Quotation request from ${fullname}`,
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
