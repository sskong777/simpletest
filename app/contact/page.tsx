import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Three Thousand에 문의·제안·버그 제보를 보내실 수 있는 방법을 안내합니다.",
  alternates: { canonical: "/contact" },
};

const sections = [
  {
    emoji: "📧",
    title: "Email",
    body: (
      <a
        href="mailto:contact@threethousand.site"
        className="font-semibold text-violet-700 underline-offset-2 hover:underline dark:text-violet-300"
      >
        contact@threethousand.site
      </a>
    ),
  },
  {
    emoji: "💡",
    title: "제안 및 피드백",
    body: (
      <p>
        새로운 테스트 아이디어나 개선사항을 알려주시면 적극 반영하겠습니다.
      </p>
    ),
  },
  {
    emoji: "🐛",
    title: "버그 제보",
    body: (
      <p>
        불편한 점이나 오류를 발견하셨다면 알려주세요. 빠르게 수정하겠습니다.
      </p>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-20">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          Contact Us
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          문의사항이나 제안사항이 있으신가요?
          <br className="hidden sm:inline" />
          언제든 연락주세요!
        </p>
      </header>

      <div className="mt-10 space-y-4">
        {sections.map((s) => (
          <section
            key={s.title}
            className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-50">
              <span aria-hidden className="text-2xl">
                {s.emoji}
              </span>
              {s.title}
            </h2>
            <div className="mt-2 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
