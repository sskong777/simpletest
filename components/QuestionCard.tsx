"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Option } from "@/lib/tests/types";

type Props = {
  question: string;
  questionNumber: number;
  total: number;
  options: Option[];
  selectedOption: number | null;
  onSelect: (index: number) => void;
};

const TINTS = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FFB870"];

const optionVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.25 },
  }),
};

export default function QuestionCard({
  question,
  questionNumber,
  total,
  options,
  selectedOption,
  onSelect,
}: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const num = Number(e.key);
      if (
        Number.isInteger(num) &&
        num >= 1 &&
        num <= options.length
      ) {
        e.preventDefault();
        onSelect(num - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [options.length, onSelect]);

  return (
    <div className="border-[3px] border-ink bg-card p-6 brutal-shadow-lg sm:p-8">
      <div className="flex items-center gap-2">
        <span className="border-[2px] border-ink bg-brand-accent px-3 py-1 text-xs font-black uppercase tracking-wider text-ink">
          Q{questionNumber} / {total}
        </span>
      </div>
      <h2 className="mt-4 text-xl font-black leading-tight tracking-tight text-ink sm:text-2xl">
        {question}
      </h2>
      <div className="mt-6 grid gap-3">
        {options.map((option, i) => {
          const isSelected = selectedOption === i;
          const tint = TINTS[i % TINTS.length];
          return (
            <motion.button
              key={`${questionNumber}-${i}`}
              type="button"
              onClick={() => onSelect(i)}
              custom={i}
              initial="hidden"
              animate="show"
              variants={optionVariants}
              whileTap={{ scale: 0.98 }}
              aria-pressed={isSelected}
              className={`group flex items-center gap-3 border-[3px] border-ink px-4 py-4 text-left text-sm font-bold text-ink transition-all sm:px-5 sm:text-base ${
                isSelected
                  ? "bg-brand-accent brutal-shadow-lg -translate-y-0.5 translate-x-[1px]"
                  : "bg-card brutal-shadow hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg"
              } focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-lg`}
            >
              <span
                aria-hidden
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center border-[2px] border-ink text-xs font-black text-ink"
                style={{
                  backgroundColor: isSelected ? "#fff" : tint,
                }}
              >
                {i + 1}
              </span>
              <span className="flex-1">{option.text}</span>
              <span aria-hidden className="font-black text-ink">
                {isSelected ? "✓" : "→"}
              </span>
            </motion.button>
          );
        })}
      </div>
      <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-widest text-ink-muted">
        키보드 1–{options.length} 키로도 선택할 수 있어요
      </p>
    </div>
  );
}
