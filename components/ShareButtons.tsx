"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { shareToKakao } from "@/lib/kakao";

type ShareButtonsProps = {
  testId: string;
  resultType: string;
  resultTitle: string;
  testTitle: string;
};

export default function ShareButtons({
  testId,
  resultType,
  resultTitle,
  testTitle,
}: ShareButtonsProps) {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  };

  const buildUrl = () => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/tests/${testId}/result/${resultType}`;
  };

  const shareText = `[${testTitle}] 결과: ${resultTitle}! 나는 어떤 유형일까?`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildUrl());
      showToast("링크를 복사했어요!");
    } catch {
      showToast("복사에 실패했어요");
    }
  };

  const handleTwitter = () => {
    const url = buildUrl();
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText,
    )}&url=${encodeURIComponent(url)}`;
    window.open(intent, "_blank", "noopener,noreferrer");
  };

  const handleKakao = async () => {
    const url = buildUrl();
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const imageUrl = `${origin}/tests/${testId}/result/${resultType}/opengraph-image`;

    // 1) Kakao SDK (official share dialog)
    const fired = shareToKakao({
      objectType: "feed",
      content: {
        title: `${resultTitle} · ${testTitle}`,
        description: shareText,
        imageUrl,
        link: { mobileWebUrl: url, webUrl: url },
      },
      buttons: [
        {
          title: "결과 보러 가기",
          link: { mobileWebUrl: url, webUrl: url },
        },
        {
          title: "나도 해보기",
          link: { mobileWebUrl: origin, webUrl: origin },
        },
      ],
    });
    if (fired) return;

    // 2) Web Share API (mobile native sheet)
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: resultTitle, text: shareText, url });
        return;
      } catch {
        /* user cancelled or unsupported — fall through */
      }
    }

    // 3) Clipboard fallback
    try {
      await navigator.clipboard.writeText(`${shareText}\n${url}`);
      showToast("메시지를 복사했어요. 카톡에 붙여넣어 주세요!");
    } catch {
      showToast("공유 실패. 주소창의 링크를 복사해 주세요");
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={handleKakao}
          className="inline-flex items-center gap-2 rounded-xl bg-yellow-300 px-4 py-2.5 text-sm font-semibold text-yellow-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-yellow-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
        >
          <span aria-hidden>💬</span>
          카카오톡 공유
        </button>
        <button
          type="button"
          onClick={handleTwitter}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
        >
          <span aria-hidden>🐦</span>
          트위터
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-violet-500 dark:focus-visible:ring-offset-slate-950"
        >
          <span aria-hidden>🔗</span>
          링크 복사
        </button>
      </div>

      <div
        aria-live="polite"
        className="pointer-events-none h-6 text-center text-xs font-medium text-slate-600 dark:text-slate-300"
      >
        <AnimatePresence>
          {toast && (
            <motion.span
              key={toast}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-white shadow-md dark:bg-slate-700"
            >
              <span aria-hidden>✅</span>
              {toast}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
