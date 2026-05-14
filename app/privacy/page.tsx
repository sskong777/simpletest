import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "Three Thousand이 수집·이용하는 개인정보의 항목과 처리 방식, 사용자의 권리에 대한 안내입니다.",
  alternates: { canonical: "/privacy" },
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "수집하는 정보",
    body: (
      <>
        <p>Three Thousand는 다음의 정보를 수집합니다:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>테스트 응답 데이터 (사용자 기기에 로컬 저장)</li>
          <li>쿠키를 통한 방문 정보 (Google Analytics)</li>
          <li>IP 주소, 브라우저 정보, 방문 시간 (통계 분석 목적)</li>
        </ul>
      </>
    ),
  },
  {
    title: "정보의 사용 목적",
    body: (
      <>
        <p>수집된 정보는 다음의 목적으로만 사용됩니다:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>서비스 제공 및 개선</li>
          <li>사용자 경험 분석 및 최적화</li>
          <li>웹사이트 트래픽 분석</li>
          <li>통계 데이터 생성</li>
        </ul>
      </>
    ),
  },
  {
    title: "제3자 서비스",
    body: (
      <>
        <p>본 사이트는 다음의 제3자 서비스를 사용합니다:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>
            <strong>Google Analytics</strong>: 웹사이트 방문 통계 분석
          </li>
          <li>
            <strong>Google AdSense</strong>: 광고 게재 (예정)
          </li>
        </ul>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          각 서비스는 독자적인 개인정보처리방침을 따릅니다.
        </p>
      </>
    ),
  },
  {
    title: "정보의 보관 및 삭제",
    body: (
      <ul className="list-disc space-y-1 pl-6">
        <li>테스트 결과: 사용자의 브라우저에만 저장되며 서버에 전송되지 않습니다.</li>
        <li>쿠키: 브라우저 설정을 통해 언제든지 삭제 가능합니다.</li>
        <li>서버 로그: 최대 1년 보관 후 자동 삭제됩니다.</li>
      </ul>
    ),
  },
  {
    title: "사용자 권리",
    body: (
      <>
        <p>사용자는 다음의 권리를 가집니다:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>쿠키 거부 및 삭제</li>
          <li>데이터 열람 및 삭제 요청</li>
          <li>서비스 이용 중단</li>
        </ul>
      </>
    ),
  },
  {
    title: "문의",
    body: (
      <p>
        개인정보 관련 문의사항:{" "}
        <a
          href="mailto:privacy@threethousand.site"
          className="font-semibold text-violet-700 underline-offset-2 hover:underline dark:text-violet-300"
        >
          privacy@threethousand.site
        </a>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 sm:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          최종 수정일: 2024년 5월 14일
        </p>
      </header>

      <div className="space-y-8 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-10 dark:border-slate-800 dark:bg-slate-900/60">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {section.title}
            </h2>
            <div className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
