import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const STUDIO_COOKIE = "studio_owner";
const STUDIO_PATH = "/studio";

export async function POST(request: NextRequest) {
  const secret = process.env.STUDIO_SECRET?.trim();
  if (!secret) {
    return NextResponse.json(
      { error: "Studio access not configured (STUDIO_SECRET missing)." },
      { status: 500 }
    );
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const password = typeof body.password === "string" ? body.password.trim() : "";
  if (password !== secret) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const from = request.nextUrl.searchParams.get("from") || STUDIO_PATH;
  const res = NextResponse.json({ ok: true, redirect: from });
  const isProd = process.env.NODE_ENV === "production";

  res.cookies.set(STUDIO_COOKIE, secret, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}
