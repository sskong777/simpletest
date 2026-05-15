import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Three Thousand은 당신의 성향과 취향을 발견하는 재미있는 심리테스트 플랫폼입니다. 무료로 즐길 수 있는 다양한 테스트와 결과 공유 기능을 제공합니다.",
  alternates: { canonical: "/about" },
};

const features = [
  {
    emoji: "🎯",
    title: "다양한 주제",
    body: "개발자 유형부터 커피·여행·음악·음식 취향까지, 일상의 여러 결을 들여다보는 테스트를 갖췄어요.",
  },
  {
    emoji: "⚡",
    title: "단 2분",
    body: "각 테스트는 8개 질문으로 구성되어 있어요. 짧은 시간에 결과를 받을 수 있어 부담 없이 즐길 수 있어요.",
  },
  {
    emoji: "💌",
    title: "쉽게 공유",
    body: "결과 페이지를 카카오톡·트위터로 한 번에 공유하세요. 친구의 결과와 비교하는 재미도 쏠쏠해요.",
  },
  {
    emoji: "🆓",
    title: "전부 무료",
    body: "로그인도 결제도 필요 없어요. 모든 테스트는 누구나 무료로 이용할 수 있어요.",
  },
];

const faqs = [
  {
    q: "결과는 어떻게 산정되나요?",
    a: "각 질문의 선택지마다 4개 유형 중 하나에 가중치 점수가 매겨집니다. 8문항의 점수를 합산해 가장 높은 유형이 결과로 표시돼요.",
  },
  {
    q: "테스트 결과가 저장되나요?",
    a: "결과는 사용자 브라우저 안에만 머무릅니다. 서버에 전송하거나 저장하지 않아요. 결과 페이지 URL을 공유하지 않는 한 다른 사람은 결과를 볼 수 없어요.",
  },
  {
    q: "새로운 테스트는 얼마나 자주 추가되나요?",
    a: "현재 5개 테스트가 있고, 사용자 피드백을 받아가며 새 테스트를 꾸준히 추가하고 있어요. 의견은 언제든 환영합니다.",
  },
  {
    q: "테스트 결과를 너무 진지하게 받아들이지 않아도 되나요?",
    a: "네, 가볍게 즐기는 콘텐츠로 만들었어요. 진단·의학적 평가가 아니라, 자기 자신을 돌아보는 출발점 정도로 봐주세요.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-20">
      <section className="rounded-3xl border border-white/60 bg-white/80 p-10 text-center shadow-sm backdrop-blur-sm sm:p-12 dark:border-slate-800 dark:bg-slate-900/60">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-violet-700 shadow-sm dark:border-violet-900/60 dark:bg-slate-900/60 dark:text-violet-300">
          <span aria-hidden>✨</span>
          About
        </span>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          About{" "}
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-400">
            Three Thousand
          </span>
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
          <p>
            Three Thousand는 당신의 성향과 취향을 발견하는 재미있는 심리테스트
            플랫폼입니다.
          </p>
          <p>
            개발자 유형, 커피 취향, 여행 스타일, 음악 본능, 음식 본능까지 —
            일상의 여러 결을 들여다보는 다양한 테스트로 새로운 나를 발견해보세요.
          </p>
          <p>
            모든 테스트는 무료로 제공되며, 결과는 친구들과 쉽게 공유할 수
            있어요. 새로운 테스트도 꾸준히 추가됩니다.
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:from-violet-500 dark:to-fuchsia-500 dark:focus-visible:ring-offset-slate-950"
        >
          테스트 시작하기 <span aria-hidden>→</span>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Three Thousand의 특징
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50"
            >
              <span aria-hidden className="text-3xl">
                {f.emoji}
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-slate-50">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur-sm sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          자주 묻는 질문
        </h2>
        <dl className="mt-6 space-y-5">
          {faqs.map((item) => (
            <div key={item.q}>
              <dt className="text-base font-bold text-slate-900 dark:text-slate-50">
                Q. {item.q}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 rounded-2xl bg-gradient-to-br from-violet-50 to-rose-50 p-6 text-center text-sm leading-relaxed text-slate-700 dark:from-violet-950/40 dark:to-rose-950/40 dark:text-slate-200">
        <p>
          더 좋은 테스트, 더 풍성한 콘텐츠를 위해 의견을 듣고 싶어요.
          <br className="hidden sm:inline" />
          제안·피드백·버그 제보는 언제든{" "}
          <Link
            href="/contact"
            className="font-semibold text-violet-700 underline-offset-2 hover:underline dark:text-violet-300"
          >
            Contact
          </Link>{" "}
          페이지로 보내주세요.
        </p>
      </section>
    </main>
  );
}
