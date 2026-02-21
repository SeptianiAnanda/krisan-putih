# Website Development Page – Where to Put Images

Add your image files in this folder so they appear on the **/website-development** page.

## 1. Trusted by Client Globally (client logos)

**Folder:** `public/website-development/clients/`

**File names:** Use these exact names so the site can find them.

| File name       | Shows in place of |
|----------------|-------------------|
| frame-6.png    | Frame 6           |
| frame-7.png    | Frame 7           |
| frame-8.png    | Frame 8           |
| frame-9.png    | Frame 9           |
| frame-10.png   | Frame 10          |
| frame-11.png   | Frame 11          |
| frame-12.png   | Frame 12          |
| frame-13.png   | Frame 13          |
| frame-14.png   | Frame 14          |
| frame-15.png   | Frame 15          |
| frame-16.png   | Frame 16          |
| frame-17.png   | Frame 17          |

You can use `.png`, `.jpg`, or `.webp`. If you use `.jpg`, name the file e.g. `frame-6.jpg` and we can update the code to use `.jpg`.

**Suggested size:** about 120×60 px or similar (logos will be scaled to fit).

---

## 2. About Us section (right column image)

**Folder:** `public/website-development/`

**File name:** Use either:

- `about-section.jpg`, or  
- `about-section.webp`

The page will try `.webp` first, then `.jpg`. Put **one** of these files directly in `public/website-development/` (no subfolder).

**Suggested size:** about 600×450 px or similar (4:3 works well). The image is displayed in the right column of the About Us block.

---

## 3. Our Work (project thumbnails)

**Folder:** `public/website-development/work/`

**File names:** Use lowercase, no spaces (use a hyphen `-`).

| File name                    | Project card            |
|-----------------------------|-------------------------|
| brownboot-coffee.jpg        | Brownboot Coffee        |
| tukel-inc.jpg               | Tukel Inc.              |
| sigma-growth.jpg            | Sigma Growth            |
| garment-decor.jpg           | Garment Decor           |
| cincy-premier-dermatology.jpg | Cincy Premier Dermatology |
| level-x-black.jpg           | Level X Black           |
| nataero-ai.jpg              | Nataero AI              |
| one-card.jpg                | ONE Card                |
| avra-cleaning.jpg           | AVRA Cleaning           |

**Suggested size:** about 800×450 px (16:9) or similar.

**Exact URLs the site will request (for debugging):**
- `/website-development/work/brownboot-coffee.jpg` (then .jpeg, .png, .webp)
- `/website-development/work/tukel-inc.jpg` …
- `/website-development/work/sigma-growth.jpg`
- `/website-development/work/garment-decor.jpg`
- `/website-development/work/cincy-premier-dermatology.jpg`
- `/website-development/work/level-x-black.jpg`
- `/website-development/work/nataero-ai.jpg`
- `/website-development/work/one-card.jpg`
- `/website-development/work/avra-cleaning.jpg`

If images don’t show, open DevTools (F12) → Network tab, refresh, and check whether these URLs return 200 or 404.

---

## 4. Experienced Working with (benefit icons)

**Folder:** `public/website-development/icons/`

**File names:**

| File name           | Benefit card           |
|--------------------|------------------------|
| icon-flexible.png  | Flexible Investment    |
| icon-secure.png    | Secure Hiring Option   |
| icon-client.png    | Client-First Focus     |

**Suggested:** Simple icons, about 64×64 px or SVG.

---

## 5. Testimonials – client profile photos

**Folder:** `public/website-development/testimonials/`

**File names:** Use lowercase, one word or hyphenated (e.g. first name + last initial, or full name with hyphens). The site will show these as circular avatars next to each testimonial. If no image is set or the file is missing, the **first letter of the client’s name** is shown instead.

| File name (example)   | Testimonial          |
|------------------------|----------------------|
| moses-mehraban.jpg     | Moses Mehraban       |
| devyn-lado.jpg         | Devyn Lado           |
| jony.jpg               | Jony                 |
| eng-set.jpg            | Eng Set              |

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp` (the page tries several extensions).

**How to connect an image to a testimonial:** In `src/app/website-development/page.tsx`, find the `testimonials` array and add an `image` property to the right object, for example:

```js
{
  name: "Moses Mehraban",
  location: "USA",
  company: "Brownboot Coffee",
  quote: "…",
  image: "/website-development/testimonials/moses-mehraban.jpg",
}
```

**Suggested size:** about 96×96 px or larger (displayed at 48×48 px, so square photos work best).

---

## 6. Hero section – background video

**Folder:** `public/website-development/video/`

**File names:** The hero uses the same names as the homepage hero. Use either or both:

| File name       | Purpose                          |
|-----------------|-----------------------------------|
| hero-bg.webm    | Preferred (smaller, good quality)  |
| hero-bg.mp4     | Fallback (Safari / older browsers)|

**Tips for fast loading:** Short loop (10–20 s), 720p or 1080p, ~1–2 Mbps bitrate, no audio (hero is muted). If no video is present, a dark gradient is shown as fallback.

---

## Quick steps to upload

1. Open the project folder: `D:\Cursor\Web Krisan Putih\`
2. Go to: **public** → **website-development**
3. Create subfolders if needed: **clients**, **work**, **icons**, **testimonials**, **video**
4. Copy your image files into the right folder and use the **exact file names** from the tables above.
5. Save. When you run the site (or redeploy), the new images will appear on the page.

If a file is missing, the section will show a placeholder until you add it.
