import Link from "next/link";
import ShareButtons from "./ShareButtons";
import ThemeToggle from "./ThemeToggle";
import type { Result } from "@/lib/tests/types";

type ResultCardProps = {
  testId: string;
  testTitle: string;
  testEmoji: string;
  result: Result;
};

// 결과 타입별 브루탈리스트 액센트 (rotate through vivid palette)
const RESULT_TINTS: Record<string, string> = {
  // developer
  architect: "#4ECDC4",
  builder: "#FFE66D",
  researcher: "#4ECDC4",
  collaborator: "#FF6B6B",
  // coffee
  americano: "#FFE66D",
  latte: "#FF6B6B",
  espresso: "#FF6B6B",
  coldbrew: "#4ECDC4",
  // travel
  planner: "#4ECDC4",
  spontaneous: "#FF6B6B",
  relaxer: "#FFE66D",
  foodie: "#FF6B6B",
  // music
  balladeer: "#FF6B6B",
  dancer: "#FFE66D",
  digger: "#4ECDC4",
  mellow: "#FFE66D",
  // food
  gourmet: "#FF6B6B",
  comfort: "#FFE66D",
  adventurer: "#FF6B6B",
  healthy: "#4ECDC4",
};

export default function ResultCard({
  testId,
  testTitle,
  testEmoji,
  result,
}: ResultCardProps) {
  const tint = RESULT_TINTS[result.type] ?? "#FFE66D";

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-8 sm:py-14">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1 border-[2px] border-ink bg-card px-3 py-1.5 text-xs font-black uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:shadow-[5px_5px_0_0_var(--ink)] focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:shadow-[5px_5px_0_0_var(--ink)]"
        >
          ← 처음으로
        </Link>
        <ThemeToggle />
      </div>

      <div className="animate-fade-in-up border-[3px] border-ink bg-card brutal-shadow-xl">
        <div
          className="relative flex flex-col items-center px-6 pt-12 pb-9 text-center border-b-[3px] border-ink"
          style={{ backgroundColor: tint }}
        >
          <span className="inline-flex items-center gap-1 border-[2px] border-ink bg-card px-3 py-1 text-[10px] font-black uppercase tracking-wider text-ink">
            <span aria-hidden>{testEmoji}</span>
            {testTitle}
          </span>
          <div className="mt-7 flex h-28 w-28 items-center justify-center border-[3px] border-ink bg-card text-6xl shadow-[4px_4px_0_0_var(--ink)]">
            {result.emoji}
          </div>
          <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
            {result.title}
          </h1>
          <p className="mt-2 text-base font-bold text-ink sm:text-lg">
            {result.tagline}
          </p>
        </div>

        <div className="px-6 pb-9 pt-7 sm:px-10">
          <p className="text-base font-medium leading-7 text-ink sm:text-lg sm:leading-8">
            {result.description}
          </p>

          <div className="mt-7">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-ink-muted">
              나의 키워드
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {result.traits.map((trait) => (
                <span
                  key={trait}
                  className="border-[2px] border-ink bg-card px-3 py-1 text-sm font-bold text-ink"
                >
                  #{trait}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 border-[3px] border-ink bg-brand-accent p-5">
            <p className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-ink">
              <span aria-hidden>💡</span>
              당신에게 추천
            </p>
            <p className="mt-1.5 text-sm font-bold leading-6 text-ink">
              {result.recommendation}
            </p>
          </div>

          <div className="mt-4 border-[3px] border-ink bg-card p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-ink-muted">
              잘 맞는 유형
            </p>
            <p className="mt-1 text-sm font-bold text-ink">
              {result.matches.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-center text-[10px] font-black uppercase tracking-widest text-ink-muted">
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
          className="inline-flex w-full items-center justify-center gap-1.5 border-[3px] border-ink bg-brand-primary px-5 py-3 text-sm font-black uppercase tracking-wider text-white brutal-shadow-lg transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-xl focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-xl sm:w-auto"
        >
          🔄 다시 하기
        </Link>
        <Link
          href="/"
          className="inline-flex w-full items-center justify-center border-[3px] border-ink bg-card px-5 py-3 text-sm font-black uppercase tracking-wider text-ink brutal-shadow transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-lg sm:w-auto"
        >
          다른 테스트 보기
        </Link>
      </div>
    </div>
  );
}
