import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design Preview",
  robots: { index: false, follow: false },
};

const options = [
  {
    href: "/preview/vivid",
    name: "A안",
    title: "비비드 + 브루탈리즘",
    description:
      "산호 · 청록 · 노랑. 두꺼운 검정 보더, 하드 그림자, font-black 임팩트. 빈티지 잡지 같은 느낌.",
    colors: ["#FF6B6B", "#4ECDC4", "#FFE66D"],
    bg: "#F7F7F7",
    accent: "#FF6B6B",
  },
  {
    href: "/preview/dark",
    name: "B안",
    title: "다크 + 글래스모피즘",
    description:
      "네온 보라 · 핑크 · 시안. 반투명 backdrop-blur 글래스 카드 + 발광 글로우. 모던 SaaS · 데모씬.",
    colors: ["#6C63FF", "#FF6584", "#00D4FF"],
    bg: "#1A1A2E",
    accent: "#6C63FF",
  },
  {
    href: "/preview/retro",
    name: "C안",
    title: "레트로 팝 + 네오모피즘",
    description:
      "오렌지 · 민트 · 빨강 70's 톤. 부드러운 양각/음각 그림자 + 크림 페이퍼 배경. 따뜻하고 친근.",
    colors: ["#FF9F1C", "#2EC4B6", "#E71D36"],
    bg: "#FEFAE0",
    accent: "#FF9F1C",
  },
];

export default function PreviewIndex() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 sm:py-20">
      <header className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-violet-700 shadow-sm dark:border-violet-900/60 dark:bg-slate-900/60 dark:text-violet-300">
          <span aria-hidden>🎨</span>
          리디자인 미리보기
        </span>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          어떤 분위기로 갈까요?
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          3가지 컬러·디자인 조합 중 하나를 골라주세요.
          <br className="hidden sm:inline" />
          선택한 안으로 사이트 전체를 리디자인합니다.
        </p>
      </header>

      <ul className="mt-10 space-y-5">
        {options.map((o) => (
          <li key={o.href}>
            <Link
              href={o.href}
              className="group block overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/60 dark:focus-visible:ring-offset-slate-950"
            >
              <div className="flex flex-col sm:flex-row">
                <div
                  className="flex flex-row items-center justify-center gap-3 p-6 sm:w-52 sm:flex-col"
                  style={{ background: o.bg }}
                >
                  {o.colors.map((c) => (
                    <div
                      key={c}
                      className="h-10 w-10 rounded-full ring-2 ring-black/10 sm:h-12 sm:w-12"
                      style={{ background: c }}
                      aria-label={c}
                    />
                  ))}
                </div>
                <div className="flex-1 p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {o.name}
                  </span>
                  <h2
                    className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl"
                    style={{ color: o.accent }}
                  >
                    {o.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {o.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-700 transition-transform group-hover:translate-x-1 dark:text-violet-300">
                    미리보기 열기 <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white/60 p-5 text-center text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
        모두 둘러본 후 <strong>"A안으로 진행해줘"</strong> / <strong>"B안"</strong> /{" "}
        <strong>"C안"</strong> 식으로 알려주세요. 컬러 일부만 바꾸거나 카드 스타일만
        섞고 싶은 조합이 있으면 자유롭게 말씀해 주셔도 좋아요.
      </div>
    </main>
  );
}
