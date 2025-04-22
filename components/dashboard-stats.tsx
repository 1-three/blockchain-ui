"use client"

import { Coins, CalendarCheck, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardStats() {
  return (
    <Card className="border-[#69b578]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[#5b3a29]">Your Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center">
          <CalendarCheck className="mr-2 h-4 w-4 text-[#69b578]" />
          <span className="text-sm">Attendance: 85%</span>
        </div>
        <div className="flex items-center">
          <Coins className="mr-2 h-4 w-4 text-[#69b578]" />
          <span className="text-sm">Tokens: 245 ATT</span>
        </div>
        <div className="flex items-center">
          <Users className="mr-2 h-4 w-4 text-[#69b578]" />
          <span className="text-sm">Rank: Top 10%</span>
        </div>
      </CardContent>
    </Card>
  )
}
