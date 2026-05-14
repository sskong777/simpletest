type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
        <span>
          질문 <span className="text-slate-900 dark:text-slate-100">{current}</span> /{" "}
          {total}
        </span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-white/70 ring-1 ring-slate-200/70 dark:bg-slate-800/60 dark:ring-slate-700/70">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 flex w-full justify-between px-0.5">
        {Array.from({ length: total }).map((_, i) => {
          const reached = i + 1 <= current;
          return (
            <span
              key={i}
              aria-hidden
              className={
                reached
                  ? "h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-rose-500 shadow-sm transition-all"
                  : "h-1.5 w-1.5 rounded-full bg-slate-200 transition-all dark:bg-slate-700"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
