"use client";

import { useState } from "react";

interface OptionalImageProps {
  /** Single path or list of paths to try (e.g. different extensions) */
  src: string | string[];
  alt: string;
  width: number;
  height: number;
  className?: string;
  placeholder: React.ReactNode;
  imgClassName?: string;
}

/**
 * Shows the image if it loads; otherwise shows the placeholder.
 * Uses native <img> so onError fires reliably for missing files.
 * If src is an array, tries each path in order until one loads.
 */
export default function OptionalImage({
  src,
  alt,
  width,
  height,
  className = "",
  placeholder,
  imgClassName = "object-cover",
}: OptionalImageProps) {
  const srcs = Array.isArray(src) ? src : [src];
  const [tryIndex, setTryIndex] = useState(0);
  const currentSrc = srcs[tryIndex];
  const hasMore = tryIndex < srcs.length - 1;

  const handleError = () => {
    if (hasMore) {
      setTryIndex((i) => i + 1);
    } else {
      setTryIndex(-1); // all failed
    }
  };

  if (tryIndex === -1 || !currentSrc) {
    return <div className={className}>{placeholder}</div>;
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <img
        key={currentSrc}
        src={currentSrc}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${imgClassName}`}
        onError={handleError}
      />
    </div>
  );
}
