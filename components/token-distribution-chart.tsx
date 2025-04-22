"use client"

import { useEffect, useRef } from "react"

export function TokenDistributionChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Mock data for the chart
    const data = [245, 180, 150, 120, 90]
    const labels = ["You", "User A", "User B", "User C", "User D"]
    const colors = ["#69b578", "#4c9a9a", "#5b3a29", "#dcd2c6", "#f1f586"]

    // Set canvas dimensions
    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Calculate total for percentages
    const total = data.reduce((sum, value) => sum + value, 0)

    // Draw the pie chart
    let startAngle = 0

    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (2 * Math.PI * data[i]) / total

      ctx.fillStyle = colors[i]
      ctx.beginPath()
      ctx.moveTo(canvas.width / 2, canvas.height / 2)
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) / 2 - 10,
        startAngle,
        startAngle + sliceAngle,
      )
      ctx.closePath()
      ctx.fill()

      startAngle += sliceAngle
    }

    // Draw center circle (donut chart)
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 4 - 10, 0, 2 * Math.PI)
    ctx.fill()

    // Display total tokens in center
    ctx.fillStyle = "#5b3a29"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${total}`, canvas.width / 2, canvas.height / 2 - 10)
    ctx.font = "12px sans-serif"
    ctx.fillText("Total Tokens", canvas.width / 2, canvas.height / 2 + 10)

    // Create legend
    const legendY = canvas.height + 20
    const legendWidth = canvas.width / data.length

    for (let i = 0; i < data.length; i++) {
      const x = i * legendWidth + legendWidth / 2 - 50
      const percentage = Math.round((data[i] / total) * 100)

      // Color box
      ctx.fillStyle = colors[i]
      ctx.fillRect(x, legendY, 10, 10)

      // Label and percentage
      ctx.fillStyle = "#5b3a29"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "left"
      ctx.fillText(`${labels[i]}: ${percentage}%`, x + 15, legendY + 8)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} height={200} className="w-full" />
      <div className="mt-8 w-full">
        <h4 className="text-sm font-medium mb-2">Top Token Holders</h4>
        <div className="space-y-2">
          {[
            { user: "You", tokens: 245, percentage: 31 },
            { user: "User A", tokens: 180, percentage: 23 },
            { user: "User B", tokens: 150, percentage: 19 },
            { user: "User C", tokens: 120, percentage: 15 },
            { user: "User D", tokens: 90, percentage: 12 },
          ].map((holder, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm">{holder.user}</span>
              <div className="flex items-center">
                <span className="text-sm mr-2">{holder.tokens} ATT</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#69b578]" style={{ width: `${holder.percentage}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
