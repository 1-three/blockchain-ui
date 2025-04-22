import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftRight, Award, Gift } from "lucide-react"

export default function TokensPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#dcd2c6]">
      <header className="bg-[#5b3a29] text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Tokens</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-6">
        <Card className="border-[#4c9a9a] mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-3xl font-bold text-[#5b3a29]">245 ATT</h2>
                <p className="text-gray-600">Your Attendance Token Balance</p>
              </div>
              <div className="flex gap-3">
                <Button className="bg-[#69b578] hover:bg-[#4c9a9a]">
                  <ArrowLeftRight className="mr-2 h-4 w-4" /> Transfer
                </Button>
                <Button variant="outline" className="border-[#5b3a29] text-[#5b3a29]">
                  <Gift className="mr-2 h-4 w-4" /> Redeem
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="history" className="mb-6">
          <TabsList className="bg-[#dcd2c6]">
            <TabsTrigger value="history" className="data-[state=active]:bg-[#69b578] data-[state=active]:text-white">
              Transaction History
            </TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-[#69b578] data-[state=active]:text-white">
              Rewards
            </TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            <Card className="border-[#4c9a9a]">
              <CardHeader>
                <CardTitle className="text-[#5b3a29]">Transaction History</CardTitle>
                <CardDescription>View your token transaction history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      type: "Earned",
                      amount: "+10 ATT",
                      description: "Blockchain Workshop Attendance",
                      date: "Today, 14:30",
                      txHash: "0xe5d4...7f8g",
                    },
                    {
                      id: 2,
                      type: "Earned",
                      amount: "+15 ATT",
                      description: "Smart Contract Seminar",
                      date: "Yesterday, 10:15",
                      txHash: "0x9i8h...7g6f",
                    },
                    {
                      id: 3,
                      type: "Earned",
                      amount: "+20 ATT",
                      description: "Perfect Week Bonus",
                      date: "Apr 15, 2025",
                      txHash: "0x1a2b...3c4d",
                    },
                    {
                      id: 4,
                      type: "Redeemed",
                      amount: "-50 ATT",
                      description: "Workshop Certificate",
                      date: "Apr 12, 2025",
                      txHash: "0x5e4d...3c2b",
                    },
                    {
                      id: 5,
                      type: "Earned",
                      amount: "+15 ATT",
                      description: "NFT Masterclass",
                      date: "Apr 10, 2025",
                      txHash: "0x7q8r...9s0t",
                    },
                    {
                      id: 6,
                      type: "Transferred",
                      amount: "-25 ATT",
                      description: "To: 0x7q8r...9s0t",
                      date: "Apr 5, 2025",
                      txHash: "0x3m4n...5o6p",
                    },
                  ].map((transaction) => (
                    <div key={transaction.id} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-[#5b3a29]">{transaction.amount}</div>
                          <div className="text-sm text-gray-600">{transaction.description}</div>
                        </div>
                        <div className="text-sm text-right">
                          <div className="text-gray-900">{transaction.date}</div>
                          <div className="text-gray-500 text-xs">TX: {transaction.txHash}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="rewards">
            <Card className="border-[#4c9a9a]">
              <CardHeader>
                <CardTitle className="text-[#5b3a29]">Available Rewards</CardTitle>
                <CardDescription>Redeem your tokens for rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      id: 1,
                      title: "Workshop Certificate",
                      cost: 50,
                      description: "Official blockchain workshop completion certificate",
                      available: true,
                    },
                    {
                      id: 2,
                      title: "Premium Course Access",
                      cost: 100,
                      description: "1-month access to premium blockchain courses",
                      available: true,
                    },
                    {
                      id: 3,
                      title: "Conference Ticket",
                      cost: 250,
                      description: "Entry to annual blockchain conference",
                      available: false,
                    },
                    {
                      id: 4,
                      title: "1-on-1 Mentoring",
                      cost: 150,
                      description: "30-minute session with industry expert",
                      available: true,
                    },
                  ].map((reward) => (
                    <Card key={reward.id} className="border-[#69b578]">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-[#5b3a29] text-lg">{reward.title}</CardTitle>
                          <Award className="h-5 w-5 text-[#69b578]" />
                        </div>
                        <CardDescription>{reward.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div className="text-xl font-bold text-[#5b3a29]">{reward.cost} ATT</div>
                          <Button
                            className={reward.available ? "bg-[#69b578] hover:bg-[#4c9a9a]" : "bg-gray-400"}
                            disabled={!reward.available || reward.cost > 245}
                          >
                            Redeem
                          </Button>
                        </div>
                        {reward.cost > 245 && <p className="text-sm text-red-500 mt-2">Insufficient tokens</p>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="border-[#4c9a9a]">
          <CardHeader>
            <CardTitle className="text-[#5b3a29]">Smart Contract Details</CardTitle>
            <CardDescription>Information about the Attendance Token</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium text-[#5b3a29] mb-1">Token Contract</h3>
                <p className="text-sm font-mono">0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium text-[#5b3a29] mb-1">Attendance Oracle</h3>
                <p className="text-sm font-mono">0x9s8r7q6p5o4n3m2l1k0j9i8h7g6f5e4d3c2b1a</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium text-[#5b3a29] mb-1">Token Standard</h3>
                <p className="text-sm">ERC-20</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium text-[#5b3a29] mb-1">Total Supply</h3>
                <p className="text-sm">1,000,000 ATT</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium text-[#5b3a29] mb-1">Current Circulating</h3>
                <p className="text-sm">157,845 ATT</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-[#5b3a29] text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2025 BlockAttend. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/terms" className="hover:text-[#f1f586]">
                Terms
              </a>
              <a href="/privacy" className="hover:text-[#f1f586]">
                Privacy
              </a>
              <a href="/contact" className="hover:text-[#f1f586]">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
