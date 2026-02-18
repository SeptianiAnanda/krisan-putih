import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity-queries";

export const metadata = {
  title: "Portfolio | Krisan Putih",
  description: "Explore our web development and design projects.",
};

export default async function PortfolioPage() {
  let projects: Array<{
    _id: string;
    slug: { current: string };
    title: string;
    tagline?: string;
    client?: string;
    mainImage?: unknown;
    categories?: string[];
    completedAt?: string;
  }> = [];
  try {
    projects = await getAllProjects();
  } catch {
    // Sanity not configured
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Work
          </h1>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Explore our portfolio of web development, design, and digital marketing projects.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project._id}
                href={`/portfolio/${project.slug.current}`}
                className="group block"
              >
                <article className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage as Parameters<typeof urlFor>[0]).width(800).height(600).url()}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-text/40 text-4xl font-bold">{project.title[0]}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    {project.client && (
                      <p className="text-sm text-primary font-medium mb-1">{project.client}</p>
                    )}
                    <h2 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    {project.tagline && (
                      <p className="text-text mt-2 line-clamp-2">{project.tagline}</p>
                    )}
                    {project.completedAt && (
                      <time className="text-sm text-text/60 mt-3 block">
                        {new Date(project.completedAt).toLocaleDateString("id-ID", { year: "numeric", month: "short" })}
                      </time>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-2xl">
            <p className="text-text text-lg">No projects yet.</p>
            <p className="text-text/70 mt-2">We&apos;re adding our best work soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
