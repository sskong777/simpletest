import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Three Thousand은 당신의 성향과 취향을 발견하는 재미있는 심리테스트 플랫폼입니다.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-20">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-10 text-center shadow-sm backdrop-blur-sm sm:p-12 dark:border-slate-800 dark:bg-slate-900/60">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-violet-700 shadow-sm dark:border-violet-900/60 dark:bg-slate-900/60 dark:text-violet-300">
          <span aria-hidden>✨</span>
          About
        </span>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          About <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-400">Three Thousand</span>
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
          <p>
            Three Thousand는 당신의 성향과 취향을 발견하는
            <br className="hidden sm:inline" />
            재미있는 심리테스트 플랫폼입니다.
          </p>
          <p>
            개발자 유형부터 커피 취향까지,
            <br className="hidden sm:inline" />
            다양한 주제의 테스트로
            <br className="hidden sm:inline" />
            새로운 나를 발견해보세요.
          </p>
          <p>
            모든 테스트는 무료로 제공되며,
            <br className="hidden sm:inline" />
            친구들과 결과를 공유하며
            <br className="hidden sm:inline" />
            함께 즐길 수 있습니다.
          </p>
          <p className="font-semibold text-slate-900 dark:text-slate-50">
            새로운 테스트가 계속 추가됩니다.
            <br className="hidden sm:inline" />
            자주 방문해주세요! <span aria-hidden>✨</span>
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:from-violet-500 dark:to-fuchsia-500 dark:focus-visible:ring-offset-slate-950"
        >
          테스트 시작하기 <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
