import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import KakaoSDK from "@/components/KakaoSDK";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f7" },
    { media: "(prefers-color-scheme: dark)", color: "#232228" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Three Thousand - 재미있는 심리테스트",
    template: "%s · Three Thousand",
  },
  description:
    "나를 알아가는 즐거운 시간. 개발자 유형부터 커피 취향까지, 다양한 심리테스트로 내 성향을 발견해보세요.",
  metadataBase: new URL("https://www.threethousand.site"),
  alternates: { canonical: "/" },
  keywords: [
    "심리테스트",
    "성격테스트",
    "MBTI",
    "개발자테스트",
    "커피테스트",
    "여행테스트",
  ],
  openGraph: {
    title: "Three Thousand - 재미있는 심리테스트",
    description:
      "나를 알아가는 즐거운 시간. 다양한 심리테스트로 내 성향을 발견해보세요.",
    url: "https://www.threethousand.site",
    siteName: "Three Thousand",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Three Thousand - 재미있는 심리테스트",
    description: "나를 알아가는 즐거운 시간",
  },
};

const noFlashScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    var cls = document.documentElement.classList;
    if (dark) cls.add('dark'); else cls.remove('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink transition-colors">
        <GoogleTagManagerNoScript />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <GoogleTagManagerHead />
        <GoogleAnalytics />
        <KakaoSDK />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
