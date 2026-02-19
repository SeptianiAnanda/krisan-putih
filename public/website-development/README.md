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

## 2. Our Work (project thumbnails)

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

## 3. Experienced Working with (benefit icons)

**Folder:** `public/website-development/icons/`

**File names:**

| File name           | Benefit card           |
|--------------------|------------------------|
| icon-flexible.png  | Flexible Investment    |
| icon-secure.png    | Secure Hiring Option   |
| icon-client.png    | Client-First Focus     |

**Suggested:** Simple icons, about 64×64 px or SVG.

---

## Quick steps to upload

1. Open the project folder: `D:\Cursor\Web Krisan Putih\`
2. Go to: **public** → **website-development**
3. Create subfolders if needed: **clients**, **work**, **icons**
4. Copy your image files into the right folder and use the **exact file names** from the tables above.
5. Save. When you run the site (or redeploy), the new images will appear on the page.

If a file is missing, the section will show a placeholder until you add it.
