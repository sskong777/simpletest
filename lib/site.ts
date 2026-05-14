export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://www.threethousand.site");

export const siteName = "Three Thousand";
export const siteDescription =
  "나를 알아가는 즐거운 시간. 다양한 심리테스트로 내 성향을 발견해보세요.";
