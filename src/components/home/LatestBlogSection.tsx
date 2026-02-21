"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { urlFor } from "@/lib/sanity-queries";

interface PostMainImage {
  asset?: { _ref?: string };
}

interface Post {
  _id: string;
  slug: { current: string };
  title: string;
  excerpt?: string;
  publishedAt: string;
  mainImage?: PostMainImage;
}

interface LatestBlogSectionProps {
  posts: Post[];
}

export default function LatestBlogSection({ posts }: LatestBlogSectionProps) {
  return (
    <SectionWrapper className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              Latest Blogs & News
            </h2>
            <p className="text-text">Insights and updates from our team</p>
          </div>
          <Link
            href="/blog"
            className="text-primary font-semibold hover:underline hidden sm:block"
          >
            View all →
          </Link>
        </motion.div>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug.current}`} className="group block">
                  <div className="aspect-video bg-gray-800 rounded-2xl mb-4 overflow-hidden group-hover:opacity-90 transition-opacity">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                  <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-text/80 text-sm line-clamp-2 mb-2">{post.excerpt}</p>
                  <time className="text-sm text-text/60">
                    {new Date(post.publishedAt).toLocaleDateString("id-ID")}
                  </time>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="text-text/70 text-center py-12">No blog posts yet. Check back soon!</p>
        )}
        <Link href="/blog" className="text-primary font-semibold hover:underline mt-8 sm:hidden block">
          View all posts →
        </Link>
      </div>
    </SectionWrapper>
  );
}
