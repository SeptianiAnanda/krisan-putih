"use client";

import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

const GAP_PX = 15;
const ANIMATION_MS = 30 * 1000; // 30s
const IMAGE_HEIGHT = 320; // equal height for all images

export interface GalleryCarouselItem {
  imageUrl: string;
  fullSizeUrl: string;
  alt: string;
}

export default function GalleryCarousel({ items }: { items: GalleryCarouselItem[] }) {
  if (!items.length) return null;

  return (
    <div className="overflow-hidden">
      <div
        className="flex items-stretch w-max"
        style={{
          gap: GAP_PX,
          animation: `gallery-carousel-scroll ${ANIMATION_MS}ms linear infinite`,
        }}
      >
        {/* Duplicate set for seamless loop (scroll left) */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="shrink-0 rounded-2xl overflow-hidden relative"
            style={{ height: IMAGE_HEIGHT, width: (IMAGE_HEIGHT * 4) / 3 }}
          >
            <ImageLightbox
              imageUrl={item.imageUrl}
              fullSizeUrl={item.fullSizeUrl}
              alt={item.alt}
              fill
              className="w-full h-full"
              imgClassName="object-cover"
              sizes="426px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
