import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity-queries";
import { PortableText } from "@portabletext/react";
import ImageLightbox from "@/components/portfolio/ImageLightbox";
import GalleryCarousel from "@/components/portfolio/GalleryCarousel";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORY_LABELS: Record<string, string> = {
  "web-development": "Web Development",
  "graphic-design": "Graphic Design",
  "social-media": "Social Media",
  "seo": "SEO",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  try {
    const projects = await getAllProjects();
    return projects.map((project: { slug: { current: string } }) => ({
      slug: project.slug.current,
    }));
  } catch {
    return [];
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const components = {
    block: {
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-2xl font-bold text-secondary mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-xl font-semibold text-secondary mt-4 mb-2">{children}</h3>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-text leading-relaxed mb-4">{children}</p>
      ),
    },
  };

  const year = project.completedAt
    ? new Date(project.completedAt).getFullYear()
    : null;
  const scopeLabels =
    project.categories?.map((c: string) => CATEGORY_LABELS[c] || c) ?? [];

  return (
    <article className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/portfolio"
          className="text-primary hover:underline text-sm mb-10 inline-block"
        >
          ← Back to Portfolio
        </Link>

        {/* Section 1: Hero – 2 column (left: client, title, tagline | right: featured image) */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20">
          <div className="text-left">
            {project.client && (
              <p className="text-primary font-semibold mb-3" style={{ fontSize: "clamp(16px, 1.125rem, 18px)" }}>
                {project.client}
              </p>
            )}
            <h1
              className="font-bold text-secondary mb-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              {project.title}
            </h1>
            {project.tagline && (
              <p className="text-text/90" style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)" }}>
                {project.tagline}
              </p>
            )}
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800">
            {project.mainImage && (
              <ImageLightbox
                imageUrl={urlFor(project.mainImage).width(1200).height(900).url()}
                fullSizeUrl={urlFor(project.mainImage).url()}
                alt={project.title}
                width={1200}
                height={900}
                className="w-full h-full"
                imgClassName="object-cover w-full h-full"
                block
                priority
              />
            )}
          </div>
        </section>

        {/* Section 2: About Project (60%) + Meta sidebar (40%) */}
        <section className="grid md:grid-cols-10 gap-10 md:gap-12 mb-20">
          <div className="md:col-span-6 text-left">
            {project.body && (
              <>
                <h2 className="text-secondary font-bold mb-6" style={{ fontSize: "clamp(1.5rem, 2vw, 2.1875rem)" }}>
                  About Project
                </h2>
                <div className="prose prose-lg prose-invert max-w-none text-text">
                  <PortableText value={project.body} components={components} />
                </div>
              </>
            )}
          </div>
          <div className="md:col-span-4 text-left space-y-4">
            {scopeLabels.length > 0 && (
              <div>
                <span className="text-secondary font-semibold block mb-1">Scope</span>
                <p className="text-text">{scopeLabels.join(", ")}</p>
              </div>
            )}
            {year && (
              <div>
                <span className="text-secondary font-semibold block mb-1">Year</span>
                <p className="text-text">{year}</p>
              </div>
            )}
            {project.country && (
              <div>
                <span className="text-secondary font-semibold block mb-1">Country</span>
                <p className="text-text capitalize">{project.country.replace(/-/g, " ")}</p>
              </div>
            )}
            {project.framework && (
              <div>
                <span className="text-secondary font-semibold block mb-1">Framework</span>
                <p className="text-text">{project.framework}</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimony – special container */}
        {(project.testimony || project.nameOfPIC) && (
          <section className="mb-20 rounded-2xl bg-gray-900 border border-gray-800 px-8 py-10 md:px-12 md:py-12">
            {project.testimony && (
              <blockquote className="text-lg md:text-xl text-text/90 italic mb-4 border-l-4 border-primary pl-6">
                {project.testimony}
              </blockquote>
            )}
            {project.nameOfPIC && (
              <p className="text-secondary font-semibold text-right">
                — {project.nameOfPIC}
              </p>
            )}
          </section>
        )}

        {/* Section 3: Gallery – carousel (autoplay 30s, 15px gap, equal height, lightbox) */}
        {project.images && project.images.length > 0 && (
          <section className="mb-20">
            <GalleryCarousel
              items={project.images.map((img: unknown, i: number) => ({
                imageUrl: urlFor(img as Parameters<typeof urlFor>[0]).width(1200).height(800).url(),
                fullSizeUrl: urlFor(img as Parameters<typeof urlFor>[0]).url(),
                alt: `${project.title} - ${i + 1}`,
              }))}
            />
          </section>
        )}

        {/* Section 4: Project Result (60%) + View project button (40%) */}
        <section className="grid md:grid-cols-10 gap-10 md:gap-12 items-start">
          <div className="md:col-span-6 text-left">
            {(project.projectResult ?? "").trim() && (
              <>
                <h2 className="text-secondary font-bold mb-6" style={{ fontSize: "clamp(1.5rem, 2vw, 2.1875rem)" }}>
                  Project Result
                </h2>
                <div className="text-text leading-relaxed whitespace-pre-line">
                  {project.projectResult}
                </div>
              </>
            )}
          </div>
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                View project →
              </a>
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
