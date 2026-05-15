import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import RelatedTests from "@/components/RelatedTests";
import ResultCard from "@/components/ResultCard";
import { breadcrumbJsonLd, resultJsonLd } from "@/lib/jsonld";
import { siteName, siteUrl } from "@/lib/site";
import { foodTest } from "@/lib/tests/food";

type Params = { type: string };

export function generateStaticParams(): Params[] {
  return Object.keys(foodTest.results).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { type } = await params;
  const result = foodTest.results[type];
  if (!result) return { title: "결과를 찾을 수 없어요" };
  const title = `${result.title} · ${foodTest.title}`;
  const url = `/tests/${foodTest.id}/result/${type}`;
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

export default async function FoodResultPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { type } = await params;
  const result = foodTest.results[type];
  if (!result) notFound();
  const testUrl = `${siteUrl}/tests/${foodTest.id}`;
  const resultUrl = `${testUrl}/result/${type}`;
  return (
    <>
      <JsonLd
        data={[
          resultJsonLd(foodTest, result),
          breadcrumbJsonLd([
            { name: siteName, url: siteUrl },
            { name: foodTest.title, url: testUrl },
            { name: result.title, url: resultUrl },
          ]),
        ]}
      />
      <ResultCard
        testId={foodTest.id}
        testTitle={foodTest.title}
        testEmoji={foodTest.emoji}
        result={result}
      />
      <RelatedTests currentTestId={foodTest.id} />
    </>
  );
}
