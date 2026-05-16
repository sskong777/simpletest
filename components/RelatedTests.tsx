import Link from "next/link";
import { developerTest } from "@/lib/tests/developer";
import { coffeeTest } from "@/lib/tests/coffee";
import { travelTest } from "@/lib/tests/travel";
import { musicTest } from "@/lib/tests/music";
import { foodTest } from "@/lib/tests/food";

const allTests = [developerTest, coffeeTest, travelTest, musicTest, foodTest];
const TINTS = ["#FF6B6B", "#4ECDC4", "#FFE66D"];

type RelatedTestsProps = {
  currentTestId: string;
};

export default function RelatedTests({ currentTestId }: RelatedTestsProps) {
  const others = allTests.filter((t) => t.id !== currentTestId).slice(0, 3);
  return (
    <section className="mx-auto mt-12 w-full max-w-2xl px-6">
      <h2 className="text-center text-[10px] font-black uppercase tracking-widest text-ink-muted">
        ★ 이런 테스트도 어울려요
      </h2>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {others.map((t, i) => {
          const tint = TINTS[i % TINTS.length];
          return (
            <li key={t.id}>
              <Link
                href={`/tests/${t.id}`}
                className="group flex h-full items-center gap-3 border-[3px] border-ink bg-card px-4 py-3 brutal-shadow transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-lg"
              >
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center border-[2px] border-ink text-xl"
                  style={{ backgroundColor: tint }}
                >
                  {t.emoji}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-black text-ink">
                    {t.title}
                  </span>
                  <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                    {t.questions.length}문항 · 2분
                  </span>
                </span>
                <span aria-hidden className="font-black text-ink">
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
