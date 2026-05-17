---
name: new-test
description: Use this skill when adding a new personality test to Three Thousand 심리테스트 (e.g., 운동·반려동물·소비 스타일 테스트). Enforces the standard 8-step cycle — types check → 데이터 정의 → 라우트 → 결과 페이지 → OG → 어필리에이트 → sitemap → 검증 — that all 5 existing tests (developer, coffee, travel, music, food) followed.
origin: Three Thousand
---

# Skill — 새 심리테스트 한 사이클 추가

이미 5개 테스트(developer, coffee, travel, music, food) 가 모두 이 절차로 만들어졌다.

## When to Activate

- 새로운 심리테스트 추가 (8문항 / 4 결과 표준)
- 기존 테스트의 결과 타입 추가 (4→5결과) — 일부 단계만 적용

## Core Principles

1. **데이터 먼저, UI 나중** — `lib/tests/<test>.ts` 가 완성된 후에 UI 만든다
2. **8문항 / 4결과 표준** — 더 많거나 적으면 OG, 어필리에이트 매핑 등 손볼 곳이 많아짐
3. **이미 만들어진 컴포넌트 재사용** — `TestRunner`, `QuestionCard`, `ResultCard`, `RelatedTests` 등
4. **OG 그라데이션은 [lib/og.ts](lib/og.ts) 에 미리 정의**
5. **build → push → live verify** 까진 완료가 아니다

## 8-Step Cycle

### Step 1 — 타입 점검 ([lib/tests/types.ts](lib/tests/types.ts))

이미 정의된 `Test`, `Question`, `Option`, `Result` 타입이 새 테스트에도 맞는지 확인. 새 필드가 필요하면 모든 기존 테스트도 영향 받으므로 신중.

### Step 2 — 테스트 데이터 (`lib/tests/<test>.ts`)

```ts
import type { Test } from "./types";

export const <test>Test: Test = {
  id: "<test>",                       // URL 식별자, 영문 소문자
  title: "<한글 이름>",
  description: "...",
  // 메타 / OG 용
  ogColor: "from-...",                // Tailwind 그라데이션 (있는 경우)

  questions: [
    {
      id: "q1",
      text: "...",
      options: [
        { id: "a", text: "...", scores: { result_a: 2, result_b: 1 } },
        { id: "b", text: "...", scores: { result_c: 2 } },
        { id: "c", text: "...", scores: { result_d: 2 } },
        { id: "d", text: "...", scores: { result_a: 1, result_d: 1 } },
      ],
    },
    // ... 8 questions total
  ],

  results: {
    result_a: { type: "result_a", title: "...", tagline: "...", description: "...", traits: [...] },
    result_b: { ... },
    result_c: { ... },
    result_d: { ... },
  },
};
```

8문항 × 4옵션 × 4결과 표준. 점수 분포가 한쪽으로 쏠리지 않게 검증.

### Step 3 — `lib/og.ts` 에 OG 색 추가

```ts
export const resultGradients: Record<string, [string, string, string]> = {
  // ... existing
  result_a: ["#color1", "#color2", "#color3"],
  result_b: [...],
  result_c: [...],
  result_d: [...],
};

export const resultTints: Record<string, string> = {
  // ... existing
  result_a: "#single_color",
  result_b: "#single_color",
  result_c: "#single_color",
  result_d: "#single_color",
};
```

### Step 4 — 테스트 라우트 (`app/tests/<test>/page.tsx`)

```tsx
import { TestRunner } from "@/components/TestRunner";
import { <test>Test } from "@/lib/tests/<test>";
import JsonLd from "@/components/JsonLd";
import { testJsonLd } from "@/lib/jsonld";

export const metadata = {
  title: <test>Test.title,
  description: <test>Test.description,
  alternates: { canonical: `/test/tests/<test>` },
  openGraph: { /* ... */ },
};

export default function <Test>Page() {
  return (
    <>
      <JsonLd data={testJsonLd(<test>Test)} />
      <TestRunner test={<test>Test} />
    </>
  );
}
```

### Step 5 — 결과 라우트 (`app/tests/<test>/result/[type]/page.tsx`)

