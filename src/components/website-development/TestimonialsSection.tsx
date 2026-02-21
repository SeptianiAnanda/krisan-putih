"use client";

import OptionalImage from "./OptionalImage";

export type Testimonial = {
  name: string;
  location: string;
  company: string;
  quote: string;
  /** Optional: path to client photo, e.g. "/website-development/testimonials/moses-mehraban.jpg" */
  image?: string;
};

const SEE_MORE_URL = "https://www.sribu.com/id/browse-freelancer?search=krisanputih";
const CAROUSEL_DURATION_S = 20;

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="px-6 py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left column: heading, subheading, See more */}
        <div className="text-center md:text-left">
          <h2 className="text-secondary font-bold mb-3" style={{ fontSize: "clamp(20px, 22pt, 22pt)" }}>
            TESTIMONIALS
          </h2>
          <h3 className="text-secondary font-semibold mb-8" style={{ fontSize: "clamp(30px, 33pt, 35pt)" }}>
            What They Say
          </h3>
          <a
            href={SEE_MORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline inline-block"
          >
            See more
          </a>
        </div>

        {/* Right column: vertical carousel (1 column, up, 20s, smooth, infinite) */}
        <div
          className="overflow-hidden rounded-2xl relative"
          style={{
            height: "320px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div
            className="flex flex-col gap-6"
            style={{
              animation: `testimonials-scroll-up ${CAROUSEL_DURATION_S}s linear infinite`,
              width: "100%",
            }}
          >
            {/* Duplicate list for seamless infinite loop */}
            {[testimonials, testimonials].flat().map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-sm flex-shrink-0"
              >
                <p className="text-text italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  {t.image ? (
                    <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-primary/10">
                      <OptionalImage
                        src={[
                          t.image,
                          t.image.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp"),
                          t.image.replace(/\.(webp|png|jpeg)$/i, ".jpg"),
                        ]}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="h-full w-full"
                        imgClassName="object-cover h-full w-full"
                        placeholder={
                          <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {t.name.slice(0, 1)}
                          </div>
                        }
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                      {t.name.slice(0, 1)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-secondary">{t.name}</p>
                    <p className="text-sm text-text/80">
                      {t.location} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
