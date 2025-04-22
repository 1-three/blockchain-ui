"use client"

import { CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

export function BlockchainStatus() {
  const [networkStatus, setNetworkStatus] = useState({
    network: "Ethereum Testnet",
    status: "Connected",
    blockHeight: "18,456,789",
    gasPrice: "25 Gwei",
    isConnected: true,
  })

  // Simulate fetching updated status
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkStatus((prev) => ({
        ...prev,
        blockHeight: (
          Number.parseInt(prev.blockHeight.replace(/,/g, "")) + Math.floor(Math.random() * 10)
        ).toLocaleString(),
        gasPrice: `${20 + Math.floor(Math.random() * 10)} Gwei`,
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="border-[#69b578]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[#5b3a29]">Blockchain Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-2">
          {networkStatus.isConnected ? (
            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
          ) : (
            <AlertCircle className="mr-2 h-4 w-4 text-red-500" />
          )}
          <span className="text-sm">
            {networkStatus.network}: {networkStatus.status}
          </span>
        </div>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span>Block Height:</span>
            <span>{networkStatus.blockHeight}</span>
          </div>
          <div className="flex justify-between">
            <span>Gas Price:</span>
            <span>{networkStatus.gasPrice}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
