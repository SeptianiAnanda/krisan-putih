"use client";

/**
 * Hero video background for the Website Development page.
 * Put your video file(s) in:  public/website-development/video/
 *
 * File names: hero-bg.webm (preferred), hero-bg.mp4 (fallback).
 * Same tips as homepage: short loop, 720p/1080p, ~1–2 Mbps, no audio.
 */
export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/website-development/video/hero-bg.webm" type="video/webm" />
        <source src="/website-development/video/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
