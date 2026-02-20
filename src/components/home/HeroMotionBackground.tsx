"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const ORB_COLORS = [
  "radial-gradient(circle at 30% 30%, rgba(174, 18, 108, 0.5), rgba(174, 18, 108, 0.15))",
  "radial-gradient(circle at 70% 70%, rgba(36, 36, 36, 0.4), rgba(36, 36, 36, 0.08))",
  "radial-gradient(circle at 50% 50%, rgba(174, 18, 108, 0.25), transparent 70%)",
  "radial-gradient(circle at 60% 40%, rgba(100, 80, 140, 0.2), transparent 65%)",
  "radial-gradient(circle at 40% 60%, rgba(36, 36, 36, 0.2), transparent 60%)",
];

function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { damping: 25, stiffness: 150 };
  const xSpring = useSpring(x, spring);
  const ySpring = useSpring(y, spring);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);
      x.set(Math.max(-1, Math.min(1, normX)) * 0.12);
      y.set(Math.max(-1, Math.min(1, normY)) * 0.12);
    },
    [x, y]
  );

  useEffect(() => {
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, [update]);

  return { ref, x: xSpring, y: ySpring };
}

interface OrbProps {
  color: string;
  size: number;
  initialX: string;
  initialY: string;
  floatKeyframes: { x: number[]; y: number[] };
  duration: number;
  delay: number;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
  mouseInfluence: number;
}

function Orb({
  color,
  size,
  initialX,
  initialY,
  floatKeyframes,
  duration,
  delay,
  mouseX,
  mouseY,
  mouseInfluence,
}: OrbProps) {
  const mouseOffsetX = useMotionValue(0);
  const mouseOffsetY = useMotionValue(0);

  useEffect(() => {
    const unsubX = mouseX.on("change", (v) => mouseOffsetX.set(v * mouseInfluence));
    const unsubY = mouseY.on("change", (v) => mouseOffsetY.set(v * mouseInfluence));
    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY, mouseInfluence, mouseOffsetX, mouseOffsetY]);

  /* Float via CSS keyframes so animation always runs; Framer only for mouse follow */
  const [tx1, ty1] = [floatKeyframes.x[1], floatKeyframes.y[1]];
  const [tx2, ty2] = [floatKeyframes.x[2], floatKeyframes.y[2]];

  return (
    <motion.div
      className="absolute rounded-full will-change-transform"
      style={{
        left: initialX,
        top: initialY,
        x: mouseOffsetX,
        y: mouseOffsetY,
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: 0,
          top: 0,
          background: color,
          filter: "blur(60px)",
          // CSS custom props for @keyframes orb-float
          ["--orb-tx1" as string]: `${tx1}px`,
          ["--orb-ty1" as string]: `${ty1}px`,
          ["--orb-tx2" as string]: `${tx2}px`,
          ["--orb-ty2" as string]: `${ty2}px`,
          animation: "orb-float ease-in-out infinite",
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    </motion.div>
  );
}

const ORB_CONFIGS = [
  {
    color: ORB_COLORS[0],
    size: 420,
    x: "10%",
    y: "20%",
    floatKeyframes: { x: [0, 56, -42, 0], y: [0, -48, 64, 0] },
    duration: 8,
    delay: 0,
    influence: 80,
  },
  {
    color: ORB_COLORS[1],
    size: 380,
    x: "60%",
    y: "10%",
    floatKeyframes: { x: [0, -58, 44, 0], y: [0, 52, -38, 0] },
    duration: 10,
    delay: 0.5,
    influence: -60,
  },
  {
    color: ORB_COLORS[2],
    size: 320,
    x: "75%",
    y: "55%",
    floatKeyframes: { x: [0, 48, -62, 0], y: [0, -68, 46, 0] },
    duration: 9,
    delay: 0.2,
    influence: 70,
  },
  {
    color: ORB_COLORS[3],
    size: 280,
    x: "5%",
    y: "60%",
    floatKeyframes: { x: [0, -52, 70, 0], y: [0, 58, -44, 0] },
    duration: 11,
    delay: 0.8,
    influence: -50,
  },
  {
    color: ORB_COLORS[4],
    size: 260,
    x: "50%",
    y: "75%",
    floatKeyframes: { x: [0, 64, -48, 0], y: [0, -54, 40, 0] },
    duration: 8.5,
    delay: 0.3,
    influence: 60,
  },
];

export default function HeroMotionBackground() {
  const { ref, x: mouseX, y: mouseY } = useMousePosition();

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, #0f0f12 0%, #1a1a20 35%, #242430 70%, #1e1e28 100%)",
        }}
      />
      {/* Subtle grid overlay for tech feel */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Floating orbs */}
      {ORB_CONFIGS.map((orb, i) => (
          <Orb
            key={i}
            color={orb.color}
            size={orb.size}
            initialX={orb.x}
            initialY={orb.y}
            floatKeyframes={orb.floatKeyframes}
            duration={orb.duration}
            delay={orb.delay}
            mouseX={mouseX}
            mouseY={mouseY}
            mouseInfluence={orb.influence}
          />
      ))}
      {/* Soft vignette to keep focus on center content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, rgba(0,0,0,0.2) 100%)",
        }}
      />
    </div>
  );
}
