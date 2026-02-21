import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import OptionalImage from "@/components/website-development/OptionalImage";
import InvestmentPackagesSection from "@/components/website-development/InvestmentPackagesSection";
import TrustedByCarousel from "@/components/website-development/TrustedByCarousel";
import HeroBookCallSection from "@/components/website-development/HeroBookCallSection";
import WebsiteDevelopmentAboutSection from "@/components/website-development/WebsiteDevelopmentAboutSection";
import TestimonialsSection from "@/components/website-development/TestimonialsSection";

export const metadata: Metadata = {
  title: "Website Development - Krisan Putih",
  description:
    "Experienced Asian-based Web Development Partner for Your Business. Build a credible, high-performing website without paying large agency fees.",
};

const trustedByLogos = Array.from({ length: 12 }, (_, i) => ({
  label: `Frame ${i + 6}`,
  src: [
    `/website-development/clients/frame-${i + 6}.png`,
    `/website-development/clients/frame-${i + 6}.jpg`,
    `/website-development/clients/frame-${i + 6}.webp`,
  ],
}));

const ourWork = [
  { name: "Brownboot Coffee", slug: "brownboot-coffee", category: "Web development" },
  { name: "Tukel Inc.", slug: "tukel-inc", category: "Web development" },
  { name: "Sigma Growth", slug: "sigma-growth", category: "Web development" },
  { name: "Garment Decor", slug: "garment-decor", category: "Web development" },
  { name: "Cincy Premier Dermatology", slug: "cincy-premier-dermatology", category: "Web development" },
  { name: "Level X Black", slug: "level-x-black", category: "Web development" },
  { name: "Nataero AI", slug: "nataero-ai", category: "Web development" },
  { name: "ONE Card", slug: "one-card", category: "Web development" },
  { name: "AVRA Cleaning", slug: "avra-cleaning", category: "Web design & development" },
];

const testimonials = [
  {
    name: "Moses Mehraban",
    location: "USA",
    company: "Brownboot Coffee",
    quote:
      "Septiani did an excellent job. It was impressive how she handled all the custom code requirements and delivered the project successfully.",
    image: "/website-development/testimonials/moses-mehraban.jpg",
  },
  {
    name: "Devyn Lado",
    location: "USA",
    company: "Garment Decor",
    quote: "The website looks great! I like the way it you made it, awesome!",
    image: "/website-development/testimonials/devyn-lado.jpg",
  },
  {
    name: "Jony",
    location: "New Zealand",
    company: "AVRA Cleaning",
    quote: "Excellent work — reliable and consistently professional.",
    image: "/website-development/testimonials/jony.png",
  },
  {
    name: "Eng Set",
    location: "Singapore",
    company: "Sigma Growth",
    quote: "Thank you Septi! The web looks good! The work results are as expected.",
    image: "/website-development/testimonials/eng-set.png",
  },
];

const howItWorks = [
  {
    title: "Discovery call",
    description:
      "Understanding business goals, target audience, and project requirements.",
  },
  {
    title: "Proposal & Scope",
    description:
      "Detailed proposal outlining the project scope, timeline, deliverables, and investment.",
  },
  {
    title: "Design & Development",
    description:
      "Design and build the website with a focus on performance, usability, and brand alignment.",
  },
  {
    title: "Testing & Launch",
    description:
      "Conduct thorough testing across devices and browsers to ensure optimal performance.",
  },
];

const scopeOfServices = [
  "Website UI/UX Design",
  "Website Development",
  "Plugin/App Development",
  "SEO Optimization",
  "Web Support & Maintenance",
  "Website Revamp & Optimization",
];

const benefits = [
  {
    title: "Flexible Investment",
    description:
      "We offer scalable solutions aligned to your budget, ensure you receive maximum value.",
  },
  {
    title: "Secure Hiring Option",
    description:
      "You may choose to engage our service through freelancer platform.",
  },
  {
    title: "Client-First Focus",
    description:
      "Clear communication, defined project milestones, and full transparency at every stage.",
  },
];

const packages = [
  {
    name: "Starter",
    tag: "Ideal for SMEs & growing businesses",
    price: "$ 300-600",
    features: [
      "Up to 8 pages",
      "CMS-based (WordPress)",
      "Fully responsive design",
      "Basic SEO setup",
      "Google Analytic Integration",
    ],
    description:
      "A practical solution for businesses, credible website without unnecessary complexity.",
    cta: "Get a Quote",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Advance",
    tag: "Designed for enhanced performance and flexibility.",
    price: "$ 700-1,300",
    features: [
      "Up to 15 pages",
      "Custom-coded (HTML, JS)",
      "Speed optimization",
      "SEO optimization (3 months)",
      "Google Analytic Integration",
    ],
    description:
      "Perfect for stronger branding, improved performance, and a more tailored digital presence.",
    cta: "Get a Quote",
    popular: true,
    badge: "Recommended",
  },
  {
    name: "Enterprise",
    tag: "Best for advanced functionality and scalability.",
    price: "$ 1,500+",
    features: [
      "Unlimited pages",
      "Custom-coded (HTML, JS)",
      "API integration",
      "SEO optimization (6 months)",
      "Free support (6 months)",
    ],
    description:
      "Built for organizations that need a scalable, performance-driven digital platform with long-term support.",
    cta: "Get a Quote",
    popular: false,
  },
];

