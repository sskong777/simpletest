import { ImageResponse } from "next/og";
import { loadOgFonts, ogSize, resultGradients } from "@/lib/og";
import { travelTest } from "@/lib/tests/travel";

export const size = { width: ogSize.width, height: ogSize.height };
export const contentType = "image/png";
export const alt = travelTest.title;

export default async function Image({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const result = travelTest.results[type];
  if (!result) {
    return new Response("Not found", { status: 404 });
  }
  const fonts = await loadOgFonts();
  const [c1, c2, c3] = resultGradients[type] ?? ["#bae6fd", "#a7f3d0", "#fef3c7"];

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
            gap: 10,
            padding: "8px 20px",
            background: "rgba(255,255,255,0.8)",
            borderRadius: 999,
            fontSize: 22,
            fontWeight: 700,
            color: "#1f2937",
          }}
        >
          <span>{travelTest.emoji}</span>
          <span>{travelTest.title}</span>
        </div>
        <div
          style={{
            marginTop: 32,
            width: 220,
            height: 220,
            background: "#fff",
            borderRadius: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 140,
            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
          }}
        >
          {result.emoji}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 84,
            fontWeight: 700,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          {result.title}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 30,
            fontWeight: 400,
            color: "rgba(15, 23, 42, 0.75)",
            textAlign: "center",
          }}
        >
          {result.tagline}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
