import type { Test } from "./types";

export const musicTest: Test = {
  id: "music",
  title: "내 취향의 음악은?",
  description: "취향과 기분으로 알아보는 나에게 어울리는 사운드",
  emoji: "🎧",
  questions: [
    {
      id: 1,
      text: "출근길 플레이리스트는?",
      options: [
        { text: "잔잔한 가사 위주의 발라드", type: "balladeer", score: 3 },
        { text: "텐션을 올리는 비트", type: "dancer", score: 3 },
        { text: "남들이 잘 모르는 트랙", type: "digger", score: 3 },
        { text: "재즈·로파이로 정돈된 사운드", type: "mellow", score: 3 },
      ],
    },
    {
      id: 2,
      text: "노래방에서 첫 곡은?",
      options: [
        { text: "발라드 한 곡 진하게", type: "balladeer", score: 3 },
        { text: "최신 댄스곡으로 분위기 점화", type: "dancer", score: 3 },
        { text: "좀 어려운, 다들 모르는 곡", type: "digger", score: 3 },
        { text: "라이브 분위기의 재즈 스탠다드", type: "mellow", score: 3 },
      ],
    },
    {
      id: 3,
      text: "가장 가고 싶은 공연 장소는?",
      options: [
        { text: "좋아하는 가수 단독 콘서트", type: "balladeer", score: 3 },
        { text: "대형 페스티벌 메인 무대", type: "dancer", score: 3 },
        { text: "작은 라이브하우스 무명 밴드", type: "digger", score: 3 },
        { text: "재즈 클럽의 한 테이블", type: "mellow", score: 3 },
      ],
    },
    {
      id: 4,
      text: "음악을 가장 많이 듣는 순간은?",
      options: [
        { text: "혼자 감정을 정리할 때", type: "balladeer", score: 3 },
        { text: "운동하거나 이동할 때", type: "dancer", score: 3 },
        { text: "새 음악을 발견하고 싶을 때", type: "digger", score: 3 },
        { text: "작업하거나 쉴 때", type: "mellow", score: 3 },
      ],
    },
    {
      id: 5,
      text: "좋아하는 곡에서 가장 끌리는 부분은?",
      options: [
        { text: "마음을 흔드는 가사 한 줄", type: "balladeer", score: 3 },
        { text: "터지는 후렴과 비트 드롭", type: "dancer", score: 3 },
        { text: "묘한 코드 진행과 사운드", type: "digger", score: 3 },
        { text: "전체를 감싸는 분위기와 톤", type: "mellow", score: 3 },
      ],
    },
    {
      id: 6,
      text: "음악을 듣는 기기·공간은?",
      options: [
        { text: "이어폰으로 깊이 몰입", type: "balladeer", score: 3 },
        { text: "스피커로 크게 울리게", type: "dancer", score: 3 },
        { text: "헤드폰으로 디테일 캐치", type: "digger", score: 3 },
        { text: "진공관·LP로 천천히", type: "mellow", score: 3 },
      ],
    },
    {
      id: 7,
      text: "친구에게 추천하는 곡은?",
      options: [
        { text: "나의 인생곡 한 곡", type: "balladeer", score: 3 },
        { text: "같이 신날 곡", type: "dancer", score: 3 },
        { text: '"이거 들어봤어?" 신선한 발견', type: "digger", score: 3 },
        { text: "공간 분위기를 살릴 곡", type: "mellow", score: 3 },
      ],
    },
    {
      id: 8,
      text: "음악이 나에게 주는 것은?",
      options: [
        { text: "위로와 공감", type: "balladeer", score: 3 },
        { text: "에너지와 흥", type: "dancer", score: 3 },
        { text: "발견의 즐거움", type: "digger", score: 3 },
        { text: "평온과 정돈", type: "mellow", score: 3 },
      ],
    },
  ],
  results: {
    balladeer: {
      type: "balladeer",
      title: "감성 발라더",
      emoji: "🎤",
      tagline: "한 줄 가사에 마음이 흔들리는 사람",
      description:
        "당신은 음악을 가사와 감정으로 듣는 사람이에요. 한 곡을 오래, 한 가수를 깊게 좋아하고, 음악이 흐를 때 마음이 따라 움직입니다. 인생의 어떤 장면에는 늘 당신의 노래가 함께 있어요.",
      traits: ["감성", "공감", "몰입", "감동"],
      matches: ["취향 디거", "무드 메이커"],
      recommendation:
        "아이유·검정치마·잔나비, 그리고 OST 한 곡으로 영화 한 편을 다시 보는 밤을 추천해요. 헤드폰 끼고 가만히 듣는 시간이 잘 맞습니다.",
      gradient: "from-rose-300 via-pink-300 to-fuchsia-300",
    },
    dancer: {
      type: "dancer",
      title: "텐션 댄서",
      emoji: "🪩",
      tagline: "비트가 들리면 몸이 먼저 움직이는 사람",
      description:
        "당신에게 음악은 곧 에너지예요. 후렴구 한 박자, 베이스 한 줄로 분위기를 완전히 바꿉니다. 평범한 하루도 비트만 깔리면 무대가 되는 사람.",
      traits: ["에너지", "흥", "리듬", "긍정"],
      matches: ["감성 발라더", "취향 디거"],
      recommendation:
        "K-pop·EDM 페스티벌, 러닝과 함께 듣는 BPM 130 플레이리스트를 추천해요. 친구와의 노래방, 클럽 라이브가 잘 맞습니다.",
      gradient: "from-fuchsia-300 via-purple-300 to-sky-300",
    },
    digger: {
      type: "digger",
      title: "취향 디거",
      emoji: "🎧",
      tagline: "남들이 모르는 한 곡을 발견하는 사람",
      description:
        "당신은 음악을 '발견의 즐거움'으로 듣는 사람이에요. 차트보다 아티스트의 EP·데모에 진심이고, 마이너 장르일수록 호기심이 커집니다. 누구의 컬렉션보다 당신의 플레이리스트가 가장 흥미로워요.",
      traits: ["취향", "발견", "호기심", "독립성"],
      matches: ["무드 메이커", "감성 발라더"],
      recommendation:
        "한국 인디, 일본 시부야계, 미국 베드룸 팝의 작은 레이블을 파보세요. 작은 라이브하우스 단독 공연이 인생 경험이 될 거예요.",
      gradient: "from-teal-300 via-emerald-300 to-lime-300",
    },
    mellow: {
      type: "mellow",
      title: "무드 메이커",
      emoji: "🎷",
      tagline: "공간을 채우는 톤을 사랑하는 사람",
      description:
        "당신에게 음악은 공기예요. 격렬한 곡보다 잔잔히 흐르는 톤과 분위기를 사랑하고, 음악이 깔린 공간에서 가장 잘 일하고 쉬어집니다. 옆에 두고 싶은 BGM 같은 사람.",
      traits: ["분위기", "여유", "차분함", "감각"],
      matches: ["감성 발라더", "취향 디거"],
      recommendation:
        "재즈 스탠다드·로파이·앰비언트 플레이리스트, 비 오는 날 카페에서의 작업 시간을 추천해요. LP·진공관 같은 슬로우 오디오 취미도 잘 맞아요.",
      gradient: "from-amber-300 via-stone-300 to-indigo-300",
    },
  },
};
