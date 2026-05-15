import { COUPANG_DISCLAIMER, type AffiliateProduct } from "@/lib/affiliates";

type CoupangRecommendProps = {
  items: AffiliateProduct[];
};

export default function CoupangRecommend({ items }: CoupangRecommendProps) {
  // Only render items whose URL has been replaced with a real Coupang Partners
  // short link. Curated entries with empty/placeholder URLs are skipped so the
  // section doesn't appear half-broken while we're still filling in links.
  const validItems = items.filter((item) =>
    item.url.startsWith("https://link.coupang.com/"),
  );
  if (!validItems.length) return null;

  return (
    <section className="mx-auto mt-12 w-full max-w-2xl px-6">
      <header className="text-center">
        <h2 className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-slate-900 dark:text-slate-50">
          <span aria-hidden>🛒</span>
          이 유형에 어울리는 아이템
        </h2>
        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          {COUPANG_DISCLAIMER}
        </p>
      </header>

      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {validItems.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-amber-500 dark:focus-visible:ring-offset-slate-950"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-amber-100 to-rose-100 text-2xl dark:from-amber-950/40 dark:to-rose-950/40">
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span aria-hidden>{item.emoji ?? "🎁"}</span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-900 dark:text-slate-50">
                  {item.title}
                </p>
                {item.description && (
                  <p className="mt-0.5 line-clamp-2 text-xs text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                )}
              </div>
              <span
                aria-hidden
                className="text-slate-300 transition-colors group-hover:text-amber-500 dark:text-slate-600 dark:group-hover:text-amber-300"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
