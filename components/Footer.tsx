import Link from "next/link";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/60 bg-white/40 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm sm:flex-row sm:justify-between sm:gap-6">
        <p className="inline-flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100">
          <span aria-hidden>✨</span>
          Three Thousand
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-1 font-medium transition-colors hover:text-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:hover:text-violet-300 dark:focus-visible:ring-offset-slate-950"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © 2024 Three Thousand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
