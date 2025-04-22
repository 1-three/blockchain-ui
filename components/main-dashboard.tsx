"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentAttendanceTable } from "@/components/recent-attendance-table"
import { TokenDistributionChart } from "@/components/token-distribution-chart"
import { DashboardStats } from "@/components/dashboard-stats"
import { BlockchainStatus } from "@/components/blockchain-status"

export function MainDashboard() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [loading, setLoading] = useState(false)

  const connectWallet = async () => {
    setLoading(true)
    try {
      // Simulating wallet connection for the demo
      setTimeout(() => {
        setIsConnected(true)
        setWalletAddress("0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t")
        setLoading(false)
      }, 1500)
    } catch (error) {
      console.error("Error connecting wallet:", error)
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {!isConnected ? (
        <Card className="border-[#69b578]">
          <CardHeader>
            <CardTitle className="text-[#5b3a29]">Connect Your Wallet</CardTitle>
            <CardDescription>Connect your Ethereum wallet to interact with the attendance system</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button onClick={connectWallet} className="bg-[#69b578] hover:bg-[#4c9a9a] text-white" disabled={loading}>
              {loading ? "Connecting..." : "Connect Wallet"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#69b578]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#5b3a29]">Connected Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-ellipsis overflow-hidden">{walletAddress}</div>
                <div className="mt-2 flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs" onClick={() => setIsConnected(false)}>
                    Disconnect
                  </Button>
                </div>
              </CardContent>
            </Card>

            <DashboardStats />

            <BlockchainStatus />
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="mb-4 bg-[#dcd2c6]">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#69b578] data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="attendance"
                className="data-[state=active]:bg-[#69b578] data-[state=active]:text-white"
              >
                Attendance
              </TabsTrigger>
              <TabsTrigger value="tokens" className="data-[state=active]:bg-[#69b578] data-[state=active]:text-white">
                Tokens
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-[#4c9a9a]">
                  <CardHeader>
                    <CardTitle className="text-[#5b3a29]">Recent Attendance</CardTitle>
                    <CardDescription>Latest attendance records on the blockchain</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentAttendanceTable />
                  </CardContent>
                </Card>
                <Card className="border-[#4c9a9a]">
                  <CardHeader>
                    <CardTitle className="text-[#5b3a29]">Token Distribution</CardTitle>
                    <CardDescription>Token allocation across participants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TokenDistributionChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="attendance">
              <div className="grid grid-cols-1 gap-6">
                <Card className="border-[#4c9a9a]">
                  <CardHeader>
                    <CardTitle className="text-[#5b3a29]">Attendance Management</CardTitle>
                    <CardDescription>Track and record attendance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Current Events</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center p-3 border rounded-md">
                              <span>Blockchain Workshop</span>
                              <Button size="sm" className="bg-[#69b578] hover:bg-[#4c9a9a]">
                                Check In
                              </Button>
                            </div>
                            <div className="flex justify-between items-center p-3 border rounded-md">
                              <span>Smart Contract Seminar</span>
                              <Button size="sm" className="bg-[#69b578] hover:bg-[#4c9a9a]">
                                Check In
                              </Button>
                            </div>
                            <div className="flex justify-between items-center p-3 border rounded-md">
                              <span>Web3 Development</span>
                              <Button variant="outline" size="sm" disabled>
                                Checked
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Attendance History</h4>
                          <div className="space-y-2">
                            <div className="p-3 border rounded-md">
                              <div className="flex justify-between">
                                <span>April 2025</span>
                                <span className="text-[#69b578]">90%</span>
                              </div>
                              <Progress value={90} className="h-2 mt-2" />
                            </div>
                            <div className="p-3 border rounded-md">
                              <div className="flex justify-between">
                                <span>March 2025</span>
                                <span className="text-[#69b578]">85%</span>
                              </div>
                              <Progress value={85} className="h-2 mt-2" />
                            </div>
                            <div className="p-3 border rounded-md">
                              <div className="flex justify-between">
                                <span>February 2025</span>
                                <span className="text-[#69b578]">70%</span>
                              </div>
                              <Progress value={70} className="h-2 mt-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tokens">
              <div className="grid grid-cols-1 gap-6">
                <Card className="border-[#4c9a9a]">
                  <CardHeader>
                    <CardTitle className="text-[#5b3a29]">Token Management</CardTitle>
                    <CardDescription>View and manage your attendance tokens</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-[#dcd2c6] p-4 rounded-md">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Your Balance</h4>
                          <span className="text-2xl font-bold text-[#5b3a29]">245 ATT</span>
                        </div>
                        <p className="text-sm mt-2">Attendance Tokens (ATT) earned from participation</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Recent Transactions</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-3 border rounded-md">
                            <div>
                              <div className="font-medium">+10 ATT</div>
                              <div className="text-sm text-gray-500">Blockchain Workshop</div>
                            </div>
                            <div className="text-sm text-gray-500">Today, 14:30</div>
                          </div>
                          <div className="flex justify-between items-center p-3 border rounded-md">
                            <div>
                              <div className="font-medium">+15 ATT</div>
                              <div className="text-sm text-gray-500">Smart Contract Seminar</div>
                            </div>
                            <div className="text-sm text-gray-500">Yesterday, 10:15</div>
                          </div>
                          <div className="flex justify-between items-center p-3 border rounded-md">
                            <div>
                              <div className="font-medium">+20 ATT</div>
                              <div className="text-sm text-gray-500">Perfect Week Bonus</div>
                            </div>
                            <div className="text-sm text-gray-500">Apr 15, 2025</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-[#69b578] hover:bg-[#4c9a9a]">Transfer Tokens</Button>
                        <Button variant="outline" className="flex-1 border-[#5b3a29] text-[#5b3a29]">
                          Redeem Rewards
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}
