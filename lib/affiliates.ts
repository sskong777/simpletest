/**
 * 쿠팡 파트너스 제휴 상품 데이터.
 *
 * 사용법:
 *  1. 쿠팡 파트너스(https://partners.coupang.com)에서 사이트 등록 + 승인 받기
 *  2. 도구 > 상품 검색에서 어울리는 상품을 찾아 "단축 URL" 생성
 *  3. 아래 affiliateRecommendations[key] 배열에 객체로 추가
 *
 * 키 형식: `${testId}:${resultType}` 예: "coffee:americano"
 * 빈 배열이면 해당 결과 페이지에 추천 섹션이 표시되지 않습니다.
 *
 * 한국 법규 + 쿠팡 약관: COUPANG_DISCLAIMER를 명시적으로 표기해야 함 (이미 컴포넌트가 처리).
 */

export type AffiliateProduct = {
  title: string;
  description?: string;
  /** 쿠팡 파트너스가 발급한 단축 URL (예: https://link.coupang.com/a/XXXXX) */
  url: string;
  /** 선택: 상품 이미지 URL. 없으면 이모지 fallback. */
  imageUrl?: string;
  /** 선택: 이미지 없을 때 보여줄 이모지 */
  emoji?: string;
};

export const COUPANG_DISCLAIMER =
  "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";

export const affiliateRecommendations: Record<string, AffiliateProduct[]> = {
  // 개발자 테스트 — 추천 카테고리 예시 (아래 빈 배열에 실제 상품 추가)
  // architect → 시스템 디자인 책, 모니터암, 노이즈 캔슬링 헤드폰
  // builder → 기계식 키보드, USB 허브, 사이드 프로젝트 노트
  // researcher → 알고리즘/CS 책, 디버깅 도서, 코딩 인터뷰 책
  // collaborator → 화이트보드, 좋은 마우스, 만년필
  "developer:architect": [],
  "developer:builder": [],
  "developer:researcher": [],
  "developer:collaborator": [],

  // 커피 테스트
  // americano → 드립 도구, 머그컵, 원두
  // latte → 라떼 잔, 우유 거품기, 핸드드립 키트
  // espresso → 에스프레소 머신, 진한 원두, 데미타스
  // coldbrew → 콜드브루 메이커, 텀블러
  "coffee:americano": [],
  "coffee:latte": [],
  "coffee:espresso": [],
  "coffee:coldbrew": [],

  // 여행 테스트
  // planner → 여행 일지, 짐 정리 파우치, 여권 케이스
  // spontaneous → 카메라, 배낭, 컴팩트 운동화
  // relaxer → 향초, 입욕제, 슬리퍼
  // foodie → 미식 가이드북, 휴대용 도시락, 향신료 세트
  "travel:planner": [],
  "travel:spontaneous": [],
  "travel:relaxer": [],
  "travel:foodie": [],

  // 음악 테스트
  // balladeer → 헤드폰(몰입), 가사집, 따뜻한 조명
  // dancer → Bluetooth 스피커, 무선 이어폰(러닝)
  // digger → 디테일 헤드폰, 음악 도서
  // mellow → LP 플레이어, 재즈 책, 진공관 앰프
  "music:balladeer": [],
  "music:dancer": [],
  "music:digger": [],
  "music:mellow": [],

  // 음식 테스트
  // gourmet → 미식 가이드북, 와인 글래스, 식기
  // comfort → 슬로우 쿠커, 가정식 레시피북, 도시락통
  // adventurer → 향신료 세트, 세계요리 책
  // healthy → 포케볼, 미트 프렙 컨테이너, 비건 레시피북
  "food:gourmet": [],
  "food:comfort": [],
  "food:adventurer": [],
  "food:healthy": [],
};

export function getRecommendations(
  testId: string,
  resultType: string,
): AffiliateProduct[] {
  return affiliateRecommendations[`${testId}:${resultType}`] ?? [];
}
