// app/api/og/route.tsx
import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#111827", // Tailwind bg-slate-900
          color: "white",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          fontWeight: "bold",
          padding: "2rem",
        }}
      >
        🏆 Risk Leaderboard
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}