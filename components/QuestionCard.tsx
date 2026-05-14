"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Option } from "@/lib/tests/types";

type QuestionCardProps = {
  question: string;
  questionNumber: number;
  total: number;
  options: Option[];
  selectedOption: number | null;
  onSelect: (index: number) => void;
};

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
}: QuestionCardProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const num = Number(e.key);
      if (Number.isInteger(num) && num >= 1 && num <= options.length) {
        e.preventDefault();
        onSelect(num - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [options.length, onSelect]);

  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-6 shadow-xl shadow-violet-200/30 backdrop-blur-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-violet-950/30">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-100 to-rose-100 px-3 py-1 text-xs font-bold text-violet-700 dark:from-violet-950/60 dark:to-rose-950/60 dark:text-violet-200">
          Q{questionNumber} / {total}
        </span>
      </div>
      <h2 className="mt-4 text-xl font-bold leading-8 text-slate-900 sm:text-2xl sm:leading-9 dark:text-slate-50">
        {question}
      </h2>
      <div className="mt-6 grid gap-3">
        {options.map((option, i) => {
          const isSelected = selectedOption === i;
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              custom={i}
              initial="hidden"
              animate="show"
              variants={optionVariants}
              whileHover={isSelected ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-pressed={isSelected}
              className={cn(
                "group flex items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm font-medium shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 sm:px-5 sm:text-base dark:focus-visible:ring-offset-slate-950",
                isSelected
                  ? "border-violet-400 bg-gradient-to-r from-violet-50 to-rose-50 text-slate-900 shadow-md ring-2 ring-violet-300 dark:border-violet-500 dark:from-violet-950/40 dark:to-rose-950/40 dark:text-slate-50 dark:ring-violet-700/70"
                  : "border-slate-200 bg-white text-slate-800 hover:border-violet-300 hover:bg-violet-50/60 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-violet-500 dark:hover:bg-violet-950/40",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors",
                  isSelected
                    ? "bg-violet-600 text-white"
                    : "bg-slate-100 text-slate-500 group-hover:bg-violet-100 group-hover:text-violet-700 dark:bg-slate-700 dark:text-slate-300 dark:group-hover:bg-violet-900/60 dark:group-hover:text-violet-200",
                )}
              >
                {isSelected ? "✓" : i + 1}
              </span>
              <span className="flex-1">{option.text}</span>
            </motion.button>
          );
        })}
      </div>
      <p className="mt-5 text-center text-[11px] text-slate-400 dark:text-slate-500">
        키보드 1–{options.length} 키로도 선택할 수 있어요
      </p>
    </div>
  );
}
