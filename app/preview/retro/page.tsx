import type { Metadata } from "next";
import Link from "next/link";
import { coffeeTest } from "@/lib/tests/coffee";
import { developerTest } from "@/lib/tests/developer";
import { foodTest } from "@/lib/tests/food";
import { musicTest } from "@/lib/tests/music";
import { travelTest } from "@/lib/tests/travel";

export const metadata: Metadata = {
  title: "C안 · Retro Pop + Neumorphism",
  robots: { index: false, follow: false },
};

const tests = [developerTest, coffeeTest, travelTest, musicTest, foodTest];

// 레트로 팝 팔레트
const COLOR_PRIMARY = "#FF9F1C"; // 오렌지
const COLOR_SECONDARY = "#2EC4B6"; // 민트
const COLOR_ACCENT = "#E71D36"; // 빨강
const COLOR_BG = "#FEFAE0";
const COLOR_TEXT = "#2A1F0E";

// 네오모피즘 그림자
const SHADOW_OUT =
  "12px 12px 24px #d4d0b9, -12px -12px 24px #ffffff";
const SHADOW_OUT_SM = "6px 6px 12px #d4d0b9, -6px -6px 12px #ffffff";
const SHADOW_IN = "inset 4px 4px 8px #d4d0b9, inset -4px -4px 8px #ffffff";

export default function RetroPreview() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: COLOR_BG, color: COLOR_TEXT }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
          ✦ Three Thousand
        </span>
        <Link
          href="/preview"
          className="inline-flex items-center gap-1 rounded-2xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
          style={{
            backgroundColor: COLOR_BG,
            boxShadow: SHADOW_OUT_SM,
          }}
        >
          ← 팔레트 선택
        </Link>
      </header>

      {/* Hero */}
      <section className="relative px-6 py-16 text-center sm:py-24">
        <span
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em]"
          style={{
            backgroundColor: COLOR_BG,
            color: COLOR_PRIMARY,
            boxShadow: SHADOW_IN,
          }}
        >
          ✦ 심리테스트
        </span>
        <h1 className="mx-auto mt-7 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
          나를 닮은 한 가지를
          <br />
          <span style={{ color: COLOR_PRIMARY }}>발견</span>
          <span style={{ color: COLOR_SECONDARY }}>해</span>
          <span style={{ color: COLOR_ACCENT }}>보세요</span>
        </h1>
        <p
          className="mx-auto mt-7 max-w-xl text-base font-semibold sm:text-lg"
          style={{ color: `${COLOR_TEXT}b3` }}
        >
          8개의 짧은 질문, 단 2분.
          <br className="hidden sm:inline" />
          오늘의 기분과 성격을 따라 어울리는 유형을 알려드려요.
        </p>

        <dl
          className="mx-auto mt-10 inline-flex items-center gap-6 rounded-3xl px-6 py-3 sm:gap-10"
          style={{
            backgroundColor: COLOR_BG,
            boxShadow: SHADOW_OUT_SM,
          }}
        >
          <Stat label="테스트" value="5" />
          <Stat label="결과 유형" value="20" />
          <Stat label="평균" value="2분" />
        </dl>
      </section>

      {/* Cards */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((t, i) => {
            const palettes: [string, string][] = [
              [COLOR_PRIMARY, "#FFC48A"],
              [COLOR_SECONDARY, "#82E0D5"],
              [COLOR_ACCENT, "#FF7886"],
            ];
            const [c1, c2] = palettes[i % palettes.length];
            return (
              <Link
                key={t.id}
                href={`/tests/${t.id}`}
                className="group block rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: COLOR_BG,
                  boxShadow: SHADOW_OUT,
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl text-4xl transition-transform group-hover:-rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${c1}, ${c2})`,
                      boxShadow:
                        "inset 4px 4px 8px rgba(0,0,0,0.12), inset -4px -4px 8px rgba(255,255,255,0.5)",
                    }}
                  >
                    {t.emoji}
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider"
                    style={{
                      color: COLOR_PRIMARY,
                      backgroundColor: COLOR_BG,
                      boxShadow: SHADOW_IN,
                    }}
                  >
                    NEW
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-extrabold leading-tight tracking-tight">
                  {t.title}
                </h2>
                <p
                  className="mt-2 text-sm font-medium"
                  style={{ color: `${COLOR_TEXT}a6` }}
                >
                  {t.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest">
                  <span
                    className="rounded-full px-3 py-1"
                    style={{ backgroundColor: COLOR_BG, boxShadow: SHADOW_IN }}
                  >
                    문항 {t.questions.length}
                  </span>
                  <span
                    className="rounded-full px-3 py-1"
                    style={{ backgroundColor: COLOR_BG, boxShadow: SHADOW_IN }}
                  >
                    2분
                  </span>
                </div>

                <div
                  className="mt-5 flex items-center justify-between border-t pt-4 text-xs font-bold"
                  style={{ borderColor: `${COLOR_TEXT}1a` }}
                >
                  <span className="text-base">
                    {Object.values(t.results)
                      .slice(0, 4)
                      .map((r) => r.emoji)
                      .join(" ")}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"
                    style={{ color: COLOR_PRIMARY }}
                  >
                    시작 →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Decision banner */}
      <div
        className="mx-auto mb-12 max-w-2xl rounded-3xl p-6 text-center sm:mx-6 sm:mb-16"
        style={{
          backgroundColor: COLOR_BG,
          boxShadow: SHADOW_OUT,
        }}
      >
        <p
          className="text-2xl font-black tracking-tight sm:text-3xl"
          style={{ color: COLOR_PRIMARY }}
        >
          C안 · Retro Pop + Neumorphism
        </p>
        <p
          className="mt-2 text-sm font-semibold"
          style={{ color: `${COLOR_TEXT}b3` }}
        >
          이 분위기로 가시려면 <strong>"C안으로 진행해줘"</strong>.
        </p>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <dt
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color: "#80735c" }}
      >
        {label}
      </dt>
      <dd className="text-lg font-black">{value}</dd>
    </div>
  );
}
