import { ImageResponse } from "next/og";
import {
  COLOR_ACCENT,
  COLOR_INK,
  COLOR_PAPER,
  loadOgFonts,
  ogSize,
} from "@/lib/og";

export const runtime = "edge";
export const alt = "Three Thousand — 나를 닮은 한 가지를 발견해보세요";
export const size = { width: ogSize.width, height: ogSize.height };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: COLOR_PAPER,
          fontFamily: "Pretendard",
        }}
      >
        {/* Top yellow strip */}
        <div
          style={{
            width: "100%",
            height: 16,
            background: COLOR_ACCENT,
            display: "flex",
          }}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
          }}
        >
          {/* Brand chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: `3px solid ${COLOR_INK}`,
              background: "#fff",
              padding: "8px 20px",
              boxShadow: `6px 6px 0 0 ${COLOR_INK}`,
              fontSize: 22,
              fontWeight: 700,
              color: COLOR_INK,
              letterSpacing: 2,
            }}
          >
            ★ THREE THOUSAND
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              marginTop: 42,
              fontSize: 88,
              fontWeight: 700,
              color: COLOR_INK,
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            나를 닮은 한 가지를
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              padding: "10px 28px",
              background: COLOR_ACCENT,
              border: `3px solid ${COLOR_INK}`,
              boxShadow: `8px 8px 0 0 ${COLOR_INK}`,
              fontSize: 88,
              fontWeight: 700,
              color: COLOR_INK,
              lineHeight: 1,
            }}
          >
            발견해보세요
          </div>

          {/* Emojis row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginTop: 48,
              fontSize: 56,
            }}
          >
            <span>💻</span>
            <span>☕</span>
            <span>✈️</span>
            <span>🎧</span>
            <span>🍽️</span>
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              fontWeight: 400,
              color: COLOR_INK,
              letterSpacing: 1,
            }}
          >
            8개의 짧은 질문, 단 2분 · 5 테스트 · 20 결과
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
