import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없어요",
  description: "주소가 잘못됐거나 삭제된 페이지일 수 있어요.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-10 shadow-sm backdrop-blur-sm sm:p-12 dark:border-slate-800 dark:bg-slate-900/60">
        <span aria-hidden className="text-6xl">
          🧭
        </span>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          길을 잃었어요
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          주소가 잘못됐거나 삭제된 페이지일 수 있어요.
          <br className="hidden sm:inline" />
          홈으로 돌아가서 테스트를 시작해보세요.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 sm:w-auto dark:from-violet-500 dark:to-fuchsia-500 dark:focus-visible:ring-offset-slate-950"
          >
            홈으로 가기 <span aria-hidden>→</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-violet-500 dark:focus-visible:ring-offset-slate-950"
          >
            소개 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
