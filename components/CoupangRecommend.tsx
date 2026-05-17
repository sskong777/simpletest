import { COUPANG_DISCLAIMER, type AffiliateProduct } from "@/lib/affiliates";

type CoupangRecommendProps = {
  items: AffiliateProduct[];
  /** 섹션 타이틀 (기본: "이 유형에 어울리는 아이템") */
  title?: string;
};

export default function CoupangRecommend({
  items,
  title,
}: CoupangRecommendProps) {
  // Only render items whose URL is a real Coupang Partners short link.
  const validItems = items.filter((item) =>
    item.url.startsWith("https://link.coupang.com/"),
  );
  if (!validItems.length) return null;

  return (
    <section className="mx-auto mt-12 w-full max-w-2xl px-6">
      <header className="text-center">
        <h2 className="inline-flex items-center gap-2 border-[3px] border-ink bg-brand-accent px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink brutal-shadow">
          <span aria-hidden>🛒</span>
          {title ?? "이 유형에 어울리는 아이템"}
        </h2>
        <p className="mt-3 text-[10px] font-bold leading-relaxed text-ink-muted">
          {COUPANG_DISCLAIMER}
        </p>
      </header>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {validItems.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="group block overflow-hidden border-[3px] border-ink bg-card brutal-shadow transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-lg"
            >
              {/* Product image — square, top */}
              <div className="relative aspect-square w-full overflow-hidden border-b-[3px] border-ink bg-paper">
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand-accent text-7xl">
                    {item.emoji ?? "🎁"}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider">
                  <span
                    className="rounded-sm px-2 py-0.5 text-white"
                    style={{ backgroundColor: "#0074E9" }}
                  >
                    쿠팡
                  </span>
                  <span className="text-ink-muted">로켓배송</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm font-black leading-snug text-ink">
                  {item.title}
                </p>
                {item.description && (
                  <p className="mt-1 line-clamp-1 text-xs font-medium text-ink-muted">
                    {item.description}
                  </p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
