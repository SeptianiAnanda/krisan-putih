import { createClient, SanityClient } from "next-sanity";

// Sanity projectId must be only a-z, 0-9, and dashes (no spaces, =, or variable name)
const raw = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim().toLowerCase();
export const projectId = /^[a-z0-9-]+$/.test(raw) ? raw : "";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Only create client if projectId is valid
export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;
