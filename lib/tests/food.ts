import type { Test } from "./types";

export const foodTest: Test = {
  id: "food",
  title: "내 음식 취향은?",
  description: "한 끼를 고르는 기준으로 알아보는 나의 음식 본능",
  emoji: "🍽️",
  questions: [
    {
      id: 1,
      text: "점심을 고를 때 가장 끌리는 것은?",
      options: [
        { text: "검증된 맛집의 시그니처 메뉴", type: "gourmet", score: 3 },
        { text: "마음 푸근해지는 한식 한 그릇", type: "comfort", score: 3 },
        { text: "처음 보는 신메뉴·이국적 음식", type: "adventurer", score: 3 },
        { text: "영양 밸런스 좋은 한 끼", type: "healthy", score: 3 },
      ],
    },
    {
      id: 2,
      text: "여행 가서 가장 기대되는 식사는?",
      options: [
        { text: "현지 파인다이닝·오마카세", type: "gourmet", score: 3 },
        { text: "현지인이 가는 노포·가정식", type: "comfort", score: 3 },
        { text: "야시장의 길거리 음식", type: "adventurer", score: 3 },
        { text: "신선한 재료의 로컬 마켓", type: "healthy", score: 3 },
      ],
    },
    {
      id: 3,
      text: "평일 저녁의 식사 패턴은?",
      options: [
        { text: "한 가지 메뉴를 제대로", type: "gourmet", score: 3 },
        { text: "익숙한 단골 메뉴", type: "comfort", score: 3 },
        { text: "매번 새로운 곳 시도", type: "adventurer", score: 3 },
        { text: "단백질·채소 챙긴 한 그릇", type: "healthy", score: 3 },
      ],
    },
    {
      id: 4,
      text: "음식에서 가장 중요한 요소는?",
      options: [
        { text: "텍스처·향·페어링의 디테일", type: "gourmet", score: 3 },
        { text: "따뜻함과 익숙함", type: "comfort", score: 3 },
        { text: "신선한 자극과 새로움", type: "adventurer", score: 3 },
        { text: "영양과 컨디션", type: "healthy", score: 3 },
      ],
    },
    {
      id: 5,
      text: "시즌별 즐겨 먹는 것은?",
      options: [
        { text: "그 계절 식재료의 정수", type: "gourmet", score: 3 },
        { text: "계절 상관없는 인생 메뉴", type: "comfort", score: 3 },
        { text: "시즌 한정 신메뉴 사냥", type: "adventurer", score: 3 },
        { text: "제철 채소·과일 중심", type: "healthy", score: 3 },
      ],
    },
    {
      id: 6,
      text: "친구와 외식 갈 때 보통?",
      options: [
        { text: "별점·후기 꼼꼼히 본 곳으로", type: "gourmet", score: 3 },
        { text: "자주 가는 단골집", type: "comfort", score: 3 },
        { text: '"처음 가보는 곳!" 선언', type: "adventurer", score: 3 },
        { text: "건강한 옵션 있는 곳", type: "healthy", score: 3 },
      ],
    },
    {
      id: 7,
      text: "SNS에 음식 사진 올린다면?",
      options: [
        { text: "플레이팅·빛 신경 쓴 컷", type: "gourmet", score: 3 },
        { text: "정 들어간 가정식 한 상", type: "comfort", score: 3 },
        { text: "신기한·이상한 비주얼", type: "adventurer", score: 3 },
        { text: "컬러풀한 비건·홀푸드", type: "healthy", score: 3 },
      ],
    },
    {
      id: 8,
      text: "이상적인 한 끼는?",
      options: [
        { text: "제대로 준비된 코스 한 끼", type: "gourmet", score: 3 },
        { text: "좋아하는 사람과 따뜻한 한 끼", type: "comfort", score: 3 },
        { text: "미친 향·맛의 발견", type: "adventurer", score: 3 },
        { text: "몸이 가벼워지는 균형 한 끼", type: "healthy", score: 3 },
      ],
    },
  ],
  results: {
    gourmet: {
      type: "gourmet",
      title: "디테일 미식가",
      emoji: "🍴",
      tagline: "한 입에 디테일을 발견하는 사람",
      description:
        "당신은 음식의 텍스처·향·페어링까지 의식하는 사람이에요. 양보다 질, 한 끼라도 제대로. 평범한 식사도 당신 손에선 한 편의 이야기가 됩니다.",
      traits: ["섬세함", "취향", "디테일", "감각"],
      matches: ["건강 밸런서", "탐험 미각가"],
      recommendation:
        "오마카세·파인다이닝·와인 페어링 코스가 잘 맞아요. 동네 미식 투어, 시즌별 식재료 마켓도 추천해요.",
      gradient: "from-amber-300 via-orange-300 to-red-300",
    },
    comfort: {
      type: "comfort",
      title: "푸근한 위로식가",
      emoji: "🍜",
      tagline: "한 그릇으로 마음이 따뜻해지는 사람",
      description:
        "당신에게 음식은 위로예요. 화려한 한 끼보다 익숙한 단골집, 엄마 손맛 같은 한 그릇이 더 행복합니다. 옆에 두면 마음이 편해지는 사람이에요.",
      traits: ["따뜻함", "푸근함", "정", "안정감"],
      matches: ["디테일 미식가", "탐험 미각가"],
      recommendation:
        "단골 분식집·국밥집을 깊게, 시간 들여 끓이는 홈쿠킹·찌개·전골이 잘 맞아요. 식구·친구와의 한 상이 가장 좋은 보약입니다.",
      gradient: "from-yellow-300 via-amber-300 to-orange-300",
    },
    adventurer: {
      type: "adventurer",
      title: "탐험 미각가",
      emoji: "🌶️",
      tagline: "새로움이 식욕을 부르는 사람",
      description:
        "당신은 음식을 발견의 즐거움으로 먹는 사람이에요. 한 번도 안 먹어본 메뉴, 이국적 향신료, 야시장의 묘한 길거리 음식 — 호기심이 미각의 엔진이에요.",
      traits: ["호기심", "용기", "감각", "다양성"],
      matches: ["디테일 미식가", "건강 밸런서"],
      recommendation:
        "동남아·페루·중동처럼 덜 알려진 미식, 푸드 페스티벌이 잘 맞아요. 시즌 한정·콜라보 메뉴 사냥, 친구와의 미식 로드 트립도 즐거워요.",
      gradient: "from-red-300 via-pink-300 to-fuchsia-300",
    },
    healthy: {
      type: "healthy",
      title: "건강 밸런서",
      emoji: "🥗",
      tagline: "잘 챙겨먹는 게 곧 자기 관리인 사람",
      description:
        "당신에게 음식은 컨디션이에요. 영양 밸런스, 깔끔한 재료, 자연 그대로의 맛을 좋아하고, 몸이 가벼울 때 가장 기분이 좋아집니다. 꾸준한 사람의 식탁이에요.",
      traits: ["밸런스", "절제", "자기관리", "꾸준함"],
      matches: ["디테일 미식가", "탐험 미각가"],
      recommendation:
        "포케·살라드 보울·홀푸드 카페가 잘 맞아요. 미트 프렙·홈쿡 루틴을 만들고, 로컬 마켓에서 제철 채소를 사는 시간이 즐거워질 거예요.",
      gradient: "from-emerald-300 via-teal-300 to-cyan-300",
    },
  },
};
