"use client"

import { useMemo } from "react"

export default function QortexVortex() {
  const W = 400
  const H = 400

  const cx = 200
  const cy = 280

  const lines = useMemo(() => {
    const res: Array<{ path: string; opacity: number }> = []

    // Helper function to round to fixed precision (prevents hydration mismatches)
    const round = (num: number, decimals: number = 2) => {
      return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals)
    }

    // Number of lines
    const lineCount = 45

    for (let i = 0; i < lineCount; i++) {
      // Spread lines from -170° to -10° (upper hemisphere fan)
      const startAngle = -170 + (i / (lineCount - 1)) * 160
      const angleRad = (startAngle * Math.PI) / 180

      // Line length varies - longer in the middle, shorter at edges
      const midIndex = lineCount / 2
      const distFromMid = Math.abs(i - midIndex) / midIndex
      const baseLength = 180 - distFromMid * 80

      // Create curved path using quadratic bezier
      const endX = round(cx + Math.cos(angleRad) * baseLength)
      const endY = round(cy + Math.sin(angleRad) * baseLength)

      // Control point for curve - adds the flowing curve effect
      const curveFactor = ((i - midIndex) / midIndex) * 40
      const ctrlAngle = angleRad + (curveFactor * Math.PI) / 180
      const ctrlLength = baseLength * 0.6
      const ctrlX = round(cx + Math.cos(ctrlAngle) * ctrlLength)
      const ctrlY = round(cy + Math.sin(ctrlAngle) * ctrlLength)

      const path = `M ${cx} ${cy} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`

      // Opacity - slightly lower at the edges (rounded to prevent precision issues)
      const opacity = round(0.7 + (1 - distFromMid) * 0.3, 2)

      res.push({ path, opacity })
    }

    return res
  }, [])

  return (
    <div className="w-full aspect-square max-w-md mx-auto">
      <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} role="img">
        {/* Central white circle */}
        <circle cx={cx} cy={cy} r={18} fill="#ffffff" />

        {/* Radiating curved lines */}
        <g>
          {lines.map((line, idx) => (
            <path
              key={idx}
              d={line.path}
              stroke="#ffffff"
              strokeWidth={1.2}
              strokeOpacity={line.opacity}
              fill="none"
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
