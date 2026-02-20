"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { urlFor } from "@/lib/sanity-queries";

interface ProjectMainImage {
  asset?: { _ref?: string };
}

interface Project {
  _id: string;
  slug: { current: string };
  title: string;
  tagline?: string;
  client?: string;
  mainImage?: ProjectMainImage;
  completedAt?: string;
}

interface OurWorkSectionProps {
  projects: Project[];
}

export default function OurWorkSection({ projects }: OurWorkSectionProps) {
  return (
    <SectionWrapper className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              Our Work
            </h2>
            <p className="text-text">
              Delivering professional solutions for businesses across borders.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-primary font-semibold hover:underline hidden sm:block"
          >
            View all →
          </Link>
        </motion.div>
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.article
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/portfolio/${project.slug.current}`} className="group block">
                  <div className="aspect-video bg-gray-100 rounded-2xl mb-4 overflow-hidden group-hover:opacity-90 transition-opacity">
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage).width(600).height(400).url()}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-text/40 text-4xl font-bold">
                          {project.title[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  {project.client && (
                    <p className="text-sm text-primary font-medium mb-1">{project.client}</p>
                  )}
                  <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-text/80 text-sm line-clamp-2 mb-2">{project.tagline}</p>
                  )}
                  {project.completedAt && (
                    <time className="text-sm text-text/60">
                      {new Date(project.completedAt).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "short",
                      })}
                    </time>
                  )}
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="text-text/70 text-center py-12">No projects yet. Check back soon!</p>
        )}
        <Link
          href="/portfolio"
          className="text-primary font-semibold hover:underline mt-8 sm:hidden block"
        >
          View all →
        </Link>
      </div>
    </SectionWrapper>
  );
}
