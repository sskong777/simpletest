/**
 * 쿠팡 파트너스 제휴 상품 데이터.
 *
 * 사용법:
 *  1. 쿠팡 파트너스(https://partners.coupang.com)에서 사이트 등록 + 승인 받기
 *  2. 도구 > 상품 검색에서 아래 각 항목 코멘트의 "검색: ..." 키워드로 검색
 *  3. 적당한 상품 클릭 → "단축 URL 생성" → 발급된 https://link.coupang.com/a/XXXXX 복사
 *  4. 아래 해당 항목의 `url: ""` 부분에 붙여넣기
 *
 * 안전장치: CoupangRecommend 컴포넌트는 url이 "https://link.coupang.com/"로
 * 시작하지 않는 항목을 자동으로 숨깁니다. 빈 url로 둬도 부분 활성화 OK.
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
  // ─────────────────────────────── 개발자 테스트 ───────────────────────────────

  "developer:architect": [
    {
      title: "데이터 중심 애플리케이션 설계",
      description: "시스템 설계 바이블, 마틴 클레프만",
      url: "https://link.coupang.com/a/dMl763tai4", // 검색: "데이터 중심 애플리케이션 설계 책"
      emoji: "📘",
    },
    {
      title: "모니터암 가스 스프링",
      description: "책상 정리 + 시야 확보",
      url: "https://link.coupang.com/a/dMl6u5Bgpo", // 검색: "모니터암 가스스프링 듀얼"
      emoji: "🖥️",
    },
    {
      title: "소니 WH-1000XM5 헤드폰",
      description: "긴 사고의 시간을 위한 노캔",
      url: "https://link.coupang.com/a/dMmGvnALTM", // 검색: "소니 WH-1000XM5"
      emoji: "🎧",
    },
  ],

  "developer:builder": [
    {
      title: "키크론 K2 무선 키보드",
      description: "빠른 손에 어울리는 기계식",
      url: "https://link.coupang.com/a/dMmE7UqovY", // 검색: "키크론 K2 무선"
      emoji: "⌨️",
    },
    {
      title: "Anker USB-C 멀티 허브 7-in-1",
      description: "노트북 한 대로 풀스택",
      url: "https://link.coupang.com/a/dMmCJb2emi", // 검색: "Anker USB-C 허브 7in1"
      emoji: "🔌",
    },
    {
      title: "로지텍 MX Anywhere 3S",
      description: "어디서든 빠른 작업",
      url: "https://link.coupang.com/a/dMmcm0IxwG", // 검색: "로지텍 MX Anywhere 3S"
      emoji: "🖱️",
    },
  ],

  "developer:researcher": [
    {
      title: "코딩 인터뷰 완전 분석",
      description: "알고리즘 문제 해결 정석",
      url: "https://link.coupang.com/a/dMmBecVFkW", // 검색: "코딩 인터뷰 완전 분석"
      emoji: "📗",
    },
    {
      title: "BenQ 모니터 라이트 스크린바",
      description: "장시간 디버깅에 눈 보호",
      url: "https://link.coupang.com/a/dMmehsgh5g", // 검색: "BenQ 스크린바 모니터라이트"
      emoji: "💡",
    },
    {
      title: "미도리 트래블러스 노트",
      description: "사고의 흐름을 잡는 노트",
      url: "https://link.coupang.com/a/dMmfxmjmXA", // 검색: "미도리 트래블러스 노트"
      emoji: "📓",
    },
  ],

  "developer:collaborator": [
    {
      title: "로지텍 MX Master 3S",
      description: "회의·문서 작업의 동반자",
      url: "https://link.coupang.com/a/dMmzRxVj1U", // 검색: "로지텍 MX Master 3S"
      emoji: "🖱️",
    },
    {
      title: "자석식 미니 화이트보드",
      description: "팀 아이디어 정리에 즉시",
      url: "https://link.coupang.com/a/dMmIAdewQS", // 검색: "자석식 화이트보드 책상용"
      emoji: "📋",
    },
    {
      title: "라미 사파리 만년필",
      description: "메모를 즐거움으로",
      url: "https://link.coupang.com/a/dMmJLd7lfM", // 검색: "라미 사파리 만년필"
      emoji: "🖊️",
    },
  ],

  // ──────────────────────────────── 커피 테스트 ────────────────────────────────

  "coffee:americano": [
    {
      title: "하리오 V60 드리퍼 02 세라믹",
      description: "단정한 드립 한 잔의 시작",
      url: "", // 검색: "하리오 V60 02 세라믹"
      emoji: "🫖",
    },
    {
      title: "스타벅스 하우스 블렌드 원두",
      description: "담백한 데일리 원두",
      url: "", // 검색: "스타벅스 하우스 블렌드 원두"
      emoji: "☕",
    },
    {
      title: "코렐 클래식 머그컵 세트",
      description: "꾸미지 않은 매일의 잔",
      url: "", // 검색: "코렐 머그컵 세트"
      emoji: "🍵",
    },
  ],

  "coffee:latte": [
    {
      title: "네스프레소 에어로치노 우유 거품기",
      description: "집에서 만드는 라떼 폼",
      url: "", // 검색: "네스프레소 에어로치노"
      emoji: "🥛",
    },
    {
      title: "보덤 더블월 라떼 글래스",
      description: "온도가 오래 가는 잔",
      url: "", // 검색: "보덤 더블월 라떼 잔"
      emoji: "🫗",
    },
    {
      title: "라바짜 크레마 에 아로마 원두",
      description: "달콤한 우유와 잘 어울리는 원두",
      url: "", // 검색: "라바짜 크레마 에 아로마 원두"
      emoji: "☕",
    },
  ],

  "coffee:espresso": [
    {
      title: "드롱기 EC685 에스프레소 머신",
      description: "진한 한 잔, 집에서 매일",
      url: "", // 검색: "드롱기 EC685"
      emoji: "⚙️",
    },
    {
      title: "일리 클래시코 다크 로스트 원두",
      description: "묵직한 에스프레소용",
      url: "", // 검색: "일리 클래시코 다크 로스트"
      emoji: "☕",
    },
    {
      title: "데미타스 잔 세트 6P",
      description: "에스프레소 한 잔의 예의",
      url: "", // 검색: "데미타스 잔 세트"
      emoji: "🥃",
    },
  ],

  "coffee:coldbrew": [
    {
      title: "하리오 콜드브루 추출기 1L",
      description: "8시간 천천히 우려낸 한 잔",
      url: "", // 검색: "하리오 콜드브루 추출기"
      emoji: "🧊",
    },
    {
      title: "스탠리 진공 텀블러 16oz",
      description: "온종일 시원한 콜드브루",
      url: "", // 검색: "스탠리 텀블러 16oz"
      emoji: "🥤",
    },
    {
      title: "맥심 콜드브루 마스터 원액",
      description: "바로 부어 만드는 콜드브루",
      url: "", // 검색: "맥심 콜드브루 마스터 원액"
      emoji: "☕",
    },
  ],

  // ──────────────────────────────── 여행 테스트 ────────────────────────────────

  "travel:planner": [
    {
      title: "미도리 트래블러스 노트북",
      description: "여행 동선·메모를 한 권에",
      url: "", // 검색: "미도리 트래블러스 노트북"
      emoji: "📓",
    },
    {
      title: "패킹큐브 정리 파우치 7종 세트",
      description: "캐리어 안 완벽 동선",
      url: "", // 검색: "여행 패킹큐브 7종 세트"
      emoji: "🧳",
    },
    {
      title: "RFID 차단 여권 케이스",
      description: "보안 + 정돈 두 토끼",
      url: "", // 검색: "RFID 여권 케이스"
      emoji: "🛂",
    },
  ],

  "travel:spontaneous": [
    {
      title: "후지필름 X-S20 미러리스 카메라",
      description: "즉흥 한 컷도 인생샷으로",
      url: "", // 검색: "후지필름 X-S20"
      emoji: "📷",
    },
    {
      title: "패타고니아 블랙홀 25L 백팩",
      description: "어디든 어울리는 한 가방",
      url: "", // 검색: "패타고니아 블랙홀 25L"
      emoji: "🎒",
    },
    {
      title: "호카 카하 미드 트레킹화",
      description: "골목·산책 어디든",
      url: "", // 검색: "호카 카하 미드 트레킹화"
      emoji: "🥾",
    },
  ],

  "travel:relaxer": [
    {
      title: "이솝 타싯 향초",
      description: "여행지에서도 익숙한 향",
      url: "", // 검색: "이솝 향초 타싯"
      emoji: "🕯️",
    },
    {
      title: "러쉬 입욕제 폭탄 세트",
      description: "호캉스의 마무리",
      url: "", // 검색: "러쉬 입욕제 세트"
      emoji: "🛁",
    },
    {
      title: "어그 페어 슬리퍼",
      description: "공항·호텔 어디든 푹신",
      url: "", // 검색: "어그 페어 슬리퍼"
      emoji: "👡",
    },
  ],

  "travel:foodie": [
    {
      title: "미슐랭 가이드 도쿄",
      description: "도시를 음식으로 기억하기",
      url: "", // 검색: "미슐랭 가이드 도쿄"
      emoji: "📕",
    },
    {
      title: "맥코믹 그래인더 향신료 세트",
      description: "여행지에서 만난 맛을 집에서",
      url: "", // 검색: "맥코믹 향신료 세트"
      emoji: "🌶️",
    },
    {
      title: "스테인리스 3단 도시락통",
      description: "현지 음식 사고 싶을 때",
      url: "", // 검색: "스테인리스 3단 도시락통"
      emoji: "🍱",
    },
  ],

  // ──────────────────────────────── 음악 테스트 ────────────────────────────────

  "music:balladeer": [
    {
      title: "오디오테크니카 ATH-M50x 헤드폰",
      description: "가사 한 줄까지 듣는 모니터링",
      url: "", // 검색: "오디오테크니카 ATH-M50x"
      emoji: "🎧",
    },
    {
      title: "필립스 휴 고 무드등",
      description: "한 곡을 위한 조명",
      url: "", // 검색: "필립스 휴 고 무드등"
      emoji: "💡",
    },
    {
      title: "검정치마 정규 LP",
      description: "헤드폰과 어울리는 한 장",
      url: "", // 검색: "검정치마 LP"
      emoji: "💿",
    },
  ],

  "music:dancer": [
    {
      title: "JBL Flip 6 블루투스 스피커",
      description: "분위기 바꿔주는 한 대",
      url: "", // 검색: "JBL Flip 6"
      emoji: "🔊",
    },
    {
      title: "Beats Fit Pro 무선 이어폰",
      description: "운동·러닝에 흔들리지 않는",
      url: "", // 검색: "Beats Fit Pro"
      emoji: "🎧",
    },
    {
      title: "회전 미러볼 LED 무드등",
      description: "집이 곧 작은 클럽",
      url: "", // 검색: "회전 미러볼 LED 무드등"
      emoji: "🪩",
    },
  ],

  "music:digger": [
    {
      title: "소니 WH-1000XM5 헤드폰",
      description: "디테일을 캐치하는 노캔",
      url: "", // 검색: "소니 WH-1000XM5"
      emoji: "🎧",
    },
    {
      title: "FiiO BTR7 휴대용 DAC",
      description: "스마트폰을 하이파이로",
      url: "", // 검색: "FiiO BTR7 휴대용 DAC"
      emoji: "🎚️",
    },
    {
      title: "한국 인디 음악사 책",
      description: "음악을 더 깊이 파고들기",
      url: "", // 검색: "한국 인디 음악사 책"
      emoji: "📘",
    },
  ],

  "music:mellow": [
    {
      title: "오디오테크니카 AT-LP60X 턴테이블",
      description: "느린 음악을 위한 도구",
      url: "", // 검색: "오디오테크니카 AT-LP60X"
      emoji: "🎚️",
    },
    {
      title: "Aiyima A07 진공관 앰프",
      description: "따뜻한 톤의 입문 앰프",
      url: "", // 검색: "Aiyima A07 진공관 앰프"
      emoji: "🔌",
    },
    {
      title: "재즈 입문 가이드북",
      description: "BGM 한 줄에 깊이 더하기",
      url: "", // 검색: "재즈 입문 가이드북"
      emoji: "📖",
    },
  ],

  // ──────────────────────────────── 음식 테스트 ────────────────────────────────

  "food:gourmet": [
    {
      title: "미슐랭 가이드 서울",
      description: "한 끼의 가능성 확장",
      url: "", // 검색: "미슐랭 가이드 서울"
      emoji: "📕",
    },
    {
      title: "리델 비넘 와인 글래스 2P",
      description: "한 잔의 페어링을 제대로",
      url: "", // 검색: "리델 비넘 와인 글래스"
      emoji: "🍷",
    },
    {
      title: "프리미엄 디저트 플레이트 세트",
      description: "플레이팅의 디테일",
      url: "", // 검색: "디저트 플레이트 세트"
      emoji: "🍽️",
    },
  ],

  "food:comfort": [
    {
      title: "크록팟 슬로우 쿠커 4L",
      description: "오랜 시간이 빚는 한 끼",
      url: "", // 검색: "크록팟 슬로우 쿠커 4L"
      emoji: "🍲",
    },
    {
      title: "한국 가정식 레시피북",
      description: "엄마 손맛의 기록",
      url: "", // 검색: "한국 가정식 레시피북"
      emoji: "📗",
    },
    {
      title: "락앤락 보온 도시락통",
      description: "따뜻한 한 그릇을 가지고",
      url: "", // 검색: "락앤락 보온 도시락통"
      emoji: "🍱",
    },
  ],

  "food:adventurer": [
    {
      title: "맥코믹 24종 향신료 세트",
      description: "전 세계 맛을 집으로",
      url: "", // 검색: "맥코믹 향신료 24종 세트"
      emoji: "🌶️",
    },
    {
      title: "Salt Fat Acid Heat (요리 입문서)",
      description: "맛의 4요소를 이해하기",
      url: "", // 검색: "Salt Fat Acid Heat 책"
      emoji: "📙",
    },
    {
      title: "한국 발효 가이드북",
      description: "익숙한 재료의 새 얼굴",
      url: "", // 검색: "한국 발효 가이드북"
      emoji: "📖",
    },
  ],

  "food:healthy": [
    {
      title: "글래스 미트프렙 컨테이너 5종",
      description: "균형 잡힌 한 주의 식단",
      url: "", // 검색: "유리 미트프렙 컨테이너 세트"
      emoji: "🥗",
    },
    {
      title: "비건 레시피 셀프 쿠킹북",
      description: "식물성 기반 한 끼",
      url: "", // 검색: "비건 레시피북"
      emoji: "📗",
    },
    {
      title: "스테인리스 포케 볼 세트",
      description: "컬러풀한 한 그릇",
      url: "", // 검색: "포케볼 세트"
      emoji: "🥣",
    },
  ],
};

export function getRecommendations(
  testId: string,
  resultType: string,
): AffiliateProduct[] {
  return affiliateRecommendations[`${testId}:${resultType}`] ?? [];
}
