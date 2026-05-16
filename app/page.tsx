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

const TINT_PRIMARY = "#FF6B6B";
const TINT_SECONDARY = "#4ECDC4";
const TINT_ACCENT = "#FFE66D";
const ROTATE_TINTS = [TINT_PRIMARY, TINT_SECONDARY, TINT_ACCENT];

const tests = [
  {
    href: "/tests/developer",
    emoji: developerTest.emoji,
    title: developerTest.title,
    description:
      "아키텍트부터 협력자까지 — 일하는 스타일로 알아보는 나의 개발자 유형.",
    questionCount: developerTest.questions.length,
    duration: "2분",
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

      {/* Header */}
      <header className="flex items-center justify-between border-b-[3px] border-ink px-6 py-4 sm:px-10">
        <span className="text-xl font-black tracking-tight sm:text-2xl">
          ★ THREE THOUSAND
        </span>
        <ThemeToggle />
      </header>

      {/* Hero */}
      <section className="relative px-6 py-16 text-center sm:py-24">
        <span
          className="inline-block border-[3px] border-ink px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink brutal-shadow"
          style={{ backgroundColor: TINT_ACCENT }}
        >
          ★ 가볍게 즐기는 심리테스트
        </span>
        <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
          나를 닮은 한 가지를
          <br />
          <span className="relative inline-block">
            <span
              aria-hidden
              className="absolute -inset-x-2 -inset-y-1 -z-10 -rotate-1"
              style={{ backgroundColor: TINT_ACCENT }}
            />
            <span className="relative">발견해보세요</span>
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base font-bold text-ink sm:text-lg">
          8개의 짧은 질문, 단 2분.
          <br className="hidden sm:inline" />
          오늘의 기분과 성격을 따라 어울리는 유형을 알려드려요.
        </p>

        <dl className="mx-auto mt-10 inline-flex items-center gap-5 border-[3px] border-ink bg-card px-6 py-3 brutal-shadow-lg sm:gap-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <dt className="text-[10px] font-black uppercase tracking-widest text-ink-muted">
                {s.label}
              </dt>
              <dd className="text-lg font-black text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Cards */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((test, i) => (
            <TestCard
              key={test.href}
              {...test}
              tint={ROTATE_TINTS[i % ROTATE_TINTS.length]}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
