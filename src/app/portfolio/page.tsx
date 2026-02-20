import { getAllProjects } from "@/lib/sanity-queries";
import PortfolioFilterGrid from "@/components/portfolio/PortfolioFilterGrid";

export const metadata = {
  title: "Portfolio | Krisan Putih",
  description: "Explore our web development and design projects.",
};

// Always fetch latest projects from Sanity (no cached empty list)
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PortfolioPage() {
  let projects: Parameters<typeof PortfolioFilterGrid>[0]["projects"] = [];
  try {
    projects = await getAllProjects();
  } catch {
    // Sanity not configured
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Work
          </h1>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Explore our portfolio of web development, design, and digital marketing projects.
          </p>
        </div>

        {projects.length > 0 ? (
          <PortfolioFilterGrid projects={projects} />
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
