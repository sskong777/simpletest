import type { Test } from "./types";

export const travelTest: Test = {
  id: "travel",
  title: "나의 여행 스타일은?",
  description: "떠나기 전 알아보는 나의 여행 본능",
  emoji: "✈️",
  questions: [
    {
      id: 1,
      text: "여행 D-30, 나의 모습은?",
      options: [
        { text: "일정표를 엑셀로 만든다", type: "planner", score: 3 },
        { text: "비행기만 끊고 둔다", type: "spontaneous", score: 3 },
        { text: "숙소 위주로 알아본다", type: "relaxer", score: 3 },
        { text: "맛집 리스트부터 만든다", type: "foodie", score: 3 },
      ],
    },
    {
      id: 2,
      text: "짐을 쌀 때 나는?",
      options: [
        { text: "체크리스트대로 차곡차곡", type: "planner", score: 3 },
        { text: "출발 직전 몰아서", type: "spontaneous", score: 3 },
        { text: "편한 옷 위주로", type: "relaxer", score: 3 },
        { text: "현지 음식 챙길 도구까지", type: "foodie", score: 3 },
      ],
    },
    {
      id: 3,
      text: "도착하자마자 가장 먼저?",
      options: [
        { text: "동선을 다시 점검한다", type: "planner", score: 3 },
        { text: "그날 가장 끌리는 곳으로", type: "spontaneous", score: 3 },
        { text: "일단 숙소에서 쉰다", type: "relaxer", score: 3 },
        { text: "첫 끼니부터 정한다", type: "foodie", score: 3 },
      ],
    },
    {
      id: 4,
      text: "비 오는 날 일정은?",
      options: [
        { text: "준비해둔 플랜B 가동", type: "planner", score: 3 },
        { text: "그날 분위기 따라", type: "spontaneous", score: 3 },
        { text: "카페에서 책 읽기", type: "relaxer", score: 3 },
        { text: "비 오는 날 맛집 검색", type: "foodie", score: 3 },
      ],
    },
    {
      id: 5,
      text: "여행에서 최고의 순간은?",
      options: [
        { text: "계획대로 완벽했던 하루", type: "planner", score: 3 },
        { text: "우연히 발견한 골목", type: "spontaneous", score: 3 },
        { text: "노을 보며 멍 때릴 때", type: "relaxer", score: 3 },
        { text: "인생 메뉴를 만났을 때", type: "foodie", score: 3 },
      ],
    },
    {
      id: 6,
      text: "같이 가고 싶은 동행은?",
      options: [
        { text: "시간 잘 지키는 사람", type: "planner", score: 3 },
        { text: "호기심 많은 사람", type: "spontaneous", score: 3 },
        { text: "말없이 편한 사람", type: "relaxer", score: 3 },
        { text: "잘 먹는 사람", type: "foodie", score: 3 },
      ],
    },
    {
      id: 7,
      text: "기념품을 산다면?",
      options: [
        { text: "도시별 마그넷 컬렉션", type: "planner", score: 3 },
        { text: "그날 끌린 무엇이든", type: "spontaneous", score: 3 },
        { text: "향초나 입욕제", type: "relaxer", score: 3 },
        { text: "현지 향신료와 차", type: "foodie", score: 3 },
      ],
    },
    {
      id: 8,
      text: "여행 후 남기는 것은?",
      options: [
        { text: "정리된 여행 일지", type: "planner", score: 3 },
        { text: "즉흥 사진들", type: "spontaneous", score: 3 },
        { text: "회복된 마음", type: "relaxer", score: 3 },
        { text: "음식 사진과 레시피", type: "foodie", score: 3 },
      ],
    },
  ],
  results: {
    planner: {
      type: "planner",
      title: "계획형 트래블러",
      emoji: "📋",
      tagline: "완벽한 동선을 그리는 사람",
      description:
        "당신은 여행을 한 편의 잘 짜인 이야기처럼 만드는 사람이에요. 예약과 동선, 시간표가 정돈된 순간 마음이 편해지고, 덕분에 동행자들은 헤매지 않습니다. 당신의 노트북에는 가장 든든한 여행 가이드가 있어요.",
      traits: ["계획성", "꼼꼼함", "리더십", "신뢰감"],
      matches: ["힐링형 트래블러", "맛집형 트래블러"],
      recommendation:
        "유럽 미술관 투어, 국립공원 트레일처럼 코스가 분명한 여행이 잘 맞아요. 시간 단위로 짜이는 일본의 정밀한 일정도 어울립니다.",
      gradient: "from-sky-300 via-blue-300 to-indigo-300",
    },
    spontaneous: {
      type: "spontaneous",
      title: "즉흥형 트래블러",
      emoji: "🎲",
      tagline: "발길 닿는 대로의 자유로움",
      description:
        "당신은 우연을 사랑하는 여행자예요. 정해진 일정보다 그날의 공기와 느낌을 따라가고, 덕분에 누구도 가지 못한 골목을 자주 발견합니다. 여행의 진짜 매력을 가장 잘 아는 사람이에요.",
      traits: ["자유로움", "호기심", "용기", "감각"],
      matches: ["맛집형 트래블러", "힐링형 트래블러"],
      recommendation:
        "동남아 무계획 배낭여행, 야간 시장 골목 탐방, 즉흥 로드 트립이 잘 어울려요. 한 도시에서 며칠씩 머무는 슬로우 트래블도 추천해요.",
      gradient: "from-orange-300 via-rose-300 to-pink-300",
    },
    relaxer: {
      type: "relaxer",
      title: "힐링형 트래블러",
      emoji: "🌿",
      tagline: "마음을 비우러 떠나는 사람",
      description:
        "당신에게 여행은 회복의 시간이에요. 화려한 명소보다 조용한 카페, 노을, 따뜻한 욕조 같은 순간을 모읍니다. 돌아왔을 때 누구보다 부드러운 표정을 가진 건, 그래서 당신이에요.",
      traits: ["여유", "내향성", "감성", "회복력"],
      matches: ["계획형 트래블러", "즉흥형 트래블러"],
      recommendation:
        "발리·제주 풀빌라, 일본 료칸 온천, 잘 정돈된 호캉스가 회복에 좋아요. 자연 가까운 산속 캐빈도 잘 맞습니다.",
      gradient: "from-emerald-300 via-teal-300 to-lime-300",
    },
    foodie: {
      type: "foodie",
      title: "맛집형 트래블러",
      emoji: "🍜",
      tagline: "한 끼로 도시를 기억하는 사람",
      description:
        "당신은 도시를 음식으로 기억하는 사람이에요. 풍경보다 향과 맛이 먼저 떠오르고, 한 그릇 앞에서 가장 행복합니다. 당신과 함께라면 어디든 풍성한 여행이 됩니다.",
      traits: ["탐험심", "감각", "공유", "체험"],
      matches: ["즉흥형 트래블러", "계획형 트래블러"],
      recommendation:
        "도쿄 골목 노포, 태국 야시장, 미슐랭 별 사냥 여행을 추천해요. 현지 쿠킹 클래스와 시장 투어를 일정에 꼭 끼워보세요.",
      gradient: "from-amber-300 via-orange-300 to-red-300",
    },
  },
};
