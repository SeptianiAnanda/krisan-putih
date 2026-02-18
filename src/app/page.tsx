import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesListSection from "@/components/home/ServicesListSection";
import LatestBlogSection from "@/components/home/LatestBlogSection";
import CTASection from "@/components/home/CTASection";
import { getLatestPosts } from "@/lib/sanity-queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  let posts: unknown[] = [];
  try {
    posts = await getLatestPosts(3);
  } catch {
    // Sanity not configured yet - show empty
  }

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ServicesListSection />
      <LatestBlogSection posts={posts as Parameters<typeof LatestBlogSection>[0]["posts"]} />
      <CTASection />
    </>
  );
}
