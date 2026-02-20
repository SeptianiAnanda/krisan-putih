"use client";

import { useEffect, useRef, useState } from "react";
import OptionalImage from "./OptionalImage";

const DURATION_MS = 2000;
const PROJECTS_TARGET = 120;
const SATISFACTION_TARGET = 4.9;

function useCountUp(end: number, decimals: number, isInView: boolean) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;
    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 2);
      const current = eased * end;
      setValue(Number(current.toFixed(decimals)));
      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, decimals, isInView]);

  return value;
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, isInView };
}

/**
 * Static image for the right column: place your image at
 * public/website-development/about-section.jpg or about-section.webp
 */
const ABOUT_IMAGE_SRC = [
  "/website-development/about-section.webp",
  "/website-development/about-section.jpg",
];

export default function WebsiteDevelopmentAboutSection() {
  const { ref: statsRef, isInView } = useInView();
  const projects = useCountUp(PROJECTS_TARGET, 0, isInView);
  const satisfaction = useCountUp(SATISFACTION_TARGET, 1, isInView);

  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-10 gap-10 md:gap-12 items-center">
          {/* Left column – 70% – left aligned */}
          <div className="md:col-span-7 text-left">
            <h2
              className="font-bold text-secondary mb-4"
              style={{ fontSize: "clamp(20px, 1.375rem, 22px)" }}
            >
              KRISAN PUTIH
            </h2>
            <h3
              className="font-semibold text-secondary mb-6"
              style={{ fontSize: "clamp(30px, 2.25rem, 35px)" }}
            >
              About Us
            </h3>
            <p className="text-text leading-relaxed mb-8">
              Krisan Putih is a Indonesia-based <strong>web development agency</strong> helping
              businesses build professional, scalable websites with regional pricing advantage. Led
              by <strong>Septiani Ananda</strong>, an experienced developer with over{" "}
              <strong>7 years of experience</strong> handling local and international projects.
            </p>
            <div ref={statsRef} className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-primary">{projects}+</p>
                <p className="text-text text-sm mt-1">Web Project Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">{satisfaction}</p>
                <p className="text-text text-sm mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right column – 30% – static image (full image, no crop) */}
          <div className="md:col-span-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-transparent">
              <OptionalImage
                src={ABOUT_IMAGE_SRC}
                alt="Krisan Putih – About Us"
                width={600}
                height={450}
                className="absolute inset-0 w-full h-full"
                imgClassName="object-contain"
                placeholder={
                  <div className="w-full h-full min-h-[120px] flex items-center justify-center text-text/40 text-sm px-4 text-center">
                    Add about-section.jpg or .webp in public/website-development/
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
