import JsonLd from "@/components/JsonLd";
import TestCard, { type ResultPreview } from "@/components/TestCard";
import ThemeToggle from "@/components/ThemeToggle";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { developerTest } from "@/lib/tests/developer";
import { coffeeTest } from "@/lib/tests/coffee";
import { travelTest } from "@/lib/tests/travel";
import { musicTest } from "@/lib/tests/music";
import { foodTest } from "@/lib/tests/food";
import type { Test } from "@/lib/tests/types";

const toPreviews = (test: Test): ResultPreview[] =>
  Object.values(test.results).map((r) => ({
    emoji: r.emoji,
    title: r.title,
  }));

const tests = [
  {
    href: "/tests/developer",
    emoji: developerTest.emoji,
    title: developerTest.title,
    description:
      "아키텍트부터 협력자까지 — 일하는 스타일로 알아보는 나의 개발자 유형.",
    questionCount: developerTest.questions.length,
    duration: "2분",
    gradient: "from-violet-300 via-fuchsia-200 to-pink-200",
    previews: toPreviews(developerTest),
  },
  {
    href: "/tests/coffee",
    emoji: coffeeTest.emoji,
    title: coffeeTest.title,
    description:
      "오늘의 기분과 성격으로 찾아보는, 나에게 꼭 맞는 한 잔의 커피.",
    questionCount: coffeeTest.questions.length,
    duration: "2분",
    gradient: "from-amber-300 via-orange-200 to-rose-200",
    previews: toPreviews(coffeeTest),
  },
  {
    href: "/tests/travel",
    emoji: travelTest.emoji,
    title: travelTest.title,
    description:
      "계획형 · 즉흥형 · 힐링형 · 맛집형. 떠나기 전 알아보는 나의 여행 본능.",
    questionCount: travelTest.questions.length,
    duration: "2분",
    gradient: "from-sky-300 via-cyan-200 to-emerald-200",
    previews: toPreviews(travelTest),
  },
  {
    href: "/tests/music",
    emoji: musicTest.emoji,
    title: musicTest.title,
    description:
      "발라드 · 댄스 · 인디 · 무드. 8문항으로 알아보는 나의 음악 본능.",
    questionCount: musicTest.questions.length,
    duration: "2분",
    gradient: "from-fuchsia-300 via-purple-200 to-sky-200",
    previews: toPreviews(musicTest),
  },
  {
    href: "/tests/food",
    emoji: foodTest.emoji,
    title: foodTest.title,
    description:
      "미식가 · 위로식가 · 탐험가 · 건강 밸런서. 한 끼로 알아보는 음식 본능.",
    questionCount: foodTest.questions.length,
    duration: "2분",
    gradient: "from-amber-300 via-orange-200 to-red-200",
    previews: toPreviews(foodTest),
  },
];

const stats = [
  { label: "테스트", value: "5" },
  { label: "결과 유형", value: "20" },
  { label: "평균 소요", value: "2분" },
];

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <JsonLd data={[websiteJsonLd(), organizationJsonLd()]} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="animate-blob absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-700/20" />
        <div
          className="animate-blob absolute top-32 right-1/4 h-80 w-80 rounded-full bg-rose-300/40 blur-3xl dark:bg-rose-700/20"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-blob absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-700/20"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10">
        <span className="inline-flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">
          <span aria-hidden className="text-base">
            ✨
          </span>
          Three Thousand
        </span>
        <ThemeToggle />
      </header>

      <section className="relative z-10 px-6 pt-16 pb-10 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-violet-700 shadow-sm backdrop-blur dark:border-violet-900/60 dark:bg-slate-900/60 dark:text-violet-300">
            <span aria-hidden>🎈</span>
            가볍게 즐기는 심리테스트
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl dark:text-slate-50">
            나를 닮은 한 가지를{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-400">
              발견해보세요
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            8개의 짧은 질문, 단 2분. 오늘의 기분과 성격을 따라
            <br className="hidden sm:block" />
            나에게 어울리는 유형을 알려드려요.
          </p>

          <dl className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-white/60 bg-white/60 px-4 py-3 shadow-sm backdrop-blur sm:gap-8 dark:border-slate-800 dark:bg-slate-900/50">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={
                  i > 0
                    ? "flex flex-1 flex-col items-center border-l border-slate-200/70 dark:border-slate-800"
                    : "flex flex-1 flex-col items-center"
                }
              >
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {s.label}
                </dt>
                <dd className="mt-1 text-base font-extrabold text-slate-900 sm:text-lg dark:text-slate-50">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((test, i) => (
            <TestCard
              key={test.href}
              {...test}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
