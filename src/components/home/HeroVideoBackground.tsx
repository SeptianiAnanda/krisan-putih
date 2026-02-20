"use client";

/**
 * Hero video background.
 * Put your video file(s) in:  public/video/
 *
 * Best for fast loading:
 * - Prefer WebM (VP9) as primary – smaller file, great quality.
 * - Add MP4 (H.264) as fallback for Safari and older browsers.
 * - Keep clip short (e.g. 10–20 s), loopable, 1280×720 or 1920×1080, ~1–2 Mbps.
 */
export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        {/* WebM first (smaller), then MP4 fallback */}
        <source src="/video/hero-bg.webm" type="video/webm" />
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
