import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const STUDIO_COOKIE = "studio_owner";
const STUDIO_LOGIN = "/studio/login";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/studio")) {
    return NextResponse.next();
  }
  if (pathname.startsWith(STUDIO_LOGIN)) {
    return NextResponse.next();
  }

  const secret = process.env.STUDIO_SECRET?.trim();
  const cookie = request.cookies.get(STUDIO_COOKIE)?.value;

  // Always require our password gate: redirect to login if no valid cookie (or no secret set)
  if (!secret || cookie !== secret) {
    const login = new URL(STUDIO_LOGIN, request.url);
    login.searchParams.set("from", pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio", "/studio/:path*"],
};
