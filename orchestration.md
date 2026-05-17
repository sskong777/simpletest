# orchestration.md — 심리테스트 시스템 제어 · 안전 경계

> 누가 무엇을 해도 되는지, 어디서 멈추고 사용자에게 물어야 하는지.

## 권한 등급

### 자유 영역 (사용자 확인 없이 진행)

- 로컬 파일 읽기·편집·생성 (personality-test-site 디렉토리 내)
- `npm install`, `npm run build`, `npm run dev`, `npm run lint`
- `git add`, `git status`, `git log`, `git diff` (로컬 조회)
- 로컬 dev server 재시작
- `.next/` 캐시 정리
- 라이브 사이트 GET 요청 (curl) 검증

### 알림 영역 (작업하지만 사용자에게 명시 보고)

- `git commit` 새로 만들기
- 새 파일 생성 / 기존 파일 삭제
- `lib/tests/` 신규 테스트 데이터 추가
- `lib/affiliates.ts` 어필리에이트 매핑 추가/수정
- 디자인 토큰 수정 (`app/globals.css`)

### 사용자 확인 필요 (외부 영향, 되돌리기 어려움)

- `git push` — Vercel 자동 배포 트리거. 사용자가 "push 까지 해줘" 명시한 경우 자동 OK.
- `git push --force`, `git reset --hard`, `git rebase` — **항상 사용자 명시 동의 필요**.
- `git config` 수정, `--no-gpg-sign`, `--no-verify` — **금지** (사용자 명시 요청 시만).
- 기존 결과 타입 (4개) 변경 — OG / 어필리에이트 매핑 다 깨지므로 신중. 사용자 확인.
- 쿠팡 단축링크 URL 임의 변경 — 60개 큐레이션 결과물.

### 금지 영역

- 비밀번호/API 키 commit
- 사용자 동의 없이 master 에 force push
- 사용자 동의 없이 `git config` 수정
- 다른 사람 GitHub 권한으로 행동

## 외부 영향 작업의 사전 점검

`git push` 전:

- [ ] `npm run build` 통과
- [ ] `git status` 의도된 파일만 staged
- [ ] `.env`, 비밀, 대용량 바이너리 없음
- [ ] Commit 메시지 Conventional + Co-Authored-By 푸터

배포 후:

- [ ] Vercel 빌드 완료까지 polling (보통 30s~2min)
- [ ] 핵심 경로 200 OK 확인
- [ ] 핵심 콘텐츠 키워드 grep 으로 노출 확인
- [ ] 사용자에게 결과 표 + 다음 액션 보고

## 에스컬레이션 (사용자에게 결정 위임)

1. **위험 작업** — force push, hard reset, 브랜치 삭제
2. **사용자 의도 모호** — 우선순위 불분명할 때
3. **트레이드오프** — 디자인 시안 선택, 콘텐츠 톤
4. **외부 비용 발생** — 새 외부 API, 유료 서비스
5. **사용자 환경 의존** — Vercel 콘솔, GitHub, Kakao 콘솔

**선호 도구**: `AskUserQuestion` (1~4 옵션, multiSelect=false 기본).

## 정보 흐름 / 컨텍스트 경계

- **CLAUDE.md** — 항상 컨텍스트.
- **AGENTS.md** — 진입점 지도, 짧게.
- **SKILL.md** — 필요할 때만 (`.claude/skills/new-test/SKILL.md`).
- **MEMORY.md** — 첫 200줄 자동 로드.
- **본 파일** — 권한·경계 점검 시.

## 에러 발생 시 대응 순서

1. 재현 + 정확한 액션 확인
2. 1차 증거 (빌드 로그, curl 응답, 콘솔 스크린샷)
3. 가설 1개 → fix → push → polling 검증
4. 첫 가설이 틀리면 그대로 사용자 보고 + 다음 가설
5. 3회 실패 시 사용자와 디버그 방향 협의

## 다중 에이전트 (Sub-agents)

본 repo 는 단일 에이전트 환경. 위임 사용 시 self-contained prompt.

- **Plan** — 큰 구조 결정·다단계 작업 계획
- **Explore** — 코드 위치 찾기
- **general-purpose** — 자유 형태 다단계

## 보안 / 비밀

- API 키, 토큰, 비밀번호는 **`.env.local` 만**. commit 금지.
- `.env.example` 에는 키 이름만, 값 placeholder.
- 사용자 환경(`~/.zshrc`, `~/.gitconfig`) 임의 수정 금지.
- 로그/콘솔에 secret 출력 금지.

## 사용자 신호 해석

- "마저 진행해줘" → 직전 끊긴 작업 이어서 자동
- "이대로 작업해줘" → 직전 제안 그대로
- "다음 단계 뭐야?" → 후보 옵션 + AskUserQuestion
- "왜 안 되지" / "이게 맞아?" → 디버그 모드. 가설 + 증거.

## 더 깊이

- 운영 매뉴얼 → [CLAUDE.md](CLAUDE.md)
- 진입점 지도 → [AGENTS.md](AGENTS.md)
- 표준 절차 → [.claude/skills/new-test/SKILL.md](.claude/skills/new-test/SKILL.md)
- 함정 → [MEMORY.md](MEMORY.md)
