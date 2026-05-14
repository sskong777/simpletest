import type { Test } from "./types";

export const coffeeTest: Test = {
  id: "coffee",
  title: "내 취향의 커피는?",
  description: "기분과 성격으로 찾아보는 나에게 어울리는 한 잔",
  emoji: "☕️",
  questions: [
    {
      id: 1,
      text: "오늘 아침 기분은?",
      options: [
        { text: "평소처럼 담담하다", type: "americano", score: 3 },
        { text: "부드럽고 포근하다", type: "latte", score: 3 },
        { text: "강하게 깨우고 싶다", type: "espresso", score: 3 },
        { text: "차분하고 쿨하다", type: "coldbrew", score: 3 },
      ],
    },
    {
      id: 2,
      text: "친구들 사이에서 나의 포지션은?",
      options: [
        { text: "조용히 듣는 편", type: "americano", score: 3 },
        { text: "다정하게 챙기는 편", type: "latte", score: 3 },
        { text: "분위기를 띄우는 편", type: "espresso", score: 3 },
        { text: "자기 페이스 유지", type: "coldbrew", score: 3 },
      ],
    },
    {
      id: 3,
      text: "끌리는 색은?",
      options: [
        { text: "베이지 / 브라운", type: "americano", score: 3 },
        { text: "크림 / 연한 핑크", type: "latte", score: 3 },
        { text: "검정 / 짙은 와인", type: "espresso", score: 3 },
        { text: "네이비 / 얼음빛 블루", type: "coldbrew", score: 3 },
      ],
    },
    {
      id: 4,
      text: "일하는 스타일은?",
      options: [
        { text: "군더더기 없이 직진", type: "americano", score: 3 },
        { text: "부드럽게 풀어가며", type: "latte", score: 3 },
        { text: "한 번에 깊게 몰입", type: "espresso", score: 3 },
        { text: "마이 페이스로 길게", type: "coldbrew", score: 3 },
      ],
    },
    {
      id: 5,
      text: "평소 옷차림은?",
      options: [
        { text: "단정하고 무난한", type: "americano", score: 3 },
        { text: "포근하고 사랑스러운", type: "latte", score: 3 },
        { text: "시크하고 강렬한", type: "espresso", score: 3 },
        { text: "미니멀하고 트렌디한", type: "coldbrew", score: 3 },
      ],
    },
    {
      id: 6,
      text: "카페에서 보내는 시간은?",
      options: [
        { text: "짧고 단순하게", type: "americano", score: 3 },
        { text: "친구와 수다 떨며", type: "latte", score: 3 },
        { text: "진하게 집중", type: "espresso", score: 3 },
        { text: "노트북 켜고 길게", type: "coldbrew", score: 3 },
      ],
    },
    {
      id: 7,
      text: "스트레스 해소법은?",
      options: [
        { text: "산책 한 바퀴", type: "americano", score: 3 },
        { text: "좋아하는 사람과 통화", type: "latte", score: 3 },
        { text: "운동으로 땀 빼기", type: "espresso", score: 3 },
        { text: "혼자 음악 듣기", type: "coldbrew", score: 3 },
      ],
    },
    {
      id: 8,
      text: "사람들이 보는 나의 이미지는?",
      options: [
        { text: "솔직하고 담백", type: "americano", score: 3 },
        { text: "따뜻하고 다정", type: "latte", score: 3 },
        { text: "열정적이고 강렬", type: "espresso", score: 3 },
        { text: "차분하고 시크", type: "coldbrew", score: 3 },
      ],
    },
  ],
  results: {
    americano: {
      type: "americano",
      title: "아메리카노",
      emoji: "☕",
      tagline: "담백하고 솔직한 한 잔",
      description:
        "당신은 군더더기 없는 아메리카노 같은 사람이에요. 꾸미지 않은 말과 단순한 일상이 가장 편하고, 무엇을 하든 본질에 집중합니다. 깊은 신뢰는 늘 당신 같은 사람에게서 시작돼요.",
      traits: ["담백함", "솔직함", "단순함", "안정감"],
      matches: ["라떼", "콜드브루"],
      recommendation:
        "혼자 책 읽는 카페 시간, 단골 한 곳을 깊게 다니는 일상이 잘 맞아요. 단정한 무드의 베이커리·필름 카메라 같은 취미도 어울려요.",
      gradient: "from-stone-300 via-amber-200 to-stone-200",
    },
    latte: {
      type: "latte",
      title: "라떼",
      emoji: "🥛",
      tagline: "포근하고 다정한 한 잔",
      description:
        "당신은 따뜻한 라떼 같은 사람이에요. 사람을 챙기고, 분위기를 부드럽게 만들고, 마음의 결을 살핍니다. 함께 있는 것만으로 위로가 되는, 그런 따뜻한 사람.",
      traits: ["다정함", "공감력", "포근함", "배려"],
      matches: ["아메리카노", "에스프레소"],
      recommendation:
        "친한 친구와의 브런치, 따뜻한 영화 한 편, 베이킹 클래스 같은 시간이 행복을 채워줘요. 포근한 색감의 인테리어도 잘 어울립니다.",
      gradient: "from-amber-200 via-orange-200 to-rose-200",
    },
    espresso: {
      type: "espresso",
      title: "에스프레소",
      emoji: "⚡",
      tagline: "강렬하고 진한 한 잔",
      description:
        "당신은 한 모금에 마음을 사로잡는 에스프레소 같은 사람이에요. 좋아하는 것에 열정적으로 몰입하고, 분위기를 바꾸는 힘이 있습니다. 짧고 진하게, 그러나 잊을 수 없게.",
      traits: ["열정", "집중", "강렬함", "추진력"],
      matches: ["라떼", "콜드브루"],
      recommendation:
        "강도 높은 운동, 좋아하는 한 가지에 몰입하는 하루를 추천해요. 강한 향수·검정 위주의 무드, 짧고 진한 콘텐츠 소비가 잘 맞습니다.",
      gradient: "from-rose-300 via-red-300 to-amber-300",
    },
    coldbrew: {
      type: "coldbrew",
      title: "콜드브루",
      emoji: "🧊",
      tagline: "쿨하고 단단한 한 잔",
      description:
        "당신은 시간을 들여 만든 콜드브루 같은 사람이에요. 빠른 유행보다 자기 속도와 취향이 분명하고, 차분한 단단함이 있습니다. 곁에 두고 싶은 사람.",
      traits: ["쿨함", "마이페이스", "단단함", "취향"],
      matches: ["아메리카노", "에스프레소"],
      recommendation:
        "혼자만의 음악·산책, 미니멀하게 정리된 작업 공간이 잘 맞아요. 긴 호흡의 다큐멘터리, LP·핸드드립 같은 슬로우 취미도 어울립니다.",
      gradient: "from-sky-300 via-cyan-300 to-indigo-300",
    },
  },
};
