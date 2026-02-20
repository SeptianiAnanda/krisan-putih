"use client";

import OptionalImage from "./OptionalImage";

const LOGO_MAX_HEIGHT = 58; // display height (1.2 * 48)
const GAP_PX = 15;
const ANIMATION_MS = 20000; // 20 seconds

interface LogoItem {
  label: string;
  src: string[];
}

export default function TrustedByCarousel({ logos }: { logos: LogoItem[] }) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex items-center w-max"
        style={{
          gap: GAP_PX,
          animation: `trusted-by-scroll ${ANIMATION_MS}ms linear infinite`,
        }}
      >
        {/* Duplicate set for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center justify-center"
            style={{
              height: LOGO_MAX_HEIGHT,
              width: 180,
            }}
          >
            <OptionalImage
              src={logo.src}
              alt={logo.label}
              width={360}
              height={116}
              className="w-full h-full"
              imgClassName="object-contain"
              placeholder={
                <div className="w-full h-full min-h-[32px] bg-gray-100 rounded flex items-center justify-center text-text/50 text-xs truncate px-2">
                  {logo.label}
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
