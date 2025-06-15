// lib/db.ts
import { createClient } from "@libsql/client"

export interface Player {
  id: string
  name: string
  wins: number
  color: string
}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

const db = client

async function ensureTableExists() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS players (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      wins INTEGER NOT NULL,
      color TEXT NOT NULL
    );
  `)
}

export async function getPlayers(): Promise<Player[]> {
  await ensureTableExists()
  const result = await db.execute("SELECT * FROM players")

  // Transform each row to match Player shape
  const players: Player[] = result.rows.map(row => ({
    id: row.id as string,
    name: row.name as string,
    wins: Number(row.wins),
    color: row.color as string,
  }))

  return players
}

export async function savePlayers(players: Player[]): Promise<void> {
  await ensureTableExists()

  for (const player of players) {
    await db.execute({
      sql: `
        INSERT INTO players (id, name, wins, color)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          name = excluded.name,
          wins = excluded.wins,
          color = excluded.color
      `,
      args: [player.id, player.name, player.wins, player.color],
    })
  }
}