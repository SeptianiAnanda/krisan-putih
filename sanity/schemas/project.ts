import { defineField, defineType } from "sanity";

const COUNTRY_OPTIONS = [
  { title: "Indonesia", value: "indonesia" },
  { title: "United States", value: "united-states" },
  { title: "United Kingdom", value: "united-kingdom" },
  { title: "Australia", value: "australia" },
  { title: "Singapore", value: "singapore" },
  { title: "Malaysia", value: "malaysia" },
  { title: "New Zealand", value: "new-zealand" },
  { title: "Canada", value: "canada" },
  { title: "Germany", value: "germany" },
  { title: "Netherlands", value: "netherlands" },
  { title: "Japan", value: "japan" },
  { title: "India", value: "india" },
  { title: "Philippines", value: "philippines" },
  { title: "Thailand", value: "thailand" },
  { title: "Vietnam", value: "vietnam" },
  { title: "Other", value: "other" },
];

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short description shown in listings",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Web Development", value: "web-development" },
          { title: "Graphic Design", value: "graphic-design" },
          { title: "Social Media", value: "social-media" },
          { title: "SEO", value: "seo" },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "completedAt",
      title: "Year",
      type: "date",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "YYYY",
      },
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      options: {
        list: COUNTRY_OPTIONS,
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "framework",
      title: "Framework",
      type: "string",
      description: "e.g. Next.js, WordPress, React",
    }),
    defineField({
      name: "projectResult",
      title: "Project Result",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "nameOfPIC",
      title: "Name of PIC",
      type: "string",
      description: "Name of person in charge / point of contact",
    }),
    defineField({
      name: "testimony",
      title: "Testimony",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "link",
      title: "Project URL",
      type: "url",
    }),
    defineField({
      name: "body",
      title: "About Project",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
