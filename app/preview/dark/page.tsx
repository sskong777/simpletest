import type { Metadata } from "next";
import Link from "next/link";
import { coffeeTest } from "@/lib/tests/coffee";
import { developerTest } from "@/lib/tests/developer";
import { foodTest } from "@/lib/tests/food";
import { musicTest } from "@/lib/tests/music";
import { travelTest } from "@/lib/tests/travel";

export const metadata: Metadata = {
  title: "B안 · Dark + Glassmorphism",
  robots: { index: false, follow: false },
};

const tests = [developerTest, coffeeTest, travelTest, musicTest, foodTest];

// 다크 네온 팔레트
const COLOR_PRIMARY = "#6C63FF"; // 보라
const COLOR_SECONDARY = "#FF6584"; // 핑크
const COLOR_ACCENT = "#00D4FF"; // 시안
const COLOR_BG = "#0F0E24";

export default function DarkPreview() {
  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{ backgroundColor: COLOR_BG }}
    >
      {/* Glowing orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/4 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: COLOR_PRIMARY }}
        />
        <div
          className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: COLOR_SECONDARY }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: COLOR_ACCENT }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-4 backdrop-blur-xl sm:px-10">
        <span
          className="text-xl font-black tracking-tight sm:text-2xl"
          style={{
            backgroundImage: `linear-gradient(90deg, ${COLOR_PRIMARY}, ${COLOR_SECONDARY}, ${COLOR_ACCENT})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ✦ THREE THOUSAND
        </span>
        <Link
          href="/preview"
          className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur-xl transition-all hover:bg-white/10"
        >
          ← 팔레트 선택
        </Link>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 py-16 text-center sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur-xl">
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: COLOR_ACCENT,
              boxShadow: `0 0 12px ${COLOR_ACCENT}`,
            }}
          />
          가볍게 즐기는 심리테스트
        </span>
        <h1 className="mx-auto mt-7 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
          나를 닮은 한 가지를
          <br />
          <span
            style={{
              backgroundImage: `linear-gradient(90deg, ${COLOR_PRIMARY}, ${COLOR_SECONDARY}, ${COLOR_ACCENT})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            발견해보세요
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base text-white/70 sm:text-lg">
          8개의 짧은 질문, 단 2분.
          <br className="hidden sm:inline" />
          오늘의 기분과 성격을 따라 어울리는 유형을 알려드려요.
        </p>

        <dl className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl sm:gap-8">
          <Stat label="테스트" value="5" />
          <Divider />
          <Stat label="결과 유형" value="20" />
          <Divider />
          <Stat label="평균" value="2분" />
        </dl>
      </section>

      {/* Cards */}
      <section className="relative z-10 px-6 pb-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((t, i) => {
            const glow = [COLOR_PRIMARY, COLOR_SECONDARY, COLOR_ACCENT][i % 3];
            return (
              <Link
                key={t.id}
                href={`/tests/${t.id}`}
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
                style={{
                  boxShadow: `0 0 0 0 ${glow}00`,
                }}
              >
                {/* glow blob */}
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ backgroundColor: glow }}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl text-4xl ring-1 ring-white/20 backdrop-blur-xl transition-transform group-hover:-rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${glow}40, ${glow}10)`,
                    }}
                  >
                    {t.emoji}
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_12px_currentColor] ring-1 ring-white/20"
                    style={{ backgroundColor: `${COLOR_SECONDARY}30`, color: COLOR_SECONDARY }}
                  >
                    NEW
                  </span>
                </div>

                <h2 className="relative mt-6 text-xl font-bold tracking-tight">
                  {t.title}
                </h2>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">
                  {t.description}
                </p>

                <div className="relative mt-5 flex items-center gap-2 text-xs font-medium text-white/50">
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 ring-1 ring-white/10">
                    질문 {t.questions.length}
                  </span>
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 ring-1 ring-white/10">
                    2분
                  </span>
                </div>

                <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-base">
                    {Object.values(t.results)
                      .slice(0, 4)
                      .map((r) => r.emoji)
                      .join(" ")}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1"
                    style={{ color: COLOR_ACCENT }}
                  >
                    시작하기 →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Decision banner */}
      <div className="relative z-10 mx-auto mb-12 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl sm:mx-6 sm:mb-16">
        <p
          className="text-2xl font-black tracking-tight sm:text-3xl"
          style={{
            backgroundImage: `linear-gradient(90deg, ${COLOR_PRIMARY}, ${COLOR_SECONDARY}, ${COLOR_ACCENT})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          B안 · Dark + Glassmorphism
        </p>
        <p className="mt-2 text-sm font-medium text-white/70">
          이 분위기로 가시려면 <strong>"B안으로 진행해줘"</strong>.
        </p>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <dt className="text-[10px] font-medium uppercase tracking-widest text-white/50">
        {label}
      </dt>
      <dd className="text-lg font-extrabold text-white">{value}</dd>
    </div>
  );
}

function Divider() {
  return <span aria-hidden className="h-6 w-px bg-white/10" />;
}
