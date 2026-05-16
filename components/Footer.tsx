import Link from "next/link";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-[3px] border-ink bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm sm:flex-row sm:justify-between sm:gap-6">
        <p className="inline-flex items-center gap-2 text-base font-black tracking-tight text-ink">
          <span aria-hidden>★</span>
          THREE THOUSAND
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-ink">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b-2 border-transparent px-1 text-xs font-black uppercase tracking-wider transition-colors hover:border-ink focus:outline-none focus-visible:border-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">
          © 2024 Three Thousand
        </p>
      </div>
    </footer>
  );
}
