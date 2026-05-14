import Link from "next/link";
import { cn } from "@/lib/utils";

export type ResultPreview = {
  emoji: string;
  title: string;
};

export type TestCardProps = {
  href: string;
  emoji: string;
  title: string;
  description: string;
  questionCount: number;
  duration: string;
  gradient: string;
  previews: ResultPreview[];
  className?: string;
  style?: React.CSSProperties;
};

export default function TestCard({
  href,
  emoji,
  title,
  description,
  questionCount,
  duration,
  gradient,
  previews,
  className,
  style,
}: TestCardProps) {
  return (
    <Link
      href={href}
      style={style}
      aria-label={`${title} 테스트 시작하기`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-200/40",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2",
        "dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-violet-950/30 dark:hover:shadow-violet-900/40 dark:focus-visible:ring-offset-slate-950",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute -top-12 -right-12 h-44 w-44 rounded-full bg-gradient-to-br opacity-70 blur-2xl transition-all duration-500 group-hover:opacity-90 group-hover:scale-110",
          gradient,
        )}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={cn(
            "flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-md ring-1 ring-slate-100 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 dark:bg-slate-800 dark:ring-slate-700",
          )}
        >
          {emoji}
        </div>
        <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700 ring-1 ring-violet-100 dark:bg-slate-800 dark:text-violet-300 dark:ring-violet-900/50">
          NEW
        </span>
      </div>

      <h3 className="relative mt-6 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>

      <div className="relative mt-5 flex items-center gap-2 text-xs font-medium">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          질문 {questionCount}개
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          약 {duration}
        </span>
      </div>

      <div className="relative mt-5 border-t border-slate-200/70 pt-4 dark:border-slate-800">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          가능한 유형
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {previews.map((p) => (
            <span
              key={p.title}
              className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-50 to-rose-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-violet-100/60 transition-transform group-hover:scale-105 dark:from-violet-950/60 dark:to-rose-950/60 dark:text-slate-200 dark:ring-violet-900/40"
            >
              <span aria-hidden>{p.emoji}</span>
              {p.title}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-violet-700 transition-transform duration-300 group-hover:translate-x-1 dark:text-violet-300">
        시작하기
        <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
