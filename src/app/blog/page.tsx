import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity-queries";

export const metadata = {
  title: "Blog | Krisan Putih",
  description: "Latest insights and news from Krisan Putih - web development, SEO, and digital marketing.",
};

// Always fetch fresh posts from Sanity (no cached empty list)
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
  let posts: Array<{
    _id: string;
    slug: { current: string };
    title: string;
    excerpt?: string;
    publishedAt: string;
    mainImage?: unknown;
  }> = [];
  try {
    posts = await getAllPosts();
  } catch {
    // Sanity not configured
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Latest Blogs & News
          </h1>
          <p className="text-text text-lg">
            Insights, tips, and updates on web development, digital marketing, and SEO.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post._id} className="group">
                <Link href={`/blog/${post.slug.current}`} className="block">
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-800 mb-6">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage as Parameters<typeof urlFor>[0]).width(800).height(450).url()}
                        alt={post.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}
                  </div>
                  <time className="text-sm text-text/60">
                    {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="text-2xl font-bold text-secondary mt-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-text mt-3 line-clamp-2">{post.excerpt}</p>
                  )}
                  <span className="inline-block mt-4 text-primary font-medium group-hover:underline">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-900 rounded-2xl border border-gray-800">
            <p className="text-text text-lg">No blog posts yet.</p>
            <p className="text-text/70 mt-2">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </div>
  );
}
