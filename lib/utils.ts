import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Test } from "./tests/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateResult(scores: Record<string, number>): string {
  let winner = "";
  let max = -Infinity;
  for (const [type, score] of Object.entries(scores)) {
    if (score > max) {
      max = score;
      winner = type;
    }
  }
  return winner;
}

export function computeScores(
  test: Test,
  selectedIndices: (number | null)[],
): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of Object.keys(test.results)) {
    scores[type] = 0;
  }
  test.questions.forEach((q, i) => {
    const idx = selectedIndices[i];
    if (idx == null) return;
    const opt = q.options[idx];
    if (!opt) return;
    scores[opt.type] = (scores[opt.type] ?? 0) + opt.score;
  });
  return scores;
}
