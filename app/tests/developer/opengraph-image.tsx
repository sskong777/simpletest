import { ImageResponse } from "next/og";
import { loadOgFonts, ogSize } from "@/lib/og";
import { developerTest } from "@/lib/tests/developer";

export const runtime = "edge";
export const alt = developerTest.title;
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
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #c4b5fd 0%, #f0abfc 50%, #fda4af 100%)",
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
            fontSize: 24,
            fontWeight: 700,
            color: "#7c3aed",
          }}
        >
          <span>✨</span>
          <span>마음 테스트</span>
        </div>
        <div
          style={{
            marginTop: 36,
            width: 200,
            height: 200,
            background: "#fff",
            borderRadius: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 120,
            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
          }}
        >
          {developerTest.emoji}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 88,
            fontWeight: 700,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {developerTest.title}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            fontWeight: 400,
            color: "rgba(15, 23, 42, 0.7)",
            textAlign: "center",
          }}
        >
          {developerTest.description}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
