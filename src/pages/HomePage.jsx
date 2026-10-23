import { Link } from "react-router-dom";
import { footer } from "../content/content";

// Intentionally minimal "/" page: El Zidan has no public landing page, this
// system is only the internal dashboard (/login → /dashboard).
export default function HomePage() {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="flex min-h-screen flex-col bg-surface-alt font-arabic"
    >
      <header className="border-b border-border-soft bg-white">
        <div className="mx-auto flex h-20 w-[min(100%-2.5rem,1100px)] items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/icon-red.png"
              alt=""
              width="48"
              height="48"
              className="h-12 w-12"
            />
            <span className="font-heading text-lg font-extrabold text-ink">
              El Zidan Rent Car
            </span>
          </Link>
          <Link
            to="/login"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            تسجيل الدخول
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          مرحبًا بك في معرض زيدان لتأجير السيارات
        </h1>
        <p className="max-w-2xl text-base text-ink-soft sm:text-lg">
          نظام إدارة داخلي لمتابعة السيارات والتأمينات والرخص والصيانة والحجوزات
          بكل سهولة.
        </p>
      </main>

      <footer
        dir="ltr"
        className="border-t border-border-soft bg-white py-6 text-center text-sm text-ink-faint"
      >
        El Zidan Rent Car © {new Date().getFullYear()} Developed by{" "}
        <a
          href={footer.development}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-ink-soft transition-colors hover:text-primary"
        >
          Launchy
        </a>
      </footer>
    </div>
  );
}
