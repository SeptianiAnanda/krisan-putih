"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity-queries";

const CATEGORY_LABELS: Record<string, string> = {
  "web-development": "Web Development",
  "graphic-design": "Graphic Design",
  "social-media": "Social Media",
  seo: "SEO",
};

export type PortfolioProject = {
  _id: string;
  slug: { current: string };
  title: string;
  tagline?: string;
  client?: string;
  mainImage?: unknown;
  categories?: string[];
  completedAt?: string;
  country?: string;
  framework?: string;
};

function formatCountry(value: string): string {
  return value
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

interface PortfolioFilterGridProps {
  projects: PortfolioProject[];
}

export default function PortfolioFilterGrid({ projects }: PortfolioFilterGridProps) {
  const [category, setCategory] = useState<string>("");
  const [framework, setFramework] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const { categoryOptions, frameworkOptions, countryOptions, yearOptions } = useMemo(() => {
    const categories = new Set<string>();
    const frameworks = new Set<string>();
    const countries = new Set<string>();
    const years = new Set<number>();

    projects.forEach((p) => {
      (p.categories || []).forEach((c) => categories.add(c));
      if (p.framework?.trim()) frameworks.add(p.framework.trim());
      if (p.country?.trim()) countries.add(p.country.trim());
      if (p.completedAt) years.add(new Date(p.completedAt).getFullYear());
    });

    return {
      categoryOptions: Array.from(categories).sort(),
      frameworkOptions: Array.from(frameworks).sort(),
      countryOptions: Array.from(countries).sort(),
      yearOptions: Array.from(years).sort((a, b) => b - a),
    };
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (category && !(p.categories || []).includes(category)) return false;
      if (framework && (p.framework || "").trim() !== framework) return false;
      if (country && (p.country || "").trim() !== country) return false;
      if (year && p.completedAt && new Date(p.completedAt).getFullYear().toString() !== year)
        return false;
      return true;
    });
  }, [projects, category, framework, country, year]);

  return (
    <>
      {/* Horizontal filter – centered */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        <select
          aria-label="Project category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white pl-3 pr-[22px] py-2 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">All categories</option>
          {categoryOptions.map((c) => (
            <option key={c} value={c}>
              {CATEGORY_LABELS[c] || c}
            </option>
          ))}
        </select>
        <select
          aria-label="Framework"
          value={framework}
          onChange={(e) => setFramework(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white pl-3 pr-[22px] py-2 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">All frameworks</option>
          {frameworkOptions.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <select
          aria-label="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white pl-3 pr-[22px] py-2 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">All countries</option>
          {countryOptions.map((c) => (
            <option key={c} value={c}>
              {formatCountry(c)}
            </option>
          ))}
        </select>
        <select
          aria-label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white pl-3 pr-[22px] py-2 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">All years</option>
          {yearOptions.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>
        {(category || framework || country || year) && (
          <button
            type="button"
            onClick={() => {
              setCategory("");
              setFramework("");
              setCountry("");
              setYear("");
            }}
            className="text-sm text-primary hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Results count (optional) */}
      <p className="mb-6 text-sm text-text/70">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Project grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project) => (
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
                      {new Date(project.completedAt).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "short",
                      })}
                    </time>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-2xl">
          <p className="text-text text-lg">No projects match the selected filters.</p>
          <button
            type="button"
            onClick={() => {
              setCategory("");
              setFramework("");
              setCountry("");
              setYear("");
            }}
            className="mt-4 text-primary font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
