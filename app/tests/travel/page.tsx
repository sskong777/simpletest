import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TestRunner from "@/components/TestRunner";
import { breadcrumbJsonLd, testJsonLd } from "@/lib/jsonld";
import { siteName, siteUrl } from "@/lib/site";
import { travelTest } from "@/lib/tests/travel";

const url = `/tests/${travelTest.id}`;

export const metadata: Metadata = {
  title: travelTest.title,
  description: travelTest.description,
  alternates: { canonical: url },
  openGraph: {
    title: travelTest.title,
    description: travelTest.description,
    url,
    type: "website",
  },
};

export default function TravelTestPage() {
  return (
    <>
      <JsonLd
        data={[
          testJsonLd(travelTest),
          breadcrumbJsonLd([
            { name: siteName, url: siteUrl },
            { name: travelTest.title, url: `${siteUrl}${url}` },
          ]),
        ]}
      />
      <TestRunner test={travelTest} />
    </>
  );
}
