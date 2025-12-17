"use client"

import { useEffect, useState } from "react"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  color: "cyan" | "blue" | "purple" | "pink"
  delay: number
}

interface Line {
  id: number
  x1: number
  y1: number
  x2: number
  y2: number
  delay: number
}

export function NeuralNetworkBg() {
  const [dots, setDots] = useState<Dot[]>([])
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    // Generate random dots
    const colors: Dot["color"][] = ["cyan", "blue", "purple", "pink"]
    const generatedDots: Dot[] = []

    for (let i = 0; i < 50; i++) {
      generatedDots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
      })
    }
    setDots(generatedDots)

    // Generate connecting lines between nearby dots
    const generatedLines: Line[] = []
    for (let i = 0; i < generatedDots.length; i++) {
      for (let j = i + 1; j < generatedDots.length; j++) {
        const dx = generatedDots[i].x - generatedDots[j].x
        const dy = generatedDots[i].y - generatedDots[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Only connect dots that are relatively close
        if (distance < 20 && generatedLines.length < 40) {
          generatedLines.push({
            id: generatedLines.length,
            x1: generatedDots[i].x,
            y1: generatedDots[i].y,
            x2: generatedDots[j].x,
            y2: generatedDots[j].y,
            delay: Math.random() * 2,
          })
        }
      }
    }
    setLines(generatedLines)
  }, [])

  return (
    <div className="neural-network-bg">
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        {lines.map((line) => (
          <line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="1"
            style={{
              animation: `neural-pulse 3s ease-in-out infinite`,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </svg>

      {/* Glowing dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`neural-dot neural-dot-${dot.color}`}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