const faqs = [
  {
    q: "How do we communicate during the project?",
    a: "We are flexible and adapt to our clients' preferred communication channels. Typically, we use email, Slack, WhatsApp, and Zoom meetings to ensure smooth and consistent collaboration throughout the project.",
  },
  {
    q: "How many revisions are included?",
    a: "Our standard proposal includes up to three (3) rounds of revisions. Additional revisions can be accommodated if required, subject to scope adjustments and agreed additional fees.",
  },
  {
    q: "Does the pricing include hosting/server costs?",
    a: "Our default pricing does not include hosting or server costs. However, we can provide a bundled package that includes hosting services upon request.",
  },
  {
    q: "Are bug fixes included after project handover?",
    a: "Yes. As long as no modifications have been made by the client after project handover, any bugs or technical errors identified will remain our responsibility and will be fixed at no additional cost.",
  },
  {
    q: "What does the monthly maintenance service include?",
    a: "Our maintenance services may include bug fixes, text or image updates, database uploads, URL adjustments, and other minor website updates as required.",
  },
  {
    q: "Is there an additional fee when hiring via Sribu or Upwork?",
    a: "Yes. When hiring through Sribu or Upwork, there will be an additional charge equivalent to 50% of the platform fee. For example, if the platform fee is 10% of the total project value, an additional 5% will be applied to the project cost.",
  },
  {
    q: "How does the payment process work if not using Sribu or Upwork?",
    a: "For direct engagements, payment is made via bank transfer. Projects are typically structured with a phased payment system, starting with an initial deposit and the remaining balance upon project completion.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <HeroBookCallSection />

      {/* Trusted by clients - autoplay carousel */}
      <section className="px-6 py-12 bg-black border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-secondary font-semibold mb-8">
            Trusted by Client Globally
          </h2>
          <TrustedByCarousel logos={trustedByLogos} />
        </div>
      </section>

      {/* About Us – 70% content left-aligned, 30% static image */}
      <WebsiteDevelopmentAboutSection />

      {/* Our Work */}
      <section className="px-6 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center">
            Our Work
          </h2>
          <p className="text-text text-center mb-12 max-w-2xl mx-auto">
            Delivering professional web solutions for businesses across borders.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourWork.map((project) => (
              <Link
                key={project.name}
                href="/portfolio"
                className="block p-6 rounded-2xl border border-gray-800 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <OptionalImage
                  src={[
                    `/website-development/work/${project.slug}.webp`,
                    `/website-development/work/${project.slug}.jpg`,
                    `/website-development/work/${project.slug}.jpeg`,
                    `/website-development/work/${project.slug}.png`,
                  ]}
                  alt={project.name}
                  width={800}
                  height={450}
                  className="aspect-video rounded-lg mb-4 overflow-hidden bg-gray-800"
                  imgClassName=""
                  placeholder={
                    <div className="aspect-video rounded-lg bg-gray-800 flex items-center justify-center text-gray-500 text-sm text-center px-2">
                      {project.name}
                    </div>
                  }
                />
                <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-text/80 mt-1">{project.category}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="text-primary font-semibold hover:underline"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials: 50/50 — left: heading + See more; right: vertical carousel */}
      <TestimonialsSection testimonials={testimonials} />

      {/* How It Work */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-12 text-center">
            How It Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-secondary mb-2">{step.title}</h3>
                <p className="text-text text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Services */}
      <section className="px-6 py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-12 text-center">
            Scope of Services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {scopeOfServices.map((s) => (
              <div
                key={s}
                className="bg-gray-900 px-6 py-4 rounded-xl border border-gray-800 text-center font-medium text-secondary"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experienced Working with / Benefits */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-12 text-center">
            Experienced Working with
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="p-8 rounded-2xl border border-gray-800 hover:border-primary/20 transition-colors text-center"
              >
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center text-primary [&_svg]:w-full [&_svg]:h-full [&_svg]:max-w-14 [&_svg]:max-h-14">
                  {i === 0 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" /><path d="M18 10V3" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold text-secondary text-lg mb-3">
                  {b.title}
                </h3>
                <p className="text-text text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Packages */}
      <InvestmentPackagesSection packages={packages} />

      {/* FAQ */}
      <section className="px-6 py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-gray-700 pb-6 last:border-0"
              >
                <h3 className="font-semibold text-secondary mb-2">{faq.q}</h3>
                <p className="text-text text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Build a Stronger Digital Presence?
          </h2>
          <p className="text-gray-300 mb-8">
            Book a free call and let&apos;s discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6287833060699"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Book a Free Call
            </a>
            <a
              href="https://www.sribu.com/id/browse-freelancer?search=krisanputih"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center text-white border-2 border-white/30 px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Hire Securely via Sribu
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            You may also hire us securely via{" "}
            <a href="https://www.sribu.com/id/browse-freelancer?search=krisanputih" className="text-primary hover:underline">Sribu</a>
            {" "}or{" "}
            <a href="https://upwork.com/freelancers/~01305067a5a92bbf8f" className="text-primary hover:underline">Upwork</a> freelancer platform.
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            We typically respond within 24 hours.
          </p>
          <p className="mt-8 text-gray-400 text-sm">
            Central Java, Indonesia · Contact@krisanputih.com · +62 87 833 0606 99
          </p>
        </div>
      </section>
    </div>
  );
}
