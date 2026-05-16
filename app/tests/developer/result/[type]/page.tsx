import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoupangRecommend from "@/components/CoupangRecommend";
import JsonLd from "@/components/JsonLd";
import RelatedTests from "@/components/RelatedTests";
import ResultCard from "@/components/ResultCard";
import { getRecommendations } from "@/lib/affiliates";
import { breadcrumbJsonLd, resultJsonLd } from "@/lib/jsonld";
import { siteName, siteUrl } from "@/lib/site";
import { developerTest } from "@/lib/tests/developer";

type Params = { type: string };

export function generateStaticParams(): Params[] {
  return Object.keys(developerTest.results).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { type } = await params;
  const result = developerTest.results[type];
  if (!result) return { title: "결과를 찾을 수 없어요" };
  const title = `${result.title} · ${developerTest.title}`;
  const url = `/test/tests/${developerTest.id}/result/${type}`;
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

export default async function DeveloperResultPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { type } = await params;
  const result = developerTest.results[type];
  if (!result) notFound();
  const testUrl = `${siteUrl}/test/tests/${developerTest.id}`;
  const resultUrl = `${testUrl}/result/${type}`;
  return (
    <>
      <JsonLd
        data={[
          resultJsonLd(developerTest, result),
          breadcrumbJsonLd([
            { name: siteName, url: siteUrl },
            { name: developerTest.title, url: testUrl },
            { name: result.title, url: resultUrl },
          ]),
        ]}
      />
      <ResultCard
        testId={developerTest.id}
        testTitle={developerTest.title}
        testEmoji={developerTest.emoji}
        result={result}
      />
      <CoupangRecommend items={getRecommendations(developerTest.id, type)} />
      <RelatedTests currentTestId={developerTest.id} />
    </>
  );
}
