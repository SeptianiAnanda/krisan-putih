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

### 5. (Optional) Instagram feed on homepage

The homepage shows a 4×2 grid of your latest Instagram posts (@krisanputih), updated automatically every hour. To enable it:

1. Use an **Instagram Business or Creator** account and link it to a **Facebook Page**.
2. Create a [Facebook App](https://developers.facebook.com/apps/) and add the **Instagram Graph API** product.
3. Get a **User Access Token** with `instagram_basic` and `pages_show_list` (via Graph API Explorer or your app’s login).
4. Get your **Instagram Business Account ID** (numeric): use the [Graph API Explorer](https://developers.facebook.com/tools/explorer/) to call `me/accounts`, then from the Page ID get the connected Instagram account ID.
5. In `.env.local` set:
   - `INSTAGRAM_ACCESS_TOKEN` — long-lived User Access Token
   - `INSTAGRAM_USER_ID` — your Instagram Business Account ID (numeric)

If these are not set, the Instagram section is hidden. [Instagram Graph API docs](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api).

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
