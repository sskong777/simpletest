"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ThemeToggle from "./ThemeToggle";
import { calculateResult, computeScores } from "@/lib/utils";
import type { Test } from "@/lib/tests/types";

type TestRunnerProps = {
  test: Test;
};

export default function TestRunner({ test }: TestRunnerProps) {
  const router = useRouter();
  const total = test.questions.length;
  const [step, setStep] = useState(0);
  const [selectedIndices, setSelectedIndices] = useState<(number | null)[]>(
    () => Array(total).fill(null),
  );
  const [done, setDone] = useState(false);

  const current = test.questions[step];
  const currentSelection = selectedIndices[step];
  const isFirst = step === 0;
  const isLast = step === total - 1;
  const canAdvance = currentSelection !== null;

  const handleSelect = (idx: number) => {
    if (done) return;
    setSelectedIndices((prev) => {
      const next = [...prev];
      next[step] = idx;
      return next;
    });
  };

  const handleNext = () => {
    if (!canAdvance || done) return;
    if (!isLast) {
      setStep(step + 1);
      return;
    }
    setDone(true);
    const scores = computeScores(test, selectedIndices);
    const result = calculateResult(scores);
    router.prefetch(`/tests/${test.id}/result/${result}`);
    setTimeout(() => {
      router.push(`/tests/${test.id}/result/${result}`);
    }, 400);
  };

  const handlePrev = () => {
    if (isFirst || done) return;
    setStep(step - 1);
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-8 sm:py-14">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-slate-500 transition-colors hover:text-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:text-slate-400 dark:hover:text-violet-300 dark:focus-visible:ring-offset-slate-950"
        >
          <span aria-hidden>←</span> 처음으로
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200">
            <span aria-hidden>{test.emoji}</span>
            <span className="hidden sm:inline">{test.title}</span>
          </span>
          <ThemeToggle />
        </div>
      </div>

      <ProgressBar current={step + 1} total={total} />

      <div className="mt-7">
        <AnimatePresence mode="wait">
          {!done && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <QuestionCard
                question={current.text}
                questionNumber={current.id}
                total={total}
                options={current.options}
                selectedOption={currentSelection}
                onSelect={handleSelect}
              />
            </motion.div>
          )}
          {done && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/60 bg-white/80 py-20 text-center shadow-xl backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600 dark:border-violet-900 dark:border-t-violet-300" />
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                결과를 정리하고 있어요…
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!done && (
        <div className="mt-6 flex items-center justify-between gap-3">
          {isFirst ? (
            <span aria-hidden />
          ) : (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:text-violet-200 dark:focus-visible:ring-offset-slate-950"
            >
              <span aria-hidden>←</span> 이전
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            disabled={!canAdvance}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-md dark:from-violet-500 dark:to-fuchsia-500 dark:focus-visible:ring-offset-slate-950"
          >
            {isLast ? "결과 보기 🎉" : "다음"}
            {!isLast && <span aria-hidden>→</span>}
          </button>
        </div>
      )}
    </div>
  );
}
