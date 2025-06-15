import { type NextRequest, NextResponse } from "next/server"
import { getPlayers, savePlayers, type Player } from "@/lib/db"

export async function GET() {
  try {
    const players = await getPlayers()
    return NextResponse.json(players)
  } catch (error) {
    console.error("Error fetching players:", error)
    return NextResponse.json({ error: "Failed to fetch players" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const players: Player[] = await request.json()

    // Basic validation
    if (!Array.isArray(players)) {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 })
    }

    // Validate each player object
    for (const player of players) {
      if (!player.id || !player.name || typeof player.wins !== "number" || !player.color) {
        return NextResponse.json({ error: "Invalid player data" }, { status: 400 })
      }
    }

    await savePlayers(players)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving players:", error)
    return NextResponse.json({ error: "Failed to save players" }, { status: 500 })
  }
}
