import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity-queries";
import { PortableText } from "@portabletext/react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

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
        <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">{children}</h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-xl font-semibold text-secondary mt-8 mb-3">{children}</h3>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-text leading-relaxed mb-4">{children}</p>
      ),
    },
  };

  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/portfolio" className="text-primary hover:underline text-sm mb-8 inline-block">
          ← Back to Portfolio
        </Link>

        <header className="mb-12">
          {project.client && (
            <p className="text-primary font-semibold mb-2">{project.client}</p>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="text-xl text-text/80">{project.tagline}</p>
          )}
          {project.completedAt && (
            <time className="text-sm text-text/60 mt-4 block">
              Completed {new Date(project.completedAt).toLocaleDateString("id-ID", {
                month: "long",
                year: "numeric",
              })}
            </time>
          )}
        </header>

        {project.mainImage && (
          <div className="rounded-2xl overflow-hidden mb-12 shadow-xl">
            <Image
              src={urlFor(project.mainImage).width(1200).height(800).url()}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {project.body && (
          <div className="prose prose-lg max-w-none mb-12">
            <PortableText value={project.body} components={components} />
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {project.images.map((img: unknown, i: number) => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <Image
                  src={urlFor(img as Parameters<typeof urlFor>[0]).width(800).height(600).url()}
                  alt={`${project.title} - ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View Project →
          </a>
        )}
      </div>
    </article>
  );
}
