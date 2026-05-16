import { ImageResponse } from "next/og";
import { COLOR_INK, loadOgFonts, ogSize } from "@/lib/og";
import { travelTest } from "@/lib/tests/travel";

export const runtime = "edge";
export const alt = travelTest.title;
export const size = { width: ogSize.width, height: ogSize.height };
export const contentType = "image/png";

const BG = "#FFE66D";

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
          background: BG,
          fontFamily: "Pretendard",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: `3px solid ${COLOR_INK}`,
            background: "#fff",
            padding: "8px 20px",
            boxShadow: `5px 5px 0 0 ${COLOR_INK}`,
            fontSize: 20,
            fontWeight: 700,
            color: COLOR_INK,
            letterSpacing: 2,
          }}
        >
          ★ THREE THOUSAND
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 36,
            width: 200,
            height: 200,
            background: "#fff",
            border: `4px solid ${COLOR_INK}`,
            boxShadow: `10px 10px 0 0 ${COLOR_INK}`,
            fontSize: 120,
          }}
        >
          {travelTest.emoji}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 86,
            fontWeight: 700,
            color: COLOR_INK,
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          {travelTest.title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 26,
            fontWeight: 400,
            color: COLOR_INK,
            textAlign: "center",
            letterSpacing: 0.5,
          }}
        >
          {travelTest.description}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
