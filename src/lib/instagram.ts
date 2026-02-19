/**
 * Fetch latest Instagram media via Instagram Graph API.
 * Requires Instagram Business/Creator account linked to a Facebook Page.
 * Set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID in .env.local.
 * @see https://developers.facebook.com/docs/instagram-platform/instagram-graph-api
 */

export interface InstagramMedia {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
}

const INSTAGRAM_API_BASE = "https://graph.instagram.com";
const FIELDS = "id,caption,media_url,permalink,thumbnail_url,media_type,timestamp";

export type InstagramFeedResult =
  | { media: InstagramMedia[]; error?: undefined }
  | { media: []; error: "missing_env" | "api_error" };

export async function getLatestInstagramMedia(limit = 8): Promise<InstagramFeedResult> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const userId = process.env.INSTAGRAM_USER_ID?.trim();

  if (!accessToken || !userId) {
    return { media: [], error: "missing_env" };
  }

  try {
    const url = `${INSTAGRAM_API_BASE}/${userId}/media?fields=${FIELDS}&limit=${Math.max(limit, 25)}&access_token=${encodeURIComponent(accessToken)}`;
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // refresh every hour so new posts appear
    });
    const text = await res.text();

    if (!res.ok) {
      console.warn("[Instagram] API error:", res.status, text);
      return { media: [], error: "api_error" };
    }

    const data = (await (text ? JSON.parse(text) : {})) as { data?: InstagramMedia[] };
    const list = data.data ?? [];
    return { media: list.slice(0, limit) };
  } catch (e) {
    console.warn("[Instagram] Fetch failed:", e);
    return { media: [], error: "api_error" };
  }
}
