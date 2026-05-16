import type { Metadata } from "next";
import Link from "next/link";
import { coffeeTest } from "@/lib/tests/coffee";
import { developerTest } from "@/lib/tests/developer";
import { foodTest } from "@/lib/tests/food";
import { musicTest } from "@/lib/tests/music";
import { travelTest } from "@/lib/tests/travel";

export const metadata: Metadata = {
  title: "A안 · Vivid + Brutalism",
  robots: { index: false, follow: false },
};

const tests = [developerTest, coffeeTest, travelTest, musicTest, foodTest];

// 비비드 팔레트
const COLOR_PRIMARY = "#FF6B6B"; // 산호
const COLOR_SECONDARY = "#4ECDC4"; // 청록
const COLOR_ACCENT = "#FFE66D"; // 노랑
const COLOR_BG = "#F7F7F7";

export default function VividPreview() {
  return (
    <main
      className="min-h-screen text-black"
      style={{ backgroundColor: COLOR_BG }}
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b-[3px] border-black px-6 py-4 sm:px-10">
        <span className="text-xl font-black tracking-tight sm:text-2xl">
          ★ THREE THOUSAND
        </span>
        <Link
          href="/preview"
          className="inline-flex items-center gap-1 border-[3px] border-black bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wider shadow-[4px_4px_0_0_#000] transition-all hover:-translate-y-0.5 hover:translate-x-[2px] hover:bg-[#FFE66D] hover:shadow-[6px_6px_0_0_#000]"
        >
          ← 팔레트 선택
        </Link>
      </header>

      {/* Hero */}
      <section className="relative px-6 py-16 text-center sm:py-24">
        <span
          className="inline-block border-[3px] border-black px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#000]"
          style={{ backgroundColor: COLOR_ACCENT }}
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
              style={{ backgroundColor: COLOR_ACCENT }}
            />
            <span className="relative">발견해보세요</span>
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base font-bold sm:text-lg">
          8개의 짧은 질문, 단 2분.
          <br className="hidden sm:inline" />
          오늘의 기분과 성격을 따라 어울리는 유형을 알려드려요.
        </p>

        <div className="mx-auto mt-10 inline-flex items-center gap-6 border-[3px] border-black bg-white px-6 py-3 shadow-[6px_6px_0_0_#000]">
          <Stat label="테스트" value="5" />
          <span aria-hidden className="text-2xl font-black">
            ·
          </span>
          <Stat label="결과 유형" value="20" />
          <span aria-hidden className="text-2xl font-black">
            ·
          </span>
          <Stat label="평균" value="2분" />
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((t, i) => {
            const tint = [COLOR_PRIMARY, COLOR_SECONDARY, COLOR_ACCENT][i % 3];
            return (
              <Link
                key={t.id}
                href={`/tests/${t.id}`}
                className="group block border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000] transition-all hover:-translate-y-1 hover:translate-x-[2px] hover:shadow-[12px_12px_0_0_#000]"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-20 w-20 items-center justify-center border-[3px] border-black text-4xl shadow-[4px_4px_0_0_#000] transition-transform group-hover:rotate-[-6deg]"
                    style={{ backgroundColor: tint }}
                  >
                    {t.emoji}
                  </div>
                  <span
                    className="border-[2px] border-black px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white"
                    style={{ backgroundColor: COLOR_PRIMARY }}
                  >
                    NEW
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-black leading-tight tracking-tight">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-black/70">
                  {t.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider">
                  <span className="border-[2px] border-black bg-white px-2 py-1">
                    질문 {t.questions.length}
                  </span>
                  <span className="border-[2px] border-black bg-white px-2 py-1">
                    2분
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t-[3px] border-black pt-4">
                  <span className="text-xs font-black uppercase tracking-wider">
                    {Object.values(t.results)
                      .slice(0, 4)
                      .map((r) => r.emoji)
                      .join(" ")}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 border-[2px] border-black px-2 py-1 text-xs font-black uppercase transition-transform group-hover:translate-x-1"
                    style={{ backgroundColor: COLOR_ACCENT }}
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
        className="mx-auto mb-12 max-w-2xl border-[4px] border-black p-6 text-center shadow-[10px_10px_0_0_#000] sm:mx-6 sm:mb-16"
        style={{ backgroundColor: COLOR_PRIMARY }}
      >
        <p className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
          A안 · Vivid + Brutalism
        </p>
        <p className="mt-2 text-sm font-bold text-white/90">
          이 분위기로 가시려면 <strong>"A안으로 진행해줘"</strong>.
        </p>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[10px] font-black uppercase tracking-widest text-black/60">
        {label}
      </span>
      <span className="text-lg font-black">{value}</span>
    </div>
  );
}
