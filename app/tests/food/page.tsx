import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TestRunner from "@/components/TestRunner";
import { breadcrumbJsonLd, testJsonLd } from "@/lib/jsonld";
import { siteName, siteUrl } from "@/lib/site";
import { foodTest } from "@/lib/tests/food";

const url = `/test/tests/${foodTest.id}`;

export const metadata: Metadata = {
  title: foodTest.title,
  description: foodTest.description,
  alternates: { canonical: url },
  openGraph: {
    title: foodTest.title,
    description: foodTest.description,
    url,
    type: "website",
  },
};

export default function FoodTestPage() {
  return (
    <>
      <JsonLd
        data={[
          testJsonLd(foodTest),
          breadcrumbJsonLd([
            { name: siteName, url: siteUrl },
            { name: foodTest.title, url: `${siteUrl}${url}` },
          ]),
        ]}
      />
      <TestRunner test={foodTest} />
    </>
  );
}
