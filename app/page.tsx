// app/page.tsx
export const metadata = {
  title: "Risk Leaderboard",
  description: "Track your Risk games with style",
  openGraph: {
    title: "Risk Leaderboard",
    description: "Track your Risk games with style",
    url: "https://risk-leaderboard.vercel.app",
    siteName: "Risk Leaderboard",
    images: [
      {
        url: "https://risk-leaderboard.vercel.app/api/og",
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
// ... rest of your code

"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus, Edit, Sword, Crown, Save, RefreshCw } from "lucide-react"

interface Player {
  id: string
  name: string
  wins: number
  color: string
}

interface Animation {
  id: string
  type: "sword" | "laugh" | "cry" | "defeated"
  playerId: string
  x: number
  y: number
}

interface PositionChange {
  playerId: string
  from: number
  to: number
  direction: "up" | "down" | "same"
}

const COLORS = [
  "#ef4444", // Red
  "#f97316", // Orange
  "#eab308", // Yellow
  "#22c55e", // Green
  "#06b6d4", // Cyan
  "#3b82f6", // Blue
  "#8b5cf6", // Purple
  "#ec4899", // Pink
  "#f59e0b", // Amber
  "#10b981", // Emerald
  "#6366f1", // Indigo
  "#d946ef", // Fuchsia
]

export default function RiskLeaderboard() {
  const [players, setPlayers] = useState<Player[]>([])
  const [animations, setAnimations] = useState<Animation[]>([])
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null)
  const [newPlayerName, setNewPlayerName] = useState("")
  const [newPlayerColor, setNewPlayerColor] = useState(COLORS[0])
  const [isAddingPlayer, setIsAddingPlayer] = useState(false)
  const [previousRankings, setPreviousRankings] = useState<string[]>([])
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [isEditingPlayer, setIsEditingPlayer] = useState(false)
  const [positionChanges, setPositionChanges] = useState<PositionChange[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  const audioContextRef = useRef<AudioContext | null>(null)

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
  }, [])

  // Load players from backend on component mount
  useEffect(() => {
    loadPlayers()
  }, [])

  const loadPlayers = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/players")
      if (response.ok) {
        const playersData = await response.json()
        setPlayers(playersData)
      } else {
        console.error("Failed to load players")
      }
    } catch (error) {
      console.error("Error loading players:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Save players to backend
  const savePlayers = async (playersToSave: Player[]) => {
    try {
      setSaveStatus("saving")
      const response = await fetch("/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playersToSave),
      })

      if (response.ok) {
        setSaveStatus("saved")
        setTimeout(() => setSaveStatus("idle"), 2000)
      } else {
        setSaveStatus("error")
        setTimeout(() => setSaveStatus("idle"), 3000)
      }
    } catch (error) {
      console.error("Error saving players:", error)
      setSaveStatus("error")
      setTimeout(() => setSaveStatus("idle"), 3000)
    }
  }

  // Auto-save players whenever they change (with debounce)
  useEffect(() => {
    if (players.length > 0 && !isLoading) {
      const timeoutId = setTimeout(() => {
        savePlayers(players)
      }, 1000) // Debounce for 1 second

      return () => clearTimeout(timeoutId)
    }
  }, [players, isLoading])

  // Play sound effect
  const playSound = (frequency: number, duration: number, type: "sine" | "square" = "sine") => {
    if (!audioContextRef.current) return

    const oscillator = audioContextRef.current.createOscillator()
    const gainNode = audioContextRef.current.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContextRef.current.destination)

    oscillator.frequency.value = frequency
    oscillator.type = type

    gainNode.gain.setValueAtTime(0.3, audioContextRef.current.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration)

    oscillator.start(audioContextRef.current.currentTime)
    oscillator.stop(audioContextRef.current.currentTime + duration)
  }

  // Sort players by win rate and wins
  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => b.wins - a.wins)
  }, [players])


  // Check for ranking changes and trigger animations
  useEffect(() => {
    const currentRankings = sortedPlayers.map((p) => p.id)

    if (previousRankings.length > 0 && JSON.stringify(previousRankings) !== JSON.stringify(currentRankings)) {
      // Skip animations if a new player was just added (different array lengths)
      if (currentRankings.length !== previousRankings.length) {
        setPreviousRankings(currentRankings)
        return
      }

      // Track ALL position changes
      const allPositionChanges: PositionChange[] = []
      let hasPositionChanges = false

      currentRankings.forEach((playerId, newIndex) => {
        const oldIndex = previousRankings.indexOf(playerId)
        if (oldIndex !== -1) {
          if (newIndex !== oldIndex) {
            hasPositionChanges = true
            allPositionChanges.push({
              playerId,
              from: oldIndex,
              to: newIndex,
              direction: newIndex < oldIndex ? "up" : "down",
            })
          }
        }
      })

      if (hasPositionChanges) {
        setIsAnimating(true)
        setPositionChanges(allPositionChanges)

        // Handle animations and sounds for each player
        allPositionChanges.forEach(({ playerId, direction, from, to }) => {
          if (direction === "up") {
            // Player moving up gets positive animations
            if (to === 0 && from > 0) {
              // New champion gets sword
              triggerAnimation("sword", playerId)
              playSound(1000, 0.5, "square")
            } else {
              // Player who moved up gets laugh emoji
              triggerAnimation("laugh", playerId)
              playSound(800, 0.3)
            }
          } else if (direction === "down") {
            // Player moving down gets negative animations
            if (from === 0) {
              // Former champion gets defeated emoji
              triggerAnimation("defeated", playerId)
            } else {
              // Other players get cry emoji
              triggerAnimation("cry", playerId)
            }
          }
        })

        // Play general position change sound
        playSound(300, 0.4)

        // Clear animations after they complete
        setTimeout(() => {
          setIsAnimating(false)
          setPositionChanges([])
        }, 1000)
      }

      // Special case: if top player stays at top and just won again (no position changes)
      if (!hasPositionChanges) {
        const currentTop = currentRankings[0]
        const previousTop = previousRankings[0]

        if (currentTop === previousTop && currentTop) {
          // Check if the top player's score actually increased
          const topPlayer = sortedPlayers.find((p) => p.id === currentTop)
          if (topPlayer) {
            setIsAnimating(true)
            setPositionChanges([
              {
                playerId: currentTop,
                from: 0,
                to: 0,
                direction: "same",
              },
            ])

            triggerAnimation("laugh", currentTop)
            playSound(800, 0.3)

            setTimeout(() => {
              setIsAnimating(false)
              setPositionChanges([])
            }, 1000)
          }
        }
      }

      setPreviousRankings(currentRankings)
    } else if (previousRankings.length === 0) {
      setPreviousRankings(currentRankings)
    }
  }, [sortedPlayers])

  // Move triggerAnimation outside of useEffect and use useCallback
  const triggerAnimation = useCallback((type: "sword" | "laugh" | "cry" | "defeated", playerId: string) => {
    const animationId = Math.random().toString(36).substr(2, 9)

    const animation: Animation = {
      id: animationId,
      type,
      playerId,
      x: Math.random() * 200 - 100,
      y: Math.random() * 100 - 50,
    }

    setAnimations((prev) => [...prev, animation])

    // Remove animation after duration
    setTimeout(() => {
      setAnimations((prev) => prev.filter((a) => a.id !== animationId))
    }, 2000)
  }, [])

  const addScore = (playerId: string) => {
    setPlayers((prev) => prev.map((player) => (player.id === playerId ? { ...player, wins: player.wins + 1 } : player)))
  }

  const updatePlayer = (updatedPlayer: Player) => {
    setPlayers((prev) => prev.map((player) => (player.id === updatedPlayer.id ? updatedPlayer : player)))
    setEditingPlayer(null)
    setIsEditingPlayer(false)
  }

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      const newPlayer: Player = {
        id: Math.random().toString(36).substr(2, 9),
        name: newPlayerName.trim(),
        wins: 0,
        color: newPlayerColor,
      }
      setPlayers((prev) => [...prev, newPlayer])
      setNewPlayerName("")
      setIsAddingPlayer(false)
    }
  }

  const handleManualSave = () => {
    savePlayers(players)
  }

  const handleRefresh = () => {
    loadPlayers()
  }

  // Get player's current animation state
  const getPlayerAnimationState = (playerId: string) => {
    const change = positionChanges.find((c) => c.playerId === playerId)
    if (!change) return { isAnimating: false, direction: "same", classes: "" }

    let classes = "position-change"

    if (change.direction === "up") {
      classes += " victory-animation moving-up"
    } else if (change.direction === "down") {
      classes += " defeat-animation moving-down"
    } else if (change.direction === "same") {
      classes += " victory-animation"
    }

    return {
      isAnimating: true,
      direction: change.direction,
      classes,
      change,
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-white mx-auto mb-4" />
          <p className="text-white text-lg">Loading leaderboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Risk Board Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/risk-board-new.jpg')",
        }}
      />

      {/* Neutral Overlays for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/70" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Subtle Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3" />

      {/* Main Content */}
      <div className="relative z-10 p-2 sm:p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-8 p-3 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-2 sm:gap-3 drop-shadow-2xl">
              <Sword className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">RISK LEADERBOARD</span>
              <Sword className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
            </h1>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg drop-shadow-lg">
              Conquer the world, claim your throne
            </p>

            {/* Save Status Indicator */}
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2">
              {saveStatus === "saving" && (
                <div className="flex items-center gap-2 text-yellow-400">
                  <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                  <span className="text-xs sm:text-sm">Saving...</span>
                </div>
              )}
              {saveStatus === "saved" && (
                <div className="flex items-center gap-2 text-green-400">
                  <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Saved!</span>
                </div>
              )}
              {saveStatus === "error" && (
                <div className="flex items-center gap-2 text-red-400">
                  <span className="text-xs sm:text-sm">Save failed</span>
                </div>
              )}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 px-2">
            <Dialog open={isAddingPlayer} onOpenChange={setIsAddingPlayer}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl border-2 border-blue-500 text-sm sm:text-base">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Add Warrior
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900/95 text-white border-slate-600 backdrop-blur-md mx-2 sm:mx-0 max-w-sm sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-white text-lg sm:text-xl">Add New Warrior</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-300 text-sm sm:text-base">
                      Warrior Name
                    </Label>
                    <Input
                      id="name"
                      value={newPlayerName}
                      onChange={(e) => setNewPlayerName(e.target.value)}
                      className="bg-slate-800/70 border-slate-600 text-white placeholder:text-slate-400 text-sm sm:text-base"
                      placeholder="Enter warrior name..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="color" className="text-slate-300 text-sm sm:text-base">
                      Banner Color
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {COLORS.map((color) => (
                        <button
                          key={color}
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 ${newPlayerColor === color ? "border-white ring-2 ring-blue-400" : "border-slate-500"}`}
                          style={{ backgroundColor: color }}
                          onClick={() => setNewPlayerColor(color)}
                        />
                      ))}
                    </div>
                  </div>
                  <Button onClick={addPlayer} className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                    Add Warrior
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              onClick={handleManualSave}
              disabled={saveStatus === "saving"}
              className="bg-green-600 hover:bg-green-700 text-white shadow-2xl border-2 border-green-500 text-sm sm:text-base"
            >
              {saveStatus === "saving" ? (
                <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              )}
              Save Now
            </Button>

            <Button
              onClick={handleRefresh}
              className="bg-slate-600 hover:bg-slate-700 text-white shadow-2xl border-2 border-slate-500 text-sm sm:text-base"
            >
              <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Refresh
            </Button>
          </div>

          {/* Leaderboard */}
          <div className="space-y-2 sm:space-y-4">
            {sortedPlayers.map((player, index) => {
              const animationState = getPlayerAnimationState(player.id)

              return (
                <Card
                  key={player.id}
                  className={`relative overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl backdrop-blur-md border-2 ${animationState.classes}`}
                  style={{
                    backgroundColor:
                      animationState.isAnimating && animationState.direction === "up"
                        ? player.color
                        : `rgba(30, 41, 59, 0.85)`,
                    borderColor: player.color,
                    boxShadow:
                      animationState.isAnimating && animationState.direction === "up"
                        ? `0 0 30px ${player.color}80`
                        : animationState.isAnimating && animationState.direction === "down"
                          ? `0 0 10px rgba(0, 0, 0, 0.8)`
                          : `0 0 20px ${player.color}40`,
                  }}
                >
                  <CardContent className="p-3 sm:p-6">
                    {/* Mobile Layout (< 640px) */}
                    <div className="flex items-center justify-between gap-3 sm:hidden">
                      {/* Left: Rank and Crown */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-slate-400"
                          style={{ backgroundColor: player.color }}
                        >
                          {index + 1}
                        </div>
                        {index === 0 && (
                          <Crown className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-pulse drop-shadow-lg" />
                        )}
                      </div>

                      {/* Center: Name and Stats */}
                      <div className="flex-1 text-center px-2">
                        <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg truncate">{player.name}</h3>
                        <div className="inline-flex items-center justify-center bg-slate-800/60 rounded-lg px-3 py-1 border border-slate-600">
                          <div className="text-xl font-bold text-green-400 drop-shadow-lg mr-2">{player.wins}</div>
                          <div className="text-xs text-slate-300 drop-shadow">VICTORIES</div>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex flex-col gap-1 flex-shrink-0">
                        <Button
                          onClick={() => addScore(player.id)}
                          className="bg-green-600 hover:bg-green-700 shadow-lg border border-green-500 text-xs px-2 py-1"
                        >
                          +
                        </Button>
                        <Dialog open={isEditingPlayer} onOpenChange={setIsEditingPlayer}>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="border-slate-600 text-slate-300 hover:bg-slate-700/50 shadow-lg bg-slate-800/50 w-8 h-8"
                              onClick={() => {
                                setEditingPlayer(player)
                                setIsEditingPlayer(true)
                              }}
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-slate-900/95 text-white border-slate-600 backdrop-blur-md mx-2 max-w-sm">
                            <DialogHeader>
                              <DialogTitle className="text-lg">Edit Warrior</DialogTitle>
                            </DialogHeader>
                            {editingPlayer && (
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="edit-name" className="text-slate-300 text-sm">
                                    Warrior Name
                                  </Label>
                                  <Input
                                    id="edit-name"
                                    value={editingPlayer.name}
                                    onChange={(e) => setEditingPlayer({ ...editingPlayer, name: e.target.value })}
                                    className="bg-slate-800/70 border-slate-600 text-white text-sm"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-wins" className="text-slate-300 text-sm">
                                    Victories
                                  </Label>
                                  <Input
                                    id="edit-wins"
                                    type="number"
                                    value={editingPlayer.wins}
                                    onChange={(e) =>
                                      setEditingPlayer({ ...editingPlayer, wins: Number.parseInt(e.target.value) || 0 })
                                    }
                                    className="bg-slate-800/70 border-slate-600 text-white text-sm"
                                  />
                                </div>
                                <div>
                                  <Label className="text-slate-300 text-sm">Banner Color</Label>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {COLORS.map((color) => (
                                      <button
                                        key={color}
                                        className={`w-6 h-6 rounded-full border-2 ${editingPlayer.color === color ? "border-white ring-2 ring-blue-400" : "border-slate-500"}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setEditingPlayer({ ...editingPlayer, color })}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <Button
                                  onClick={() => updatePlayer(editingPlayer)}
                                  className="w-full bg-blue-600 hover:bg-blue-700 text-sm"
                                >
                                  Update Warrior
                                </Button>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    {/* Desktop Layout (>= 640px) */}
                    <div className="hidden sm:flex items-center justify-between">
                      {/* Rank and Crown */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-slate-400"
                            style={{ backgroundColor: player.color }}
                          >
                            {index + 1}
                          </div>
                          {index === 0 && (
                            <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse drop-shadow-lg" />
                          )}
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{player.name}</h3>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-400 drop-shadow-lg">{player.wins}</div>
                          <div className="text-base text-slate-300 drop-shadow">VICTORIES</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => addScore(player.id)}
                          className="bg-green-600 hover:bg-green-700 shadow-lg border border-green-500"
                        >
                          +Victory
                        </Button>
                        <Dialog open={isEditingPlayer} onOpenChange={setIsEditingPlayer}>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="border-slate-600 text-slate-300 hover:bg-slate-700/50 shadow-lg bg-slate-800/50"
                              onClick={() => {
                                setEditingPlayer(player)
                                setIsEditingPlayer(true)
                              }}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-slate-900/95 text-white border-slate-600 backdrop-blur-md">
                            <DialogHeader>
                              <DialogTitle>Edit Warrior</DialogTitle>
                            </DialogHeader>
                            {editingPlayer && (
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="edit-name" className="text-slate-300">
                                    Warrior Name
                                  </Label>
                                  <Input
                                    id="edit-name"
                                    value={editingPlayer.name}
                                    onChange={(e) => setEditingPlayer({ ...editingPlayer, name: e.target.value })}
                                    className="bg-slate-800/70 border-slate-600 text-white"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-wins" className="text-slate-300">
                                    Victories
                                  </Label>
                                  <Input
                                    id="edit-wins"
                                    type="number"
                                    value={editingPlayer.wins}
                                    onChange={(e) =>
                                      setEditingPlayer({ ...editingPlayer, wins: Number.parseInt(e.target.value) || 0 })
                                    }
                                    className="bg-slate-800/70 border-slate-600 text-white"
                                  />
                                </div>
                                <div>
                                  <Label className="text-slate-300">Banner Color</Label>
                                  <div className="flex gap-2 mt-2">
                                    {COLORS.map((color) => (
                                      <button
                                        key={color}
                                        className={`w-8 h-8 rounded-full border-2 ${editingPlayer.color === color ? "border-white ring-2 ring-blue-400" : "border-slate-500"}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setEditingPlayer({ ...editingPlayer, color })}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <Button
                                  onClick={() => updatePlayer(editingPlayer)}
                                  className="w-full bg-blue-600 hover:bg-blue-700"
                                >
                                  Update Warrior
                                </Button>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    {/* Animations */}
                    {animations
                      .filter((anim) => anim.playerId === player.id)
                      .map((anim) => (
                        <div
                          key={anim.id}
                          className="absolute pointer-events-none animate-bounce"
                          style={{
                            left: `50%`,
                            top: `50%`,
                            transform: `translate(${anim.x}px, ${anim.y}px)`,
                            zIndex: 10,
                          }}
                        >
                          {anim.type === "sword" && (
                            <div className="relative">
                              {/* Sword Clash Animation */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                {/* Left sword - slides in from left */}
                                <div
                                  className="absolute text-2xl sm:text-4xl"
                                  style={{
                                    animation: "swordClashLeft 1s ease-out forwards",
                                  }}
                                >
                                  🗡️
                                </div>
                                {/* Right sword - slides in from right */}
                                <div
                                  className="absolute text-2xl sm:text-4xl"
                                  style={{
                                    animation: "swordClashRight 1s ease-out forwards",
                                  }}
                                >
                                  🗡️
                                </div>
                                {/* Spark effect at clash point */}
                                <div
                                  className="absolute text-xl sm:text-3xl"
                                  style={{
                                    animation: "sparkEffect 0.5s ease-out 0.5s forwards",
                                    opacity: 0,
                                  }}
                                >
                                  ✨💥✨
                                </div>
                              </div>

                              {/* Final crossed swords - appears after clash */}
                              <div
                                className="text-4xl sm:text-6xl relative z-10"
                                style={{
                                  animation: "crossedSwords 2s ease-in-out 1s forwards",
                                  opacity: 0,
                                }}
                              >
                                ⚔️
                              </div>
                            </div>
                          )}
                          {anim.type === "laugh" && (
                            <div className="text-4xl sm:text-6xl animate-pulse drop-shadow-lg">😂</div>
                          )}
                          {anim.type === "cry" && (
                            <div className="text-4xl sm:text-6xl animate-pulse drop-shadow-lg">😢</div>
                          )}
                          {anim.type === "defeated" && (
                            <div className="text-4xl sm:text-6xl animate-pulse drop-shadow-lg">😵</div>
                          )}
                        </div>
                      ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Footer */}
          <div className="text-center mt-4 sm:mt-8 p-2 sm:p-4">
            <p className="text-slate-300 drop-shadow-lg text-sm sm:text-base lg:text-lg">
              May the strongest conqueror rule the world! 🌍👑
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
