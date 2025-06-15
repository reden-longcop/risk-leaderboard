// app/api/players/route.ts
import { getPlayers, savePlayers } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const players = await getPlayers()
    return NextResponse.json(players)
  } catch (err) {
    return new NextResponse("Failed to fetch players", { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const players = await req.json()
    await savePlayers(players)
    return new NextResponse("Players saved", { status: 200 })
  } catch (err) {
    return new NextResponse("Failed to save players", { status: 500 })
  }
}
