import Link from "next/link";
import { developerTest } from "@/lib/tests/developer";
import { coffeeTest } from "@/lib/tests/coffee";
import { travelTest } from "@/lib/tests/travel";
import { musicTest } from "@/lib/tests/music";
import { foodTest } from "@/lib/tests/food";

const allTests = [developerTest, coffeeTest, travelTest, musicTest, foodTest];

type RelatedTestsProps = {
  currentTestId: string;
};

export default function RelatedTests({ currentTestId }: RelatedTestsProps) {
  const others = allTests.filter((t) => t.id !== currentTestId).slice(0, 3);
  return (
    <section className="mx-auto mt-12 w-full max-w-2xl px-6">
      <h2 className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        이런 테스트도 어울려요
      </h2>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {others.map((t) => (
          <li key={t.id}>
            <Link
              href={`/tests/${t.id}`}
              className="group flex h-full items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-violet-500 dark:focus-visible:ring-offset-slate-950"
            >
              <span aria-hidden className="text-2xl">
                {t.emoji}
              </span>
              <span className="flex-1">
                <span className="block text-sm font-bold text-slate-900 dark:text-slate-50">
                  {t.title}
                </span>
                <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">
                  {t.questions.length}문항 · 2분
                </span>
              </span>
              <span
                aria-hidden
                className="text-slate-300 transition-colors group-hover:text-violet-500 dark:text-slate-600 dark:group-hover:text-violet-300"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
