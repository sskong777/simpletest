import { ImageResponse } from "next/og";
import { COLOR_INK, loadOgFonts, ogSize, resultTints } from "@/lib/og";
import { musicTest } from "@/lib/tests/music";

export const size = { width: ogSize.width, height: ogSize.height };
export const contentType = "image/png";
export const alt = musicTest.title;

export default async function Image({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const result = musicTest.results[type];
  if (!result) {
    return new Response("Not found", { status: 404 });
  }
  const fonts = await loadOgFonts();
  const bg = resultTints[type] ?? "#FFE66D";

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
          background: bg,
          fontFamily: "Pretendard",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: `3px solid ${COLOR_INK}`,
            background: "#fff",
            padding: "8px 18px",
            boxShadow: `4px 4px 0 0 ${COLOR_INK}`,
            fontSize: 20,
            fontWeight: 700,
            color: COLOR_INK,
          }}
        >
          <span>{musicTest.emoji}</span>
          <span>{musicTest.title}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 32,
            width: 220,
            height: 220,
            background: "#fff",
            border: `4px solid ${COLOR_INK}`,
            boxShadow: `10px 10px 0 0 ${COLOR_INK}`,
            fontSize: 140,
          }}
        >
          {result.emoji}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 84,
            fontWeight: 700,
            color: COLOR_INK,
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          {result.title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 26,
            fontWeight: 400,
            color: COLOR_INK,
            textAlign: "center",
            letterSpacing: 0.5,
          }}
        >
          {result.tagline}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
