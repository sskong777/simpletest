# AGENTS.md — 심리테스트 진입점 지도

> "1,000페이지짜리 매뉴얼 대신 지도를 주어라." 본 파일은 **어디로 가야 무엇이 있는지** 만.

## 작업별 진입 위치

| 하고 싶은 일 | 먼저 읽을 곳 |
|---|---|
| 운영 룰·코드 컨벤션·배포 흐름 | [CLAUDE.md](CLAUDE.md) |
| 새 심리테스트 추가 한 사이클 (lib → app → OG → sitemap) | [.claude/skills/new-test/SKILL.md](.claude/skills/new-test/SKILL.md) |
| 누적된 함정·이미 해결된 문제 | [MEMORY.md](MEMORY.md) |
| 안전 경계·권한·외부 영향 | [orchestration.md](orchestration.md) |

## 코드 도메인 진입점

| 영역 | 파일 |
|---|---|
| 테스트 데이터 (8문항·4결과) | [lib/tests/<test>.ts](lib/tests/) |
| 테스트 타입 정의 | [lib/tests/types.ts](lib/tests/types.ts) |
| 8문항 진행 로직 | [components/TestRunner.tsx](components/TestRunner.tsx) |
| 쿠팡 어필리에이트 데이터 | [lib/affiliates.ts](lib/affiliates.ts) (`testId:resultType` 키) |
| OG 색상 (그라데이션 + 단일색) | [lib/og.ts](lib/og.ts) `resultGradients` / `resultTints` |
| GA4 event 추적 | [lib/analytics.ts](lib/analytics.ts) |
| JSON-LD (WebSite/Quiz/Article) | [lib/jsonld.ts](lib/jsonld.ts) |
| 사이트 URL / 도메인 정책 | [lib/site.ts](lib/site.ts) |
| 조건부 클래스 헬퍼 | [lib/utils.ts](lib/utils.ts) `cn()` |

## UI 진입점

| 라우트 | 메인 파일 |
|---|---|
| `/test` 메인 (테스트 카드 5개) | [app/page.tsx](app/page.tsx) |
| `/test/tests/<test>` 입력 폼 | `app/tests/<test>/page.tsx` |
| `/test/tests/<test>/result/<type>` 결과 | `app/tests/<test>/result/[type]/page.tsx` |
| 정적 페이지 | `app/about/page.tsx`, `app/contact/page.tsx`, `app/privacy/page.tsx` |
| 디자인 시안 (참고용) | `app/preview/{dark,retro,vivid}/page.tsx` |

## 공통 컴포넌트

| 컴포넌트 | 역할 |
|---|---|
| [TestCard](components/TestCard.tsx) | 메인 페이지 카드 |
| [TestRunner](components/TestRunner.tsx) | 8문항 진행 + 결과 계산 (client) |
| [QuestionCard](components/QuestionCard.tsx) | 단일 문항 표시 |
| [ProgressBar](components/ProgressBar.tsx) | 진행 막대 |
| [ResultCard](components/ResultCard.tsx) | 결과 페이지 카드 |
| [ShareButtons](components/ShareButtons.tsx) | 카카오·X·링크복사 |
| [CoupangRecommend](components/CoupangRecommend.tsx) | 어필리에이트 (URL 빈값이면 자동 숨김) |
| [ThemeToggle](components/ThemeToggle.tsx) | 다크모드 토글 (localStorage) |
| [RelatedTests](components/RelatedTests.tsx) | 결과 페이지 하단 — 다른 테스트 추천 |

## 외부 통합

| 통합 | 진입 파일 |
|---|---|
| Kakao 공유 SDK | [components/KakaoSDK.tsx](components/KakaoSDK.tsx), [lib/kakao.ts](lib/kakao.ts) |
| Google Tag Manager | [components/GoogleTagManager.tsx](components/GoogleTagManager.tsx) |
| Google Analytics 4 | [components/GoogleAnalytics.tsx](components/GoogleAnalytics.tsx), [lib/analytics.ts](lib/analytics.ts) |
| Vercel Analytics / SpeedInsights | [app/layout.tsx](app/layout.tsx) |
| 동적 OG (테스트별/결과별) | `app/tests/<test>/opengraph-image.tsx`, `result/[type]/opengraph-image.tsx` |

## 자주 헷갈리는 위치

- **테스트별 결과 4종 매핑**은 `lib/tests/<test>.ts` 의 `results` 객체
- **어필리에이트 키**는 `<testId>:<resultType>` (예: `coffee:latte`)
- **sitemap** 은 `app/sitemap.ts` — 새 테스트 추가 시 5→6개 엔트리 + 4 결과 추가
- **branch** 는 `master` (saju 는 main)

## 빠른 명령

```bash
npm run dev          # http://localhost:3000/test
npm run build
git push origin master   # Vercel 자동 배포

# 라이브 검증
curl -s -o /dev/null -w "HTTP %{http_code}\n" "https://www.threethousand.site/test/<path>"
```

## 더 깊이

- 풀 운영 매뉴얼 → [CLAUDE.md](CLAUDE.md)
- 새 테스트 추가 사이클 → [.claude/skills/new-test/SKILL.md](.claude/skills/new-test/SKILL.md)
- 함정 모음 → [MEMORY.md](MEMORY.md)
