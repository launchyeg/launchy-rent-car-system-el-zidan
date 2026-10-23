# El Zidan Rent Car

Internal management system for El Zidan Rent Car: an Arabic (RTL) admin dashboard at `/dashboard` for managing the fleet, insurance, license renewals, maintenance, and bookings. There is no public landing page — `/` is an empty page with a one-line notice saying the site belongs to El Zidan.

See [CHANGELOG.md](CHANGELOG.md) for what's been added/changed over time.

## Admin dashboard

Source lives under `src/dashboard/` (components, pages under `src/pages/dashboard/`). Backend setup (Supabase schema, migrations, Edge Functions, push notifications) is documented in [supabase/README.md](supabase/README.md).

## Running the project

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build
npm run preview  # preview the production build locally
npm run lint     # lint the codebase
```
