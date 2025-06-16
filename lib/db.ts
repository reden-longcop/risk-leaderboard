// lib/db.ts
import { createClient } from "@libsql/client"
import { randomUUID } from "crypto"

export interface Player {
  id: string
  name: string
  wins: number
  color: string
}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

export async function getPlayers(): Promise<Player[]> {
  const result = await client.execute("SELECT * FROM players")

  const players: Player[] = result.rows.map((row) => ({
    id: row.id as string,
    name: row.name as string,
    wins: Number(row.wins),
    color: row.color as string,
  }))

  return players
}

export async function savePlayers(players: Player[]): Promise<void> {
  const tx = await client.transaction("write")

  try {
    // Optional: clear all existing players if replacing
    await tx.execute("DELETE FROM players")

    for (const player of players) {
      await tx.execute({
        sql: "INSERT INTO players (id, name, wins, color) VALUES (?, ?, ?, ?)",
        args: [player.id || randomUUID(), player.name, player.wins, player.color],
      })
    }

    await tx.commit()
  } catch (error) {
    await tx.rollback()
    console.error("Error saving players:", error)
    throw new Error("Failed to save players")
  }
}
