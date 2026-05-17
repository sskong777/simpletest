# CLAUDE.md — Three Thousand 심리테스트 운영 매뉴얼

> 매 세션에서 Claude Code 가 자동으로 읽는 최상위 지시 문서.
> Next.js 16 + React 19 + Tailwind v4 — **학습 데이터의 Next.js 와 다르다**. API/컨벤션/파일 구조 모두 다를 수 있으니 코드 작성 전 `node_modules/next/dist/docs/` 의 관련 가이드 확인.

## Project Overview

**Three Thousand 심리테스트** — `www.threethousand.site/test` 에서 서비스되는 5가지 심리테스트.
허브 도메인의 두 번째 sub-site.

**5 테스트 × 4 결과 = 20 결과 페이지** (모두 동적 OG 이미지 포함).

**Stack**

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind v4 (`@theme inline`, `tailwind.config` 파일 없음)
- `framer-motion` (애니메이션) · `clsx` + `tailwind-merge` (조건부 클래스)
- Vercel Analytics / Speed Insights
- Google Tag Manager (`GTM-TZ5442QB`) + Google Analytics 4
- Kakao JS SDK (공유 버튼)
- Coupang Partners 어필리에이트 (수동 단축링크 60개 큐레이션)

**Live**: <https://www.threethousand.site/test>
**Vercel alias**: `personality-test-site-sigma.vercel.app`

---

## Critical Rules — 절대 위반 금지

### 도메인/라우팅

- **`basePath: "/test"`** 는 절대 변경하지 않는다 ([next.config.ts](next.config.ts)).
  허브 vercel.json rewrite, sitemap, canonical, OG URL 모두 이 경로에 박혀 있다.
- 내부 navigation 은 항상 **`<Link href="/...">`** (basePath 자동 prefix).
  `/test/...` 로 직접 작성하면 이중 prefix.
- **다른 sub-site로 가는 링크는 일반 `<a>` 태그**.
  허브·사주풀이는 다른 Vercel 프로젝트라 RSC prefetch 호환 불가 → 404 콘솔 노이즈.
- legacy redirects 는 [next.config.ts](next.config.ts) 의 `redirects()` 에 `basePath: false` 명시.

### Production URL

- [lib/site.ts](lib/site.ts) `siteUrl` 은 production 에서 정식 도메인(`www.threethousand.site`) 강제.
  `VERCEL_URL` 폴백을 production 에 쓰면 sitemap/canonical/OG 가 deployment hash 노출 → GSC 거부.

### 코드 컨벤션

- **No emojis in code or comments** (UI 콘텐츠 안에 사용은 OK).
- **Server Components 기본**, `'use client'` 는 인터랙션·useState·useEffect 필요한 경우만.
- 컴포넌트는 한 파일에 위→아래로 (main export → helper).
- 도메인 로직(`lib/tests/<test>.ts`) 과 UI(`app/tests/<test>/`, `components/*`) 분리.
- `@/` import alias.
- 조건부 클래스는 `clsx` + `tailwind-merge` 의 `cn()` 헬퍼 사용.

### 디자인 시스템 (브루탈리즘 톤)

- **Vivid Brutalism** — 두꺼운 검정 테두리 + 하드 그림자 (`brutal-shadow` 클래스).
- 색 토큰 (`app/globals.css` `@theme inline`):
  - `bg-paper`, `bg-card`, `text-ink`, `text-ink-muted`, `border-rule`
  - `bg-brand-primary` (코랄 `#ff6b6b`)
  - `bg-brand-secondary` (청록 `#4ecdc4`)
  - `bg-brand-accent` (노랑 `#ffe66d`)
- 다크모드 지원 (`ThemeToggle` 컴포넌트, `.dark` 클래스 토글).
- `brutal-shadow` / `brutal-shadow-lg` / `brutal-shadow-xl` 그림자 클래스.
- 결과 페이지 그라데이션은 [lib/og.ts](lib/og.ts) `resultGradients` / `resultTints` 만 사용.

### 빌드 검증

- 새 기능 push 전 반드시 `npm run build` 통과 확인.
- `npm run build` 의 satori 워닝(`z-index` 등) 은 무시 OK.

---

## File Structure

