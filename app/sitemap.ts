import type { MetadataRoute } from "next";
import { developerTest } from "@/lib/tests/developer";
import { coffeeTest } from "@/lib/tests/coffee";
import { travelTest } from "@/lib/tests/travel";
import { musicTest } from "@/lib/tests/music";
import { foodTest } from "@/lib/tests/food";

const SITE = "https://www.threethousand.site/test";

export default function sitemap(): MetadataRoute.Sitemap {
  const tests = [developerTest, coffeeTest, travelTest, musicTest, foodTest];
  const now = new Date();
  return [
    {
      url: SITE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...tests.map((t) => ({
      url: `${SITE}/tests/${t.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...tests.flatMap((t) =>
      Object.keys(t.results).map((type) => ({
        url: `${SITE}/tests/${t.id}/result/${type}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ),
    {
      url: `${SITE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
