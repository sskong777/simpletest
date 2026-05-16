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
  /** Tint color (hex). Used for emoji tile + accent. */
  tint?: string;
  previews: ResultPreview[];
  className?: string;
  style?: React.CSSProperties;
};

const TINTS = ["#FF6B6B", "#4ECDC4", "#FFE66D"];

export default function TestCard({
  href,
  emoji,
  title,
  description,
  questionCount,
  duration,
  tint,
  previews,
  className,
  style,
}: TestCardProps) {
  const fill = tint ?? TINTS[0];
  return (
    <Link
      href={href}
      style={style}
      aria-label={`${title} 테스트 시작하기`}
      className={cn(
        "group block border-[3px] border-ink bg-card p-6 text-ink brutal-shadow-lg",
        "transition-all duration-200 hover:-translate-y-1 hover:translate-x-[2px] hover:brutal-shadow-xl",
        "focus:outline-none focus-visible:translate-x-[2px] focus-visible:-translate-y-1 focus-visible:brutal-shadow-xl",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-20 w-20 items-center justify-center border-[3px] border-ink text-4xl shadow-[4px_4px_0_0_var(--ink)] transition-transform duration-200 group-hover:rotate-[-6deg]"
          style={{ backgroundColor: fill }}
        >
          {emoji}
        </div>
        <span className="border-[2px] border-ink bg-brand-primary px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
          NEW
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black leading-tight tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm font-medium text-ink-muted">{description}</p>

      <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider">
        <span className="border-[2px] border-ink bg-card px-2 py-1 text-ink">
          질문 {questionCount}
        </span>
        <span className="border-[2px] border-ink bg-card px-2 py-1 text-ink">
          약 {duration}
        </span>
      </div>

      <div className="mt-5 border-t-[3px] border-ink pt-4">
        <p className="text-[10px] font-black uppercase tracking-wider text-ink-muted">
          가능한 유형
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {previews.map((p) => (
            <span
              key={p.title}
              className="inline-flex items-center gap-1 border-[2px] border-ink bg-card px-2 py-0.5 text-[11px] font-bold text-ink"
            >
              <span aria-hidden>{p.emoji}</span>
              {p.title}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-base">
          {previews
            .slice(0, 4)
            .map((p) => p.emoji)
            .join(" ")}
        </span>
        <span className="inline-flex items-center gap-1 border-[2px] border-ink bg-brand-accent px-3 py-1 text-xs font-black uppercase tracking-wider text-ink transition-transform group-hover:translate-x-1">
          시작 →
        </span>
      </div>
    </Link>
  );
}
