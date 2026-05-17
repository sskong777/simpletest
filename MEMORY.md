# MEMORY.md — 심리테스트 누적 발견·함정·사용자 선호

> 매 세션 시작 시 첫 200줄이 자동 로드. 새로 발견되면 위쪽에 추가.

## 사용자 선호 / 운영 스타일

- 한국어 응답 기본. 코드 코멘트도 한국어 OK.
- Branch 이름: **본 repo 는 `master`**, saju 는 `main`. 혼동 주의.
- 작업 보고: **표 + 짧은 단락 + 다음 후보** 패턴.
- 한 번에 묶어서 처리 선호 ("개발자 + 커피 테스트 한 번에 만들어줘" 식).
- Commit 메시지 한국어 OK, Conventional prefix 필수, `Co-Authored-By: Claude Opus 4.7` 푸터 포함.
- 디자인 시안 비교 (preview/{dark,retro,vivid}) 후 vivid 선택 — 브루탈리즘 톤 유지.

## 도메인 / 인프라 영구 정보

- **허브 도메인**: `www.threethousand.site` (별도 Vercel 프로젝트 `three-thousand-hub`)
- **본 sub-site Vercel alias**: `personality-test-site-sigma.vercel.app`
- **basePath**: `/test`
- **공유 자산**:
  - GTM: `GTM-TZ5442QB`
  - GA4: `G-TFECWVHF4S`
  - AdSense publisher: `ca-pub-5584605030773176` (ads.txt 는 허브에서 서빙, 본 repo 는 X)
  - Kakao JS Key: `a6082015b9f837be5cf1c3f2be7f414a`
- **세 sub-site 구조**: `/` (허브) · `/test` (본 프로젝트) · `/saju` (사주풀이)

## 함정 모음

### 도메인 / 라우팅

- **Vercel `.vercel.app` 도메인 보호** 기본 ON — 허브 rewrite 시 401.
  Settings → Deployment Protection → **Off** 필수.
- **Stable alias 식별** — `vercel deploy` 출력은 deployment hash 포함된 immutable URL.
  Dashboard → Domains 의 alias 가 stable. 그걸 hub rewrite 에 박는다.
- **`basePath: "/test"` redirects** — source 에 `basePath: false` 명시 안 하면 자동 prefix.
  legacy URL (예: `/tests/:path*` → `/test/tests/:path*`) 매핑 시 필수.

### Production URL

- **`VERCEL_URL` 폴백 시 sitemap/canonical 깨짐** — production 에서는 무조건 `www.threethousand.site` 강제.
  GSC 가 sitemap "이 위치에서 사용할 수 없습니다" 에러로 거부.
  saju 가 같은 함정을 만났음 (commit `cc9ec47` fix).

### Next.js 16 / React 19

- 학습 데이터의 Next.js 와 **다르다** — API/컨벤션/파일 구조 모두 다를 수 있음.
  `node_modules/next/dist/docs/` 의 가이드 확인 후 작성.
- **Dynamic params/searchParams async** — `Promise<...>` + `await params`.
- **OG 이미지** — `runtime = "nodejs"` 명시 (edge 는 fetch 제약).
- **Tailwind v4** — `tailwind.config` 없음. `globals.css` `@theme inline`.

### 디자인 / 다크모드

- **noFlashScript** — `layout.tsx` 에서 `<script dangerouslySetInnerHTML>` 로 첫 렌더 전 .dark 클래스 적용.
  이거 없으면 라이트→다크 깜빡임.
- **`brutal-shadow` 그림자** — `box-shadow: 6px 6px 0 0 var(--ink)`. 다크모드에서 자동 반전됨 (CSS var).
- **OG 그라데이션** — `resultGradients` 는 3 stop. 새 결과 추가 시 빠뜨리면 OG 가 transparent.

### SEO / 운영

- **카카오 OG 캐시** — 변경 후 <https://developers.kakao.com/tool/clear/og> 에서 비우기.
- **GSC sitemap 재제출** — 새 테스트/결과 추가 후. 허브 robots.txt 에 안내 있으나 직접 제출이 빠름.
- **콘솔 노이즈 `_rsc=... 404`** — 새 배포 직후 build manifest mismatch. 새로고침으로 자연 해결.

### Vercel Analytics (잠재 이슈)

- saju 가 `<Analytics scriptSrc="..." />` 절대 URL 로 해결한 패턴이 있음 — 본 repo 도 같은 fix 가 필요할 수 있음.
  현재 진단은 미확인. (`MEMORY.md` 의 saju 항목 참고)

## 검증된 패턴 / 디자인 결정

- **8문항 / 4결과 표준** — 더 많거나 적으면 어필리에이트·OG 매핑 다 손봐야 함.
- **브루탈리즘 톤** — 코랄(`#ff6b6b`) / 청록(`#4ecdc4`) / 노랑(`#ffe66d`) 3색만 강조.
- **결과별 단일 색 (`resultTints`)** — OG 통일감.
- **결과 페이지 RelatedTests 컴포넌트** — 자연스러운 next test 유도.
- **다크모드 토글 + localStorage** — 사용자 환경 기억.

## 운영자 액션 (사용자 직접) 누적

- [x] Vercel Deployment Protection Off
- [x] Vercel 환경변수 `NEXT_PUBLIC_KAKAO_JS_KEY` 설정
- [x] 쿠팡 60개 단축링크 채움 (`affiliates.ts`)
- [ ] AdSense Auto Ads 활성화 (Google 콘솔)
- [ ] 카카오 OG 캐시 비우기 (새 테스트 추가 시마다)
- [ ] GSC 에 sitemap 재제출 (새 라우트 추가 시)
- [ ] Vercel Analytics 데이터 확인 — saju 같은 절대 URL fix 필요한지 점검

## 다음 후보 (대기 중인 의향)

1. **Analytics scriptSrc 절대 URL 적용** (saju 패턴 따라 — 404 발생 중인지 콘솔 확인 후)
2. **6번째 테스트** — 운동·반려동물·소비스타일 등
3. **쿠팡 다이나믹 배너 시스템** (saju 의 `lib/coupangBanners.ts` 패턴 이식)
4. **테스트 결과 공유 시 OG 캐시 한 번에 비우는 자동화**

## 더 깊이

- 새 테스트 추가 사이클 → [.claude/skills/new-test/SKILL.md](.claude/skills/new-test/SKILL.md)
- 안전 경계 → [orchestration.md](orchestration.md)
