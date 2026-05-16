import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Three Thousand은 당신의 성향과 취향을 발견하는 재미있는 심리테스트 플랫폼입니다. 무료로 즐길 수 있는 다양한 테스트와 결과 공유 기능을 제공합니다.",
  alternates: { canonical: "/about" },
};

const FEATURE_TINTS = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FFB870"];

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
      {/* Hero card */}
      <section className="border-[3px] border-ink bg-card p-10 text-center brutal-shadow-lg sm:p-12">
        <span className="inline-flex items-center gap-2 border-[3px] border-ink bg-brand-accent px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink brutal-shadow">
          ★ ABOUT
        </span>
        <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl">
          About{" "}
          <span className="relative inline-block">
            <span
              aria-hidden
              className="absolute -inset-x-2 -inset-y-1 -z-10 -rotate-1 bg-brand-primary"
            />
            <span className="relative text-white">Three Thousand</span>
          </span>
        </h1>

        <div className="mt-8 space-y-4 text-base font-medium leading-relaxed text-ink sm:text-lg">
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
          className="mt-10 inline-flex items-center gap-1.5 border-[3px] border-ink bg-brand-primary px-6 py-3 text-sm font-black uppercase tracking-wider text-white brutal-shadow-lg transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-xl focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-xl"
        >
          테스트 시작하기 →
        </Link>
      </section>

      {/* Features */}
      <section className="mt-12">
        <h2 className="text-center text-[10px] font-black uppercase tracking-widest text-ink-muted">
          ★ Three Thousand의 특징
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="border-[3px] border-ink bg-card p-6 brutal-shadow transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg"
            >
              <div
                className="flex h-14 w-14 items-center justify-center border-[3px] border-ink text-2xl shadow-[3px_3px_0_0_var(--ink)]"
                style={{ backgroundColor: FEATURE_TINTS[i % FEATURE_TINTS.length] }}
              >
                {f.emoji}
              </div>
              <h3 className="mt-4 text-lg font-black tracking-tight text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-ink-muted">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 border-[3px] border-ink bg-card p-8 brutal-shadow-lg sm:p-10">
        <h2 className="inline-flex items-center gap-2 border-[3px] border-ink bg-brand-accent px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink">
          ★ 자주 묻는 질문
        </h2>
        <dl className="mt-6 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="border-t-[3px] border-ink pt-4 first:border-t-0 first:pt-0">
              <dt className="text-base font-black tracking-tight text-ink">
                Q. {item.q}
              </dt>
              <dd className="mt-2 text-sm font-medium leading-relaxed text-ink-muted">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 border-[3px] border-ink bg-brand-secondary p-6 text-center text-sm font-bold leading-relaxed text-ink">
        <p>
          제안·피드백·버그 제보는 언제든{" "}
          <Link
            href="/contact"
            className="underline decoration-[3px] underline-offset-4 hover:bg-brand-accent"
          >
            Contact
          </Link>{" "}
          페이지로 보내주세요.
        </p>
      </section>
    </main>
  );
}
