import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity-queries";
import { PortableText } from "@portabletext/react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post: { slug: { current: string } }) => ({
      slug: post.slug.current,
    }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const components = {
    block: {
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">{children}</h2>
      ),
      h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-xl font-semibold text-secondary mt-8 mb-3">{children}</h3>
      ),
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="text-text leading-relaxed mb-4">{children}</p>
      ),
      blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-text/80">
          {children}
        </blockquote>
      ),
    },
  };

  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-primary hover:underline text-sm mb-8 inline-block">
          ← Back to Blog
        </Link>
        <header className="mb-12">
          <time className="text-sm text-text/60">
            {new Date(post.publishedAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-text/80">{post.excerpt}</p>
          )}
        </header>
        {post.mainImage && (
          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <Image
              src={urlFor(post.mainImage).width(900).height(506).url()}
              alt={post.title}
              width={900}
              height={506}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        )}
        {post.body && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
        )}
      </div>
    </article>
  );
}
