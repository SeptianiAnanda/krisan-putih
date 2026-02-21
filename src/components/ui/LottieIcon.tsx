"use client";

import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useRef, useEffect, useState } from "react";

interface LottieIconProps {
  /** Path to Lottie JSON (e.g. /lottie/icon.json) or animation data object */
  src?: string;
  animationData?: object;
  className?: string;
  loop?: boolean;
}

export default function LottieIcon({
  src,
  animationData,
  className = "",
  loop = true,
}: LottieIconProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [data, setData] = useState<object | null>(
    animationData ?? null
  );

  useEffect(() => {
    if (animationData) {
      setData(animationData);
      return;
    }
    if (!src) return;
    let cancelled = false;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [src, animationData]);

  if (!data) return <div className={className} />;

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={data}
      loop={loop}
      className={className}
    />
  );
}
