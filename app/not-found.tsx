import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없어요",
  description: "주소가 잘못됐거나 삭제된 페이지일 수 있어요.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <div className="w-full border-[3px] border-ink bg-card p-10 brutal-shadow-lg sm:p-12">
        <span aria-hidden className="text-6xl">
          🧭
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">
          길을 잃었어요
        </h1>
        <p className="mt-3 text-base font-bold leading-relaxed text-ink-muted sm:text-lg">
          주소가 잘못됐거나 삭제된 페이지일 수 있어요.
          <br className="hidden sm:inline" />
          홈으로 돌아가서 테스트를 시작해보세요.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-1.5 border-[3px] border-ink bg-brand-primary px-6 py-3 text-sm font-black uppercase tracking-wider text-white brutal-shadow-lg transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-xl focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-xl sm:w-auto"
          >
            홈으로 가기 →
          </Link>
          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center border-[3px] border-ink bg-card px-6 py-3 text-sm font-black uppercase tracking-wider text-ink brutal-shadow transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-lg sm:w-auto"
          >
            소개 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
