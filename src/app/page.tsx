import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesListSection from "@/components/home/ServicesListSection";
import OurWorkSection from "@/components/home/OurWorkSection";
import CTASection from "@/components/home/CTASection";
import { getLatestProjects } from "@/lib/sanity-queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  let projects: unknown[] = [];
  try {
    projects = await getLatestProjects(6);
  } catch {
    // Sanity not configured yet - show empty
  }

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ServicesListSection />
      <OurWorkSection projects={projects as Parameters<typeof OurWorkSection>[0]["projects"]} />
      <CTASection />
    </>
  );
}
