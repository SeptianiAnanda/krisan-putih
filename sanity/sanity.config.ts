import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

// Must be only a-z, 0-9, and dashes (no spaces or extra characters)
const raw = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim().toLowerCase();
const projectId = /^[a-z0-9-]+$/.test(raw) ? raw : "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "krisan-putih",
  title: "Krisan Putih CMS",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Blog Posts").child(S.documentTypeList("post")),
            S.listItem().title("Projects").child(S.documentTypeList("project")),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
