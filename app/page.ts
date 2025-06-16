// app/page.ts
export const metadata = {
  title: "Risk Leaderboard",
  description: "Track your Risk games with style",
  openGraph: {
    title: "Risk Leaderboard",
    description: "Track your Risk games with style",
    url: "https://risk-leaderboard.vercel.app", // replace with your actual domain
    siteName: "Risk Leaderboard",
    images: [
      {
        url: "https://risk-leaderboard.vercel.app/api/og", // dynamic OG image route
        width: 1200,
        height: 630,
        alt: "Risk Leaderboard Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Leaderboard",
    description: "Track your Risk games with style",
    images: ["https://risk-leaderboard.vercel.app/api/og"],
  },
}