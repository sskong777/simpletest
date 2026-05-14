import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ResultCard from "@/components/ResultCard";
import { breadcrumbJsonLd, resultJsonLd } from "@/lib/jsonld";
import { siteName, siteUrl } from "@/lib/site";
import { musicTest } from "@/lib/tests/music";

type Params = { type: string };

export function generateStaticParams(): Params[] {
  return Object.keys(musicTest.results).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { type } = await params;
  const result = musicTest.results[type];
  if (!result) return { title: "결과를 찾을 수 없어요" };
  const title = `${result.title} · ${musicTest.title}`;
  const url = `/tests/${musicTest.id}/result/${type}`;
  return {
    title,
    description: result.tagline,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: result.tagline,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: result.tagline,
    },
  };
}

export default async function MusicResultPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { type } = await params;
  const result = musicTest.results[type];
  if (!result) notFound();
  const testUrl = `${siteUrl}/tests/${musicTest.id}`;
  const resultUrl = `${testUrl}/result/${type}`;
  return (
    <>
      <JsonLd
        data={[
          resultJsonLd(musicTest, result),
          breadcrumbJsonLd([
            { name: siteName, url: siteUrl },
            { name: musicTest.title, url: testUrl },
            { name: result.title, url: resultUrl },
          ]),
        ]}
      />
      <ResultCard
        testId={musicTest.id}
        testTitle={musicTest.title}
        testEmoji={musicTest.emoji}
        result={result}
      />
    </>
  );
}
