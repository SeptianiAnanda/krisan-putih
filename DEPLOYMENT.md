# Deploy to Vercel and Connect Your Domain

Follow these steps to deploy your Krisan Putih website to Vercel and connect your custom domain.

---

## Part 1: Deploy to Vercel

### Step 1: Push your code to GitHub

1. Create a GitHub account at [github.com](https://github.com) if you don’t have one.
2. Create a **new repository** (e.g. `krisan-putih-website`). Do **not** add a README (you already have one).
3. In your project folder, open a terminal and run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

### Step 2: Sign up / log in to Vercel

1. Go to [vercel.com](https://vercel.com).
2. Click **Sign Up** or **Log In**.
3. Choose **Continue with GitHub** and authorize Vercel to access your GitHub account.

### Step 3: Import your project

1. On the Vercel dashboard, click **Add New…** → **Project**.
2. You’ll see a list of your GitHub repos. Find your project (e.g. `krisan-putih-website`) and click **Import**.
3. Leave **Framework Preset** as **Next.js** (Vercel detects it).
4. **Root Directory**: leave as `.` (project root).
5. **Build and Output Settings**: leave defaults.
6. Do **not** click Deploy yet. Go to **Environment Variables** first.

### Step 4: Add environment variables (Sanity)

1. In the same import screen, open the **Environment Variables** section.
2. Add these **one by one** (name and value):

   | Name | Value |
   |------|--------|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID (e.g. `8ewqha4l`) |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` |

   Use the same values as in your `.env.local`.
3. For each variable, leave **Environment** as **Production** (and optionally add Preview/Development if you use them).
4. Click **Deploy**.

### Step 5: Wait for the build

- Vercel will build and deploy your site (usually 1–3 minutes).
- When it’s done, you’ll get a URL like `https://your-project.vercel.app`. Open it to confirm the site works.

---

## Part 2: Connect your custom domain

### Step 6: Add the domain in Vercel

1. In the Vercel dashboard, open your **project**.
2. Go to **Settings** → **Domains**.
3. In **Domain**, type your domain (e.g. `krisanputih.com` or `www.krisanputih.com`).
4. Click **Add**.
5. Vercel will show you what to do at your domain registrar (DNS records).

### Step 7: Configure DNS at your domain registrar

Where you bought the domain (GoDaddy, Namecheap, Niagahoster, etc.):

1. Log in and open **DNS settings** or **Manage DNS** for your domain.
2. Add the records Vercel shows. Usually one of these:

   **Option A – Root domain (e.g. krisanputih.com)**  
   Vercel often asks for:

   - Type: **A**  
   - Name: `@` (or leave blank)  
   - Value: `76.76.21.21`

   **Option B – www (e.g. www.krisanputih.com)**  
   - Type: **CNAME**  
   - Name: `www`  
   - Value: `cname.vercel-dns.com`

   Use the **exact** values Vercel shows for your project.

3. Save the DNS changes. Propagation can take from a few minutes up to 24–48 hours.

### Step 8: Wait for DNS and SSL

1. Back in Vercel → **Settings** → **Domains**, the domain may show “Pending” or “Configuring” until DNS propagates.
2. When it’s ready, Vercel will issue an SSL certificate and the domain will show as **Valid**.
3. Visit your domain (e.g. `https://krisanputih.com`) to confirm the site loads.

---

## Part 3: Sanity and Studio on production

### Step 9: Allow your domain in Sanity (CORS)

So the site and Studio work on your live domain:

1. Go to [sanity.io/manage](https://sanity.io/manage) → your project.
2. Open **API** → **CORS origins**.
3. Add:
   - `https://your-domain.com`
   - `https://www.your-domain.com`
   - Your Vercel URL, e.g. `https://your-project.vercel.app`
4. Enable **Allow credentials** for each.
5. Save.

### Step 10: Studio URL after go-live

- You can keep using Studio at: **https://your-domain.com/studio** (or your Vercel URL + `/studio`).
- Log in with the same Sanity account; your content is already connected.

---

## Checklist

- [ ] Code pushed to GitHub
- [ ] Project imported in Vercel
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION` set in Vercel
- [ ] First deploy successful and site loads on `*.vercel.app`
- [ ] Domain added in Vercel → Domains
- [ ] DNS records added at registrar (A and/or CNAME as shown by Vercel)
- [ ] Domain shows Valid in Vercel and site loads on your domain
- [ ] Sanity CORS updated with your production domain(s)

If something fails (build error, domain not working, or Studio not loading), check the Vercel deployment logs and Sanity CORS; those two fix most issues.
