import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Minotti & Sawyer Associates, Consultants in Executive Search";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/minotti-sawyer-logo2.png"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8F6F2",
          borderTop: "12px solid #A68C5C",
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={`data:image/png;base64,${logo}`} width={600} height={600} />
      </div>
    ),
    size,
  );
}
