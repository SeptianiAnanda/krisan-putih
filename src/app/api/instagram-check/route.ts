import { NextResponse } from "next/server";

/**
 * GET /api/instagram-check
 * Call this on your deployed site to see why the Instagram feed might not load.
 * Does not expose your token.
 */
export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const userId = process.env.INSTAGRAM_USER_ID?.trim();

  if (!accessToken || !userId) {
    return NextResponse.json(
      {
        ok: false,
        reason: "missing_env",
        message:
          "INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID is not set. Add them in your deployment platform (e.g. Vercel → Project → Settings → Environment Variables), then redeploy.",
      },
      { status: 200 }
    );
  }

  try {
    const url = `https://graph.instagram.com/${userId}/media?fields=id&limit=1&access_token=${encodeURIComponent(accessToken)}`;
    const res = await fetch(url);
    const text = await res.text();

    if (!res.ok) {
      let body: unknown;
      try {
        body = JSON.parse(text);
      } catch {
        body = text;
      }
      return NextResponse.json(
        {
          ok: false,
          reason: "api_error",
          message: "Instagram API returned an error. Check that your token is valid and your Instagram account is Business/Creator linked to a Facebook Page.",
          status: res.status,
          details: body,
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Instagram is configured correctly. The feed should appear on the homepage.",
    });
  } catch (e) {
    return NextResponse.json(
      {
        ok: false,
        reason: "fetch_error",
        message: e instanceof Error ? e.message : "Unknown error",
      },
      { status: 200 }
    );
  }
}
