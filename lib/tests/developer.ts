import type { Test } from "./types";

export const developerTest: Test = {
  id: "developer",
  title: "나는 어떤 개발자일까?",
  description: "일하는 방식과 성향으로 알아보는 나의 개발자 유형",
  emoji: "💻",
  questions: [
    {
      id: 1,
      text: "새로운 프로젝트가 시작됐다. 가장 먼저 하는 일은?",
      options: [
        { text: "전체 시스템 다이어그램부터 그린다", type: "architect", score: 3 },
        { text: "일단 작은 프로토타입을 만들어본다", type: "builder", score: 3 },
        { text: "비슷한 사례와 자료를 찾아본다", type: "researcher", score: 3 },
        { text: "팀원들과 모여 아이디어를 나눈다", type: "collaborator", score: 3 },
      ],
    },
    {
      id: 2,
      text: "코드 리뷰에서 가장 먼저 보는 것은?",
      options: [
        { text: "모듈 구조와 확장성", type: "architect", score: 3 },
        { text: "실제로 잘 동작하는지", type: "builder", score: 3 },
        { text: "알고리즘의 정확성과 효율", type: "researcher", score: 3 },
        { text: "다른 사람이 이해하기 쉬운지", type: "collaborator", score: 3 },
      ],
    },
    {
      id: 3,
      text: "회의 중 내 모습은?",
      options: [
        { text: "큰 그림과 방향을 제시한다", type: "architect", score: 3 },
        { text: "다음에 만들 것들을 정리한다", type: "builder", score: 3 },
        { text: "데이터와 근거를 꺼낸다", type: "researcher", score: 3 },
        { text: "의견을 듣고 조율한다", type: "collaborator", score: 3 },
      ],
    },
    {
      id: 4,
      text: "오래된 레거시 코드를 만났을 때?",
      options: [
        { text: "구조부터 다시 설계하고 싶다", type: "architect", score: 3 },
        { text: "일단 돌아가게 만들고 본다", type: "builder", score: 3 },
        { text: "왜 이렇게 짰는지 파헤친다", type: "researcher", score: 3 },
        { text: "누가 짰는지 물어보러 간다", type: "collaborator", score: 3 },
      ],
    },
    {
      id: 5,
      text: "가장 흥미로운 순간은?",
      options: [
        { text: "시스템 전체의 흐름이 그려질 때", type: "architect", score: 3 },
        { text: "손에 잡히는 결과가 나올 때", type: "builder", score: 3 },
        { text: "어려운 문제의 원인을 찾았을 때", type: "researcher", score: 3 },
        { text: "팀이 한 방향으로 움직일 때", type: "collaborator", score: 3 },
      ],
    },
    {
      id: 6,
      text: "새로운 기술을 만났을 때 첫 반응?",
      options: [
        { text: "우리 시스템에 어울리는지 따져본다", type: "architect", score: 3 },
        { text: "일단 써본다", type: "builder", score: 3 },
        { text: "내부 동작 원리부터 공부한다", type: "researcher", score: 3 },
        { text: "팀원들에게 공유하고 토론한다", type: "collaborator", score: 3 },
      ],
    },
    {
      id: 7,
      text: "슬럼프가 올 때 회복법은?",
      options: [
        { text: "큰 그림을 다시 그려본다", type: "architect", score: 3 },
        { text: "작은 사이드 프로젝트를 만든다", type: "builder", score: 3 },
        { text: "책이나 강의를 깊게 본다", type: "researcher", score: 3 },
        { text: "동료와 커피챗을 한다", type: "collaborator", score: 3 },
      ],
    },
    {
      id: 8,
      text: "나의 강점을 한 단어로 말한다면?",
      options: [
        { text: "전체를 보는 시야", type: "architect", score: 3 },
        { text: "빠른 실행력", type: "builder", score: 3 },
        { text: "깊은 탐구", type: "researcher", score: 3 },
        { text: "따뜻한 소통", type: "collaborator", score: 3 },
      ],
    },
  ],
  results: {
    architect: {
      type: "architect",
      title: "완벽주의 아키텍트",
      emoji: "🏗️",
      tagline: "큰 그림을 그리는 시스템 설계자",
      description:
        "당신은 복잡한 문제를 구조로 풀어내는 사람입니다. 한 발 떨어져서 전체를 조망하고, 모듈의 경계와 시스템의 확장성을 먼저 생각합니다. 당장의 코드 한 줄보다 1년 뒤의 유지보수가 보이는 타입이에요.",
      traits: ["시스템 사고", "추상화", "장기적 시야", "신중함"],
      matches: ["빠른 실행파 빌더", "꼼꼼한 리서처"],
      recommendation:
        "복잡한 시스템 설계가 필요한 백엔드·플랫폼·인프라 팀에서 빛나요. 기술 결정을 책임지는 시니어·테크리드 트랙이 잘 맞습니다.",
      gradient: "from-violet-300 via-indigo-300 to-blue-300",
    },
    builder: {
      type: "builder",
      title: "빠른 실행파 빌더",
      emoji: "⚡",
      tagline: "손에 잡히는 결과를 만드는 사람",
      description:
        "당신은 일단 만들어보는 사람입니다. 완벽한 설계보다 빠른 실험과 작은 성공의 누적을 신뢰해요. 손이 빠르고, 막힌 일을 풀어내는 추진력이 있습니다. 팀에 활기를 불어넣는 엔진 같은 존재예요.",
      traits: ["빠른 실행", "프로토타이핑", "추진력", "낙관"],
      matches: ["완벽주의 아키텍트", "소통왕 협력자"],
      recommendation:
        "초기 스타트업, 풀스택 개발, 해커톤에서 진가가 드러나요. MVP를 빠르게 만들고 검증하는 제품팀이 잘 맞습니다.",
      gradient: "from-orange-300 via-amber-300 to-yellow-300",
    },
    researcher: {
      type: "researcher",
      title: "꼼꼼한 리서처",
      emoji: "📚",
      tagline: "깊이 파고드는 탐구자",
      description:
        "당신은 '왜?'를 멈추지 않는 사람입니다. 표면의 동작 너머 원리를 보고 싶어 하고, 디버깅이 시작되면 끝까지 끌고 갑니다. 정답에 가까운 답을 찾아내는 팀의 등불 같은 존재예요.",
      traits: ["분석력", "집요함", "학습력", "정확함"],
      matches: ["완벽주의 아키텍트", "소통왕 협력자"],
      recommendation:
        "성능 최적화, 알고리즘, 보안, 머신러닝 도메인에 잘 어울려요. 깊이 있는 R&D·연구실·플랫폼 코어 팀이 잘 맞습니다.",
      gradient: "from-emerald-300 via-teal-300 to-cyan-300",
    },
    collaborator: {
      type: "collaborator",
      title: "소통왕 협력자",
      emoji: "🤝",
      tagline: "팀을 잇는 따뜻한 다리",
      description:
        "당신은 사람과 사람 사이를 잇는 사람입니다. 코드만큼이나 동료의 감정과 맥락을 읽고, 흩어진 의견을 한 방향으로 모읍니다. 좋은 팀에는 늘 당신 같은 사람이 있어요.",
      traits: ["공감력", "커뮤니케이션", "조율", "신뢰"],
      matches: ["빠른 실행파 빌더", "꼼꼼한 리서처"],
      recommendation:
        "DevRel, 테크리드, 디자인 시스템, PM 같은 사람과 기술의 교차점이 잘 맞아요. 멀티 디시플린 협업이 많은 조직에서 빛납니다.",
      gradient: "from-rose-300 via-pink-300 to-fuchsia-300",
    },
  },
};
