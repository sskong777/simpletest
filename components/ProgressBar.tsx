type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-ink-muted">
        <span>
          질문{" "}
          <span className="text-ink">{current}</span> / {total}
        </span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="relative mt-2 h-3 w-full border-[3px] border-ink bg-card">
        <div
          className="h-full bg-brand-primary transition-[width] duration-300 ease-out"
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
                  ? "h-2 w-2 border-2 border-ink bg-brand-accent"
                  : "h-2 w-2 border-2 border-ink bg-card"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
