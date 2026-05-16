import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TestRunner from "@/components/TestRunner";
import { breadcrumbJsonLd, testJsonLd } from "@/lib/jsonld";
import { siteName, siteUrl } from "@/lib/site";
import { coffeeTest } from "@/lib/tests/coffee";

const url = `/test/tests/${coffeeTest.id}`;

export const metadata: Metadata = {
  title: coffeeTest.title,
  description: coffeeTest.description,
  alternates: { canonical: url },
  openGraph: {
    title: coffeeTest.title,
    description: coffeeTest.description,
    url,
    type: "website",
  },
};

export default function CoffeeTestPage() {
  return (
    <>
      <JsonLd
        data={[
          testJsonLd(coffeeTest),
          breadcrumbJsonLd([
            { name: siteName, url: siteUrl },
            { name: coffeeTest.title, url: `${siteUrl}${url}` },
          ]),
        ]}
      />
      <TestRunner test={coffeeTest} />
    </>
  );
}
