import { client } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

// Create builder only if client exists
const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: unknown) {
  if (!builder || !source) {
    // Return a mock builder if Sanity isn't configured
    const mockBuilder = {
      width: (_w: number) => ({
        height: (_h: number) => ({ url: () => "/placeholder.jpg" }),
        url: () => "/placeholder.jpg",
      }),
      height: (_h: number) => ({
        width: (_w: number) => ({ url: () => "/placeholder.jpg" }),
        url: () => "/placeholder.jpg",
      }),
      url: () => "/placeholder.jpg",
    };
    return mockBuilder as { width: (w: number) => { height: (h: number) => { url: () => string }; url: () => string }; height: (h: number) => { width: (w: number) => { url: () => string }; url: () => string }; url: () => string };
  }
  return builder.image(source as Parameters<typeof builder.image>[0]);
}

const postFields = `
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  categories
`;

const projectFields = `
  _id,
  title,
  slug,
  tagline,
  client,
  mainImage,
  categories,
  completedAt,
  link
`;

export async function getLatestPosts(limit = 6) {
  if (!client) return [];
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...${limit}] {
      ${postFields}
    }`
  );
}

export async function getAllPosts() {
  if (!client) return [];
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      ${postFields}
    }`
  );
}

export async function getPostBySlug(slug: string) {
  if (!client) return null;
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ${postFields},
      body
    }`,
    { slug }
  );
}

export async function getLatestProjects(limit = 6) {
  if (!client) return [];
  return client.fetch(
    `*[_type == "project" && defined(slug.current)] | order(completedAt desc) [0...${limit}] {
      ${projectFields}
    }`
  );
}

export async function getAllProjects() {
  if (!client) return [];
  return client.fetch(
    `*[_type == "project" && defined(slug.current)] | order(completedAt desc) {
      ${projectFields}
    }`
  );
}

export async function getProjectBySlug(slug: string) {
  if (!client) return null;
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      ${projectFields},
      body,
      images
    }`,
    { slug }
  );
}
