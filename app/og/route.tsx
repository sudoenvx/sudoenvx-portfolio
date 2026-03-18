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
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#262626",
          color: "#ffffff",
          padding: "90px",
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
            gap: "18px",
            maxWidth: "900px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "54px",
                height: "4px",
                borderRadius: "999px",
                backgroundColor: "#9FD356",
              }}
            />
            <div
              style={{
                fontSize: "22px",
                color: "#C8D0C3",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              @sudoenvx
            </div>
          </div>

          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "-2.5px",
              lineHeight: "1.05",
            }}
          >
            Ali Tarek
          </div>

          <div
            style={{
              fontSize: "34px",
              color: "#9FD356",
              fontWeight: 600,
              lineHeight: "1.2",
            }}
          >
            Fullstack Engineer · System Architect
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#B6BCC7",
            }}
          >
            Alexandria, Egypt
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
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
