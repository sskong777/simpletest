"use client";

import { useEffect, useState } from "react";

const readStored = (): string | null => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
};

const writeStored = (value: "dark" | "light") => {
  try {
    localStorage.setItem("theme", value);
  } catch {}
};

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = readStored();
    const prefersDark =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ? stored === "dark" : prefersDark;
    setIsDark(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    writeStored(isDark ? "dark" : "light");
  }, [isDark, mounted]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((v) => !v)}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      aria-pressed={mounted ? isDark : undefined}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-base shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/70 dark:focus-visible:ring-offset-slate-950"
    >
      <span aria-hidden suppressHydrationWarning>
        {mounted ? (isDark ? "☀️" : "🌙") : "🌙"}
      </span>
    </button>
  );
}
