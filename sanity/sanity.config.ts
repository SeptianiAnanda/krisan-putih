import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

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
