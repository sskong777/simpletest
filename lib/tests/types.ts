export type Option = {
  text: string;
  type: string;
  score: number;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};

export type Result = {
  type: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  traits: string[];
  matches: string[];
  recommendation: string;
  gradient: string;
};

export type Test = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  questions: Question[];
  results: Record<string, Result>;
};