```tsx
type Params = Promise<{ type: string }>;

export function generateStaticParams() {
  return Object.keys(<test>Test.results).map((type) => ({ type }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { type } = await params;
  const result = <test>Test.results[type];
  if (!result) return {};
  return {
    title: `${result.title} · ${<test>Test.title}`,
    description: result.tagline,
    alternates: { canonical: `/test/tests/<test>/result/${type}` },
    openGraph: { /* result-specific */ },
  };
}

export default async function ResultPage({ params }: { params: Params }) {
  const { type } = await params;
  const result = <test>Test.results[type];
  if (!result) notFound();
  return <ResultCard test={<test>Test} result={result} />;
}
```

### Step 6 — OG 이미지 (`app/tests/<test>/opengraph-image.tsx`, `result/[type]/opengraph-image.tsx`)

기존 테스트의 OG 컴포넌트 그대로 복사해 식별자만 바꾼다. `runtime = "nodejs"` 명시.

### Step 7 — 어필리에이트 매핑 ([lib/affiliates.ts](lib/affiliates.ts))

```ts
export const affiliateRecommendations: Record<string, AffiliateProduct[]> = {
  // ... existing
  "<test>:result_a": [
    { title: "...", description: "...", url: "", emoji: "..." },  // 3개씩
    { ... },
    { ... },
  ],
  "<test>:result_b": [...],
  "<test>:result_c": [...],
  "<test>:result_d": [...],
};
```

URL 빈 값으로 두면 `CoupangRecommend` 가 자동 숨김. 운영자가 쿠팡 콘솔에서 단축링크 발급 후 채워 넣으면 자동 노출.

### Step 8 — sitemap + 홈 카드

- [app/sitemap.ts](app/sitemap.ts) 에 5 엔트리 추가 (`/<test>` 1개 + 결과 4개)
- [app/page.tsx](app/page.tsx) 의 테스트 카드 배열에 새 테스트 추가

### 마지막 — Build → Commit → Push → Live Verify

```bash
npm run build
git add -A
git commit -m "feat: <test> 심리테스트 추가 (8문항 + 4결과 + OG + 어필리에이트)"
git push origin master    # Vercel 자동 배포

# Vercel 빌드 후 라이브 검증
end=$(($(date +%s) + 240))
while [ $(date +%s) -lt $end ]; do
  s=$(curl -s -o /dev/null -w "%{http_code}" "https://www.threethousand.site/test/tests/<test>")
  if [ "$s" = "200" ]; then echo "READY"; break; fi
  sleep 12
done

# 4개 결과 페이지 다 200 확인
for t in result_a result_b result_c result_d; do
  curl -s -o /dev/null -w "/$t: %{http_code}\n" "https://www.threethousand.site/test/tests/<test>/result/$t"
done
```

## Common Mistakes to Avoid

- **8문항/4결과 표준 위반** — OG·어필리에이트·결과 페이지 매핑이 다 깨짐
- **점수 분포 한쪽 쏠림** — 1개 결과만 나오면 테스트가 재미 없음. 8문항 점수 시뮬레이션 권장.
- **`runtime` 미명시 OG** — edge 디폴트에서 fetch 제약 있음. nodejs 명시.
- **sitemap 빠뜨림** — 검색엔진이 새 테스트 못 찾음
- **어필리에이트 키 오타** — `:` 양쪽 공백 / 오타 시 `CoupangRecommend` 가 빈 값 반환

## Reference Examples

| 테스트 | commit |
|---|---|
| developer | 첫 테스트 (디자인 시스템 같이 잡힘) |
| coffee · travel · music | 중간에 같은 패턴으로 |
| food | `3da37fe` (`feat: 5번째 테스트 (음식) + Vercel Analytics + AdSense/SEO 보강`) |

## Success Criteria

- `/test/tests/<test>` 200 OK
- 4 결과 `/test/tests/<test>/result/<type>` 모두 200 OK
- OG 이미지 (테스트 + 4 결과) 모두 image/png
- 메인 페이지 (`/test`) 에 새 카드 노출
- sitemap 에 5 엔트리 추가됨

## 더 깊은 맥락

- 표준 디자인 토큰 (브루탈리즘 색) → [../../../CLAUDE.md](../../../CLAUDE.md) "디자인 시스템"
- 코드 진입점 → [../../../AGENTS.md](../../../AGENTS.md)
- 누적된 함정 → [../../../MEMORY.md](../../../MEMORY.md)
