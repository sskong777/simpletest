import { ImageResponse } from "next/og";
import { brandGradient, loadOgFonts, ogSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "Three Thousand — 나를 닮은 한 가지를 발견해보세요";
export const size = { width: ogSize.width, height: ogSize.height };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();
  const [c1, c2, c3] = brandGradient;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`,
          fontFamily: "Pretendard",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 22px",
            background: "rgba(255,255,255,0.75)",
            borderRadius: 999,
            fontSize: 26,
            fontWeight: 700,
            color: "#7c3aed",
          }}
        >
          <span>✨</span>
          <span>가볍게 즐기는 심리테스트</span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 96,
            fontWeight: 700,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          나를 닮은 한 가지를
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.1,
            backgroundImage:
              "linear-gradient(90deg, #7c3aed 0%, #db2777 50%, #f43f5e 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          발견해보세요
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginTop: 52,
            fontSize: 80,
          }}
        >
          <span>💻</span>
          <span>☕️</span>
          <span>✈️</span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            fontWeight: 400,
            color: "rgba(15, 23, 42, 0.7)",
          }}
        >
          8개의 짧은 질문, 단 2분
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
