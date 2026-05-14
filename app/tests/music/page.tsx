import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TestRunner from "@/components/TestRunner";
import { breadcrumbJsonLd, testJsonLd } from "@/lib/jsonld";
import { siteName, siteUrl } from "@/lib/site";
import { musicTest } from "@/lib/tests/music";

const url = `/tests/${musicTest.id}`;

export const metadata: Metadata = {
  title: musicTest.title,
  description: musicTest.description,
  alternates: { canonical: url },
  openGraph: {
    title: musicTest.title,
    description: musicTest.description,
    url,
    type: "website",
  },
};

export default function MusicTestPage() {
  return (
    <>
      <JsonLd
        data={[
          testJsonLd(musicTest),
          breadcrumbJsonLd([
            { name: siteName, url: siteUrl },
            { name: musicTest.title, url: `${siteUrl}${url}` },
          ]),
        ]}
      />
      <TestRunner test={musicTest} />
    </>
  );
}
