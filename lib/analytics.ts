declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const isGaEnabled = Boolean(GA_MEASUREMENT_ID);

export function pageview(url: string) {
  if (!isGaEnabled || typeof window === "undefined") return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export type GaEventInput = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  params?: Record<string, unknown>;
};

export function trackEvent({
  action,
  category,
  label,
  value,
  params,
}: GaEventInput) {
  if (!isGaEnabled || typeof window === "undefined") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...params,
  });
}

export const events = {
  testStart: (testId: string) =>
    trackEvent({
      action: "test_start",
      category: "test",
      label: testId,
      params: { test_id: testId },
    }),
  testComplete: (testId: string, resultType: string) =>
    trackEvent({
      action: "test_complete",
      category: "test",
      label: `${testId}:${resultType}`,
      params: { test_id: testId, result_type: resultType },
    }),
  questionAnswer: (testId: string, questionId: number, optionIndex: number) =>
    trackEvent({
      action: "question_answer",
      category: "test",
      label: `${testId}:q${questionId}:opt${optionIndex}`,
      params: { test_id: testId, question_id: questionId, option_index: optionIndex },
    }),
  resultShare: (testId: string, resultType: string, channel: string) =>
    trackEvent({
      action: "result_share",
      category: "share",
      label: `${channel}:${testId}:${resultType}`,
      params: { test_id: testId, result_type: resultType, channel },
    }),
  themeToggle: (next: "dark" | "light") =>
    trackEvent({
      action: "theme_toggle",
      category: "ui",
      label: next,
    }),
};
