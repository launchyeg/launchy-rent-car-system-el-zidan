# CLAUDE.md

Internal rent-car management system for **El Zidan Rent Car** (Egypt), built by Launchy. Forked from the El Menshawi Rent Car project; the old public landing page was removed.

## Commands

```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build -> dist/ (gitignored)
npm run preview  # serve the built dist/
npm run lint     # oxlint (config: .oxlintrc.json)
```

There are no tests and no CI config. `vercel.json` rewrites everything to `index.html` (SPA).

## Stack

- React 19 + Vite 8 (`@vitejs/plugin-react`), plain JavaScript/JSX (no TypeScript)
- Tailwind CSS v4 via `@tailwindcss/vite` — no `tailwind.config.js`; theme tokens live in `src/index.css` under `@theme`
- react-router-dom, Framer Motion, react-icons, `@supabase/supabase-js`
- oxlint for linting

## Architecture

```
index.html                  noindex, favicon, PWA manifest link, font loading
src/main.jsx                React root (StrictMode)
src/App.jsx                 Router: "/" -> HomePage, everything else -> lazy AdminArea
src/pages/HomePage.jsx      Empty home page: logo + Arabic "this site belongs to El Zidan" line
src/pages/LoginPage.jsx     Admin sign-in (English)
src/pages/dashboard/        Dashboard pages (Arabic RTL)
src/dashboard/              Dashboard components, auth, alerts, PWA/push helpers
src/components/layout/Brand.jsx   Brand lockup shared by LoginPage and the dashboard Sidebar
src/content/content.js      Only `brand` and `footer.development`, shared by LoginPage/Sidebar
src/index.css               Tailwind import, design tokens, .btn classes
public/                     favicon.png, icon-{red,black,white}.png, icons/ (PWA), sw.js, manifest.webmanifest
supabase/                   schema.sql, migrations, push-alerts Edge Function
```

`AdminArea` (login + dashboard + Supabase client) is code-split so visiting `/` never downloads Supabase.

## Status / gotchas

- **The dashboard is intentionally untouched** from the El Menshawi project and still points at that project's Supabase via `.env.local` (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_VAPID_PUBLIC_KEY`). A new El Zidan database will be set up later, then these keys, `supabase/` and the dashboard get reworked.
- The site is `noindex` and `robots.txt` disallows all crawling; there is no canonical URL or sitemap. The system will be served from a subdomain of `elzidanrentcar.com` (not decided yet) — add the real URL then if needed.
- `public/manifest.webmanifest` is scoped to `/dashboard` so only the dashboard is installable as a PWA. PWA icons (`public/icons/`) and `public/favicon.png` are generated from `public/icon-red.png`.
- `public/icon-black.png` and `public/icon-white.png` are unused alternate logo variants.

## Conventions

- Double quotes, 2-space indent, semicolons in `src/`. Short explanatory comments above components where behaviour isn't obvious.
- Tailwind v4 syntax is used (`bg-linear-to-b`, `aspect-4/3`, `z-110`, `h-10.5`, `h-30`) — don't "fix" these to v3 forms.
- External links: `target="_blank" rel="noopener noreferrer"`. Icons get `aria-hidden="true"`; icon-only buttons get `aria-label`.
