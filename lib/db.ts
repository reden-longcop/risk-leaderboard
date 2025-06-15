import { promises as fs } from "fs"
import path from "path"

export interface Player {
  id: string
  name: string
  wins: number
  color: string
}

const DB_PATH = path.join(process.cwd(), "data", "leaderboard.json")

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(DB_PATH)
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Initialize database with default data if it doesn't exist
async function initializeDB() {
  await ensureDataDir()

  try {
    await fs.access(DB_PATH)
  } catch {
    const defaultPlayers: Player[] = [
      { id: "1", name: "Napoleon", wins: 15, color: "#ef4444" },
      { id: "2", name: "Caesar", wins: 12, color: "#3b82f6" },
      { id: "3", name: "Alexander", wins: 10, color: "#22c55e" },
      { id: "4", name: "Hannibal", wins: 8, color: "#8b5cf6" },
    ]
    await fs.writeFile(DB_PATH, JSON.stringify(defaultPlayers, null, 2))
  }
}

export async function getPlayers(): Promise<Player[]> {
  await initializeDB()

  try {
    const data = await fs.readFile(DB_PATH, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading players:", error)
    return []
  }
}

export async function savePlayers(players: Player[]): Promise<void> {
  await ensureDataDir()

  try {
    await fs.writeFile(DB_PATH, JSON.stringify(players, null, 2))
  } catch (error) {
    console.error("Error saving players:", error)
    throw new Error("Failed to save players")
  }
}
