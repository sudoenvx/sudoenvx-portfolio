import { ImageResponse } from "next/og";

export const runtime = "edge";

const sqmarketFont = fetch(
  new URL("./sqmarket.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await sqmarketFont;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#161616",
          color: "#ffffff",
          padding: "40px 40px",
          fontFamily: "sqmarket, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
  

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "26px",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#9FD356",
                color: "#0f0f0f",
                padding: "8px 16px",
                borderRadius: "999px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              @sudoenvx
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "8px 16px",
                borderRadius: "999px",
                fontSize: "18px",
                // border: "1px solid #2a2a2a",
              }}
            >
              Available for opportunities
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: "60px",
                fontWeight: 700,
                letterSpacing: "-2px",
              }}
            >
              Ali Tarek
            </div>
            <div
              style={{
                fontSize: "34px",
                color: "#9FD356",
                fontWeight: 600,
              }}
            >
              Fullstack Engineer / System Architect
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#b9b9b9",
            fontSize: "20px",
          }}
        >
          <div>Alexandria, Egypt</div>
        </div>
      </div>
    ),
    {
      width: 1000,
      height: 400,
      fonts: [
        {
          name: "sqmarket",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
