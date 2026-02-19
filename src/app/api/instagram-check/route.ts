import { NextResponse } from "next/server";

/** Remove newlines/spaces that can be accidentally pasted with the token in Vercel */
function normalizeToken(raw: string | undefined): string {
  if (!raw) return "";
  return raw.replace(/\s+/g, "").trim();
}

/**
 * GET /api/instagram-check
 * Call this on your deployed site to see why the Instagram feed might not load.
 * Does not expose your token.
 */
export async function GET() {
  const rawToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accessToken = normalizeToken(rawToken);
  const userId = process.env.INSTAGRAM_USER_ID?.trim();

  const diagnostic = {
    tokenLength: accessToken.length,
    tokenHadWhitespace: rawToken !== accessToken,
    userIdLength: userId?.length ?? 0,
  };

  if (!accessToken || !userId) {
    return NextResponse.json(
      {
        ok: false,
        reason: "missing_env",
        message:
          "INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID is not set. Add them in your deployment platform (e.g. Vercel → Project → Settings → Environment Variables), then redeploy.",
        diagnostic,
      },
      { status: 200 }
    );
  }

  try {
    // Step 1: Validate token with Facebook Graph (same token). If this fails with 190, token is corrupted in Vercel.
    const fbUrl = "https://graph.facebook.com/me?fields=id";
    const fbRes = await fetch(fbUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
    const fbText = await fbRes.text();

    let facebookTokenValid = false;
    if (fbRes.ok) {
      facebookTokenValid = true;
    } else {
      const fbBody = (() => {
        try {
          return JSON.parse(fbText);
        } catch {
          return fbText;
        }
      })();
      return NextResponse.json(
        {
          ok: false,
          reason: "api_error",
          message:
            "Token ditolak oleh Facebook. Kemungkinan: token rusak/terpotong di Vercel, atau salah copy-paste. Coba: (1) Copy token dari Access Token Debugger, paste di Notepad, pastikan tidak ada spasi/enter, (2) Hapus variable INSTAGRAM_ACCESS_TOKEN di Vercel lalu buat lagi, paste nilai dari Notepad, (3) Redeploy.",
          status: fbRes.status,
          details: fbBody,
          diagnostic: { ...diagnostic, facebookTokenValid: false },
        },
        { status: 200 }
      );
    }

    // Step 2: Instagram Graph API expects access_token in query. Encode so special chars (e.g. +) are not corrupted.
    const igUrl = `https://graph.instagram.com/${userId}/media?fields=id&limit=1&access_token=${encodeURIComponent(accessToken)}`;
    const res = await fetch(igUrl);
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
          message:
            "Token valid di Facebook tapi gagal di Instagram. Biasanya INSTAGRAM_USER_ID salah: harus Instagram Business Account ID (angka), BUKAN Page ID atau User ID. Dapatkan dari: Graph API Explorer → me/accounts → pilih Page → panggil {page-id}?fields=instagram_business_account → pakai nilai instagram_business_account.id.",
          status: res.status,
          details: body,
          diagnostic: { ...diagnostic, facebookTokenValid: true },
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Instagram is configured correctly. The feed should appear on the homepage.",
      diagnostic: { ...diagnostic, facebookTokenValid: true },
    });
  } catch (e) {
    return NextResponse.json(
      {
        ok: false,
        reason: "fetch_error",
        message: e instanceof Error ? e.message : "Unknown error",
        diagnostic,
      },
      { status: 200 }
    );
  }
}
