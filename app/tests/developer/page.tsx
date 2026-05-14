import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TestRunner from "@/components/TestRunner";
import { breadcrumbJsonLd, testJsonLd } from "@/lib/jsonld";
import { siteName, siteUrl } from "@/lib/site";
import { developerTest } from "@/lib/tests/developer";

const url = `/tests/${developerTest.id}`;

export const metadata: Metadata = {
  title: developerTest.title,
  description: developerTest.description,
  alternates: { canonical: url },
  openGraph: {
    title: developerTest.title,
    description: developerTest.description,
    url,
    type: "website",
  },
};

export default function DeveloperTestPage() {
  return (
    <>
      <JsonLd
        data={[
          testJsonLd(developerTest),
          breadcrumbJsonLd([
            { name: siteName, url: siteUrl },
            { name: developerTest.title, url: `${siteUrl}${url}` },
          ]),
        ]}
      />
      <TestRunner test={developerTest} />
    </>
  );
}
