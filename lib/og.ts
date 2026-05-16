const PRETENDARD_BOLD =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Bold.otf";
const PRETENDARD_REGULAR =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Regular.otf";

export const ogSize = { width: 1200, height: 630 } as const;

export async function loadOgFonts() {
  const [bold, regular] = await Promise.all([
    fetch(PRETENDARD_BOLD).then((r) => r.arrayBuffer()),
    fetch(PRETENDARD_REGULAR).then((r) => r.arrayBuffer()),
  ]);
  return [
    {
      name: "Pretendard",
      data: bold,
      style: "normal" as const,
      weight: 700 as const,
    },
    {
      name: "Pretendard",
      data: regular,
      style: "normal" as const,
      weight: 400 as const,
    },
  ];
}

// Map each result.type → [from, via, to] gradient stops, mirroring the Tailwind
// gradient used on the result page hero.
export const resultGradients: Record<string, [string, string, string]> = {
  // developer
  architect: ["#c4b5fd", "#a5b4fc", "#93c5fd"],
  builder: ["#fdba74", "#fcd34d", "#fde047"],
  researcher: ["#6ee7b7", "#5eead4", "#67e8f9"],
  collaborator: ["#fda4af", "#f9a8d4", "#f0abfc"],
  // coffee
  americano: ["#d6d3d1", "#fde68a", "#e7e5e4"],
  latte: ["#fde68a", "#fed7aa", "#fecdd3"],
  espresso: ["#fda4af", "#fca5a5", "#fcd34d"],
  coldbrew: ["#7dd3fc", "#67e8f9", "#a5b4fc"],
  // travel
  planner: ["#7dd3fc", "#93c5fd", "#a5b4fc"],
  spontaneous: ["#fdba74", "#fda4af", "#f9a8d4"],
  relaxer: ["#6ee7b7", "#5eead4", "#bef264"],
  foodie: ["#fcd34d", "#fdba74", "#fca5a5"],
  // music
  balladeer: ["#fda4af", "#f9a8d4", "#f0abfc"],
  dancer: ["#f0abfc", "#d8b4fe", "#7dd3fc"],
  digger: ["#5eead4", "#6ee7b7", "#bef264"],
  mellow: ["#fcd34d", "#d6d3d1", "#a5b4fc"],
  // food
  gourmet: ["#fcd34d", "#fdba74", "#fca5a5"],
  comfort: ["#fde047", "#fcd34d", "#fdba74"],
  adventurer: ["#fca5a5", "#f9a8d4", "#f0abfc"],
  healthy: ["#6ee7b7", "#5eead4", "#67e8f9"],
};

export const brandGradient: [string, string, string] = [
  "#fecaca",
  "#ddd6fe",
  "#bae6fd",
];

// Brutalist: 단일 액센트 색 매핑 (그라데이션 대신)
export const resultTints: Record<string, string> = {
  // developer
  architect: "#4ECDC4",
  builder: "#FFE66D",
  researcher: "#4ECDC4",
  collaborator: "#FF6B6B",
  // coffee
  americano: "#FFE66D",
  latte: "#FF6B6B",
  espresso: "#FF6B6B",
  coldbrew: "#4ECDC4",
  // travel
  planner: "#4ECDC4",
  spontaneous: "#FF6B6B",
  relaxer: "#FFE66D",
  foodie: "#FF6B6B",
  // music
  balladeer: "#FF6B6B",
  dancer: "#FFE66D",
  digger: "#4ECDC4",
  mellow: "#FFE66D",
  // food
  gourmet: "#FF6B6B",
  comfort: "#FFE66D",
  adventurer: "#FF6B6B",
  healthy: "#4ECDC4",
};

export const COLOR_PAPER = "#F7F7F7";
export const COLOR_INK = "#0a0a0a";
export const COLOR_PRIMARY = "#FF6B6B";
export const COLOR_SECONDARY = "#4ECDC4";
export const COLOR_ACCENT = "#FFE66D";
