import Link from "next/link";
import ShareButtons from "./ShareButtons";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import type { Result } from "@/lib/tests/types";

type ResultCardProps = {
  testId: string;
  testTitle: string;
  testEmoji: string;
  result: Result;
};

export default function ResultCard({
  testId,
  testTitle,
  testEmoji,
  result,
}: ResultCardProps) {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-8 sm:py-14">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-slate-500 transition-colors hover:text-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:text-slate-400 dark:hover:text-violet-300 dark:focus-visible:ring-offset-slate-950"
        >
          <span aria-hidden>←</span> 처음으로
        </Link>
        <ThemeToggle />
      </div>

      <div className="animate-fade-in-up overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-xl shadow-violet-200/40 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-violet-950/40">
        <div
          className={cn(
            "relative flex flex-col items-center px-6 pt-12 pb-9 text-center bg-gradient-to-br",
            result.gradient,
          )}
        >
          <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur dark:bg-slate-900/50 dark:text-slate-100">
            <span aria-hidden>{testEmoji}</span>
            {testTitle}
          </span>
          <div className="animate-float mt-7 flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-6xl shadow-lg ring-1 ring-white/60 dark:bg-slate-900 dark:ring-slate-700">
            {result.emoji}
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {result.title}
          </h1>
          <p className="mt-2 text-base font-medium text-slate-800 sm:text-lg">
            {result.tagline}
          </p>
        </div>

        <div className="px-6 pb-9 pt-7 sm:px-10">
          <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 dark:text-slate-200">
            {result.description}
          </p>

          <div className="mt-7">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              나의 키워드
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {result.traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full bg-gradient-to-r from-violet-100 to-rose-100 px-3 py-1 text-sm font-medium text-violet-800 dark:from-violet-950/60 dark:to-rose-950/60 dark:text-violet-200"
                >
                  #{trait}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-rose-50 px-5 py-4 dark:border-violet-900/40 dark:from-violet-950/40 dark:to-rose-950/40">
            <p className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
              <span aria-hidden>💡</span>
              당신에게 추천
            </p>
            <p className="mt-1.5 text-sm leading-6 font-medium text-slate-800 dark:text-slate-100">
              {result.recommendation}
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-50 px-5 py-4 dark:bg-slate-800/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              잘 맞는 유형
            </p>
            <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-100">
              {result.matches.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          결과 공유하기
        </h3>
        <div className="mt-3">
          <ShareButtons
            testId={testId}
            resultType={result.type}
            resultTitle={result.title}
            testTitle={testTitle}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href={`/tests/${testId}`}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 sm:w-auto dark:bg-violet-600 dark:hover:bg-violet-500 dark:focus-visible:ring-offset-slate-950"
        >
          <span aria-hidden>🔄</span> 다시 하기
        </Link>
        <Link
          href="/"
          className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-violet-500 dark:focus-visible:ring-offset-slate-950"
        >
          다른 테스트 보기
        </Link>
      </div>
    </div>
  );
}
