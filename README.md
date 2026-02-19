# Krisan Putih Website

Next.js website for Krisan Putih digital agency. Migrated from WordPress with CMS-driven Blog and Portfolio.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity (Blog & Portfolio)
- **Design**: Primary #AE126C, Secondary #242424, Text #555555

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity CMS

1. Create a project at [sanity.io/manage](https://sanity.io/manage)
2. Copy `.env.example` to `.env.local`
3. Add your Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Access Sanity Studio

Visit [http://localhost:3000/studio](http://localhost:3000/studio) to manage Blog Posts and Portfolio Projects.

## Project Structure

- `/src/app` – Next.js App Router pages
- `/src/components` – React components (layout, home sections, UI)
- `/src/lib` – Sanity client and queries
- `/sanity/schemas` – Sanity content schemas (Blog Post, Project)

## Pages

- **/** – Homepage (Hero, Services, About, CTA, Latest Blog)
- **/blog** – Blog list (CMS-driven)
- **/blog/[slug]** – Single blog post (CMS-driven)
- **/portfolio** – Portfolio grid (CMS-driven, distinct layout)
- **/portfolio/[slug]** – Single project (CMS-driven)
- **/contact** – Contact info
- **/studio** – Sanity Studio (content management)

## Deployment (Vercel + custom domain)

See the steps below: push code to GitHub, import to Vercel, add env vars, then add your domain in Vercel and configure DNS at your registrar.
