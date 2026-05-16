import { COUPANG_DISCLAIMER, type AffiliateProduct } from "@/lib/affiliates";

type CoupangRecommendProps = {
  items: AffiliateProduct[];
};

export default function CoupangRecommend({ items }: CoupangRecommendProps) {
  // Only render items whose URL has been replaced with a real Coupang Partners
  // short link. Curated entries with empty/placeholder URLs are skipped.
  const validItems = items.filter((item) =>
    item.url.startsWith("https://link.coupang.com/"),
  );
  if (!validItems.length) return null;

  return (
    <section className="mx-auto mt-12 w-full max-w-2xl px-6">
      <header className="text-center">
        <h2 className="inline-flex items-center gap-2 border-[3px] border-ink bg-brand-accent px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink brutal-shadow">
          <span aria-hidden>🛒</span>
          이 유형에 어울리는 아이템
        </h2>
        <p className="mt-3 text-[10px] font-bold leading-relaxed text-ink-muted">
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
              className="group flex h-full items-center gap-4 border-[3px] border-ink bg-card p-4 brutal-shadow transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-lg"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border-[2px] border-ink bg-brand-accent text-2xl"
              >
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
                <p className="truncate text-sm font-black text-ink">
                  {item.title}
                </p>
                {item.description && (
                  <p className="mt-0.5 line-clamp-2 text-xs font-medium text-ink-muted">
                    {item.description}
                  </p>
                )}
              </div>
              <span aria-hidden className="font-black text-ink">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
