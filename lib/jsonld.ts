import { siteDescription, siteName, siteUrl } from "./site";
import type { Result, Test } from "./tests/types";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "ko-KR",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  };
}

export function testJsonLd(test: Test) {
  const url = `${siteUrl}/tests/${test.id}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: test.title,
    description: test.description,
    url,
    inLanguage: "ko-KR",
    isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
    mainEntity: {
      "@type": "Quiz",
      name: test.title,
      description: test.description,
      numberOfQuestions: test.questions.length,
      url,
    },
  };
}

export function resultJsonLd(test: Test, result: Result) {
  const url = `${siteUrl}/tests/${test.id}/result/${result.type}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${result.title} · ${test.title}`,
    description: result.tagline,
    articleBody: result.description,
    url,
    inLanguage: "ko-KR",
    keywords: result.traits.join(", "),
    isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
    author: { "@type": "Organization", name: siteName, url: siteUrl },
    publisher: { "@type": "Organization", name: siteName, url: siteUrl },
    image: `${url}/opengraph-image`,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
