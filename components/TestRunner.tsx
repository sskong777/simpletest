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
          className="inline-flex items-center gap-1 border-[2px] border-ink bg-card px-3 py-1.5 text-xs font-black uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:shadow-[5px_5px_0_0_var(--ink)] focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:shadow-[5px_5px_0_0_var(--ink)]"
        >
          ← 처음으로
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 border-[2px] border-ink bg-brand-accent px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-ink">
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
              className="flex flex-col items-center justify-center gap-3 border-[3px] border-ink bg-card py-20 text-center brutal-shadow-lg"
            >
              <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-ink border-t-brand-primary" />
              <p className="text-sm font-black uppercase tracking-wider text-ink">
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
              className="inline-flex items-center gap-1 border-[3px] border-ink bg-card px-4 py-2 text-sm font-black uppercase tracking-wider text-ink brutal-shadow transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-lg focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-lg"
            >
              ← 이전
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            disabled={!canAdvance}
            className="inline-flex items-center gap-1.5 border-[3px] border-ink bg-brand-primary px-6 py-2.5 text-sm font-black uppercase tracking-wider text-white brutal-shadow-lg transition-all hover:-translate-y-0.5 hover:translate-x-[1px] hover:brutal-shadow-xl focus:outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-[1px] focus-visible:brutal-shadow-xl disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:translate-x-0 disabled:hover:brutal-shadow-lg"
          >
            {isLast ? "결과 보기 🎉" : "다음 →"}
          </button>
        </div>
      )}
    </div>
  );
}
