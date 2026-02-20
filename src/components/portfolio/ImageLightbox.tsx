"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ImageLightboxProps {
  /** Display image URL (used in thumb/card) */
  imageUrl: string;
  /** Full-size image URL for lightbox */
  fullSizeUrl: string;
  alt: string;
  /** Optional: use a fixed width/height for the display image (Next/Image). Ignored when fill is true. */
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  /** If true, the clickable area is the whole block (e.g. hero); otherwise just the image */
  block?: boolean;
  /** When true, image fills the container (use with className "w-full h-full" and a sized parent) */
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export default function ImageLightbox({
  imageUrl,
  fullSizeUrl,
  alt,
  width = 1200,
  height = 900,
  className = "",
  imgClassName = "object-cover",
  block = false,
  fill = false,
  sizes,
  priority = false,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const close = useCallback(() => setOpen(false), []);

  const lightboxOverlay = open && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        onClick={close}
        className="absolute top-4 right-4 z-10 text-white/90 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center"
        aria-label="Close"
      >
        ×
      </button>
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={fullSizeUrl}
          alt={alt}
          className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${block ? "block w-full" : "inline-block"} ${fill ? "relative" : ""} ${className}`}
        aria-label={`View full size: ${alt}`}
      >
        {fill ? (
          <Image
            src={imageUrl}
            alt={alt}
            fill
            sizes={sizes ?? "426px"}
            className={imgClassName}
            priority={priority}
          />
        ) : (
          <Image
            src={imageUrl}
            alt={alt}
            width={width}
            height={height}
            className={imgClassName}
            priority={priority}
          />
        )}
      </button>

      {mounted && createPortal(open ? lightboxOverlay : null, document.body)}
    </>
  );
}
