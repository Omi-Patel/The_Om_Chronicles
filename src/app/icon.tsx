import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          fontWeight: 700,
          background: "#12100e",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f5f2ed",
          borderRadius: "30%",
        }}
      >
        om<span style={{ color: "#fb923c" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