```
personality-test-site/
├── app/
│   ├── page.tsx               # /test 메인 — 테스트 카드 5개 + 쿠팡 추천
│   ├── layout.tsx             # 메타·폰트·GTM·KakaoSDK·Footer·ThemeToggle
│   ├── globals.css            # @theme inline (브루탈리즘 토큰 + brutal-shadow)
│   ├── opengraph-image.tsx    # 사이트 default OG
│   ├── sitemap.ts             # 5 테스트 + 20 결과 + 정적 페이지
│   ├── robots.ts
│   ├── not-found.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── preview/               # 디자인 시안 (dark/retro/vivid 3종)
│   └── tests/
│       ├── developer/
│       │   ├── page.tsx       # 입력 폼 + TestRunner
│       │   ├── opengraph-image.tsx
│       │   └── result/[type]/
│       │       ├── page.tsx
│       │       └── opengraph-image.tsx
│       ├── coffee/   …
│       ├── travel/   …
│       ├── music/    …
│       └── food/     …
├── components/
│   ├── TestRunner.tsx         # 8문항 진행 로직 (client, useState)
│   ├── QuestionCard.tsx
│   ├── ProgressBar.tsx
│   ├── ResultCard.tsx
│   ├── TestCard.tsx           # 메인 카드 (홈)
│   ├── RelatedTests.tsx
│   ├── ShareButtons.tsx       # 카카오·X·링크복사
│   ├── CoupangRecommend.tsx   # 어필리에이트 카드 (url 빈값이면 자동 숨김)
│   ├── ThemeToggle.tsx        # 다크모드 토글 (localStorage)
│   ├── Footer.tsx
│   ├── GoogleTagManager.tsx
│   ├── GoogleAnalytics.tsx
│   ├── KakaoSDK.tsx
│   └── JsonLd.tsx
├── lib/
│   ├── site.ts                # siteUrl (production 강제)
│   ├── kakao.ts               # Kakao SDK helper
│   ├── jsonld.ts              # WebSite/Quiz/Article JSON-LD 빌더
│   ├── og.ts                  # Pretendard 폰트 + resultGradients + resultTints
│   ├── affiliates.ts          # 쿠팡 단축링크 60개 (test:resultType 키)
│   ├── analytics.ts           # GA4 event helpers
│   ├── utils.ts               # cn() = clsx + twMerge
│   └── tests/
│       ├── types.ts           # Test, Question, Result, Option 타입
│       ├── developer.ts       # 8문항 + 4결과 데이터
│       ├── coffee.ts
│       ├── travel.ts
│       ├── music.ts
│       └── food.ts
├── public/                    # 정적 자산
├── next.config.ts             # basePath /test + legacy redirects
├── CLAUDE.md  AGENTS.md  MEMORY.md  orchestration.md
└── .claude/skills/new-test/SKILL.md
```

---

## Key Patterns

### 테스트 데이터 (`lib/tests/<test>.ts`)

```ts
import type { Test } from "./types";

export const developerTest: Test = {
  id: "developer",
  title: "개발자 유형 테스트",
  description: "...",
  questions: [
    { id: "q1", text: "...", options: [
      { id: "a", text: "...", scores: { architect: 2, builder: 1 } },
      { id: "b", text: "...", scores: { researcher: 2 } },
      // ...
    ]},
    // ... 8 questions total
  ],
  results: {
    architect: { type: "architect", title: "...", tagline: "...", description: "...", traits: [...] },
    builder:   { ... },
    researcher:{ ... },
    collaborator: { ... },
  },
};
```

- 8문항 표준
- 4 결과 타입 표준 (5번째 추가하면 어필리에이트·OG 매핑 등 다 손봐야 함)
- 결과 산정: 옵션별 `scores` 합산 → 최대값 타입 선택

### 결과 페이지 OG 이미지

- `app/tests/<test>/result/[type]/opengraph-image.tsx` — 각 결과별 정적 OG (`generateImageMetadata` 또는 `generateStaticParams`)
- 그라데이션은 `resultGradients[type]` (3 stop), 단일 색은 `resultTints[type]`

### 쿠팡 어필리에이트 매핑

- [lib/affiliates.ts](lib/affiliates.ts) 의 `affiliateRecommendations` 의 키 패턴: `"<testId>:<resultType>"`
  예: `"developer:architect"`, `"coffee:latte"` …
- `CoupangRecommend` 컴포넌트는 `url` 이 `https://link.coupang.com/` 으로 시작하지 않으면 자동 숨김.

### 다크모드 (사용자 토글)

- `ThemeToggle` 컴포넌트가 `.dark` 클래스 토글 + localStorage 저장.
- `layout.tsx` 의 noFlashScript 로 첫 렌더 깜빡임 방지.
- 모든 색 토큰은 light/dark 두 값 정의.

---

## Environment Variables

```bash
# Kakao 공유 SDK
NEXT_PUBLIC_KAKAO_JS_KEY=...

# 권장 — production 정식 도메인 강제
NEXT_PUBLIC_SITE_URL=https://www.threethousand.site
```

Vercel 콘솔 Environment Variables 에 동일 추가.

---

## Build / Deploy

```bash
npm install
npm run dev          # http://localhost:3000/test
npm run build
npm run lint
```

- `git push origin master` → Vercel 자동 배포
- 허브 vercel.json 의 `/test` rewrite 가 `personality-test-site-sigma.vercel.app` 으로 프록시
- 라이브 검증: `curl -s -o /dev/null -w "%{http_code}\n" https://www.threethousand.site/test/...`

### Vercel 콘솔 (한 번만)

- **Settings → Deployment Protection → Off** (허브 rewrite 가 401 안 받도록)
- Environment Variables 위 두 개
- Analytics → Enable

---

## Git Workflow

- branch: `master`
- Conventional commits 한국어 OK
- `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>` 푸터
- 절대 `--no-verify`, `--force`, `amend` 하지 않는다

---

## 더 깊이

- 진입점 지도 → [AGENTS.md](AGENTS.md)
- 새 심리테스트 추가 사이클 → [.claude/skills/new-test/SKILL.md](.claude/skills/new-test/SKILL.md)
- 누적된 함정 / 사용자 선호 → [MEMORY.md](MEMORY.md)
- 권한·에스컬레이션 → [orchestration.md](orchestration.md)
