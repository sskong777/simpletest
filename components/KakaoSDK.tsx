"use client";

import Script from "next/script";
import {
  KAKAO_SDK_INTEGRITY,
  KAKAO_SDK_SRC,
  initKakao,
  isKakaoEnabled,
} from "@/lib/kakao";

export default function KakaoSDK() {
  if (!isKakaoEnabled) return null;
  return (
    <Script
      src={KAKAO_SDK_SRC}
      integrity={KAKAO_SDK_INTEGRITY}
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => initKakao()}
    />
  );
}
