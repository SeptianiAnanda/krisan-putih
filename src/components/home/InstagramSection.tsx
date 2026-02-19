"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import type { InstagramMedia } from "@/lib/instagram";

const INSTAGRAM_URL = "https://instagram.com/krisanputih";

interface InstagramSectionProps {
  media: InstagramMedia[];
  error?: "missing_env" | "api_error";
}

export default function InstagramSection({ media }: InstagramSectionProps) {
  return (
    <SectionWrapper className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              Follow us on Instagram
            </h2>
            <p className="text-text">@krisanputih — latest from our feed</p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline hidden sm:block"
          >
            View profile →
          </a>
        </motion.div>
        {media.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {media.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square rounded-2xl overflow-hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.35) }}
                aria-label={item.caption ? `View post: ${item.caption.slice(0, 50)}...` : "View Instagram post"}
              >
                <Image
                  src={item.media_type === "VIDEO" && item.thumbnail_url ? item.thumbnail_url : item.media_url}
                  alt={item.caption?.slice(0, 100) ?? "Instagram post"}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </motion.a>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400 hover:border-primary/30 hover:text-primary/70 transition-colors"
              >
                <span className="text-4xl" aria-hidden>📷</span>
              </a>
            ))}
          </motion.div>
        )}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline mt-8 sm:hidden block"
        >
          View profile →
        </a>
      </div>
    </SectionWrapper>
  );
}
