import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Three Thousand에 문의·제안·버그 제보를 보내실 수 있는 방법을 안내합니다.",
  alternates: { canonical: "/test/contact" },
};

const TINTS = ["#FFE66D", "#4ECDC4", "#FF6B6B"];

const sections = [
  {
    emoji: "📧",
    title: "Email",
    body: (
      <a
        href="mailto:contact@threethousand.site"
        className="font-black text-ink underline decoration-[3px] underline-offset-4 hover:bg-brand-accent"
      >
        contact@threethousand.site
      </a>
    ),
  },
  {
    emoji: "💡",
    title: "제안 및 피드백",
    body: (
      <p className="text-sm font-medium leading-relaxed text-ink-muted">
        새로운 테스트 아이디어나 개선사항을 알려주시면 적극 반영하겠습니다.
      </p>
    ),
  },
  {
    emoji: "🐛",
    title: "버그 제보",
    body: (
      <p className="text-sm font-medium leading-relaxed text-ink-muted">
        불편한 점이나 오류를 발견하셨다면 알려주세요. 빠르게 수정하겠습니다.
      </p>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-20">
      <header className="text-center">
        <span className="inline-flex items-center gap-2 border-[3px] border-ink bg-brand-accent px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink brutal-shadow">
          ★ CONTACT
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-base font-bold leading-relaxed text-ink sm:text-lg">
          문의사항이나 제안사항이 있으신가요?
          <br className="hidden sm:inline" />
          언제든 연락주세요!
        </p>
      </header>

      <div className="mt-10 space-y-4">
        {sections.map((s, i) => (
          <section
            key={s.title}
            className="border-[3px] border-ink bg-card p-6 brutal-shadow transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-ink text-2xl shadow-[3px_3px_0_0_var(--ink)]"
                style={{ backgroundColor: TINTS[i % TINTS.length] }}
              >
                {s.emoji}
              </span>
              <h2 className="text-lg font-black tracking-tight text-ink">
                {s.title}
              </h2>
            </div>
            <div className="mt-3 text-base text-ink">{s.body}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
