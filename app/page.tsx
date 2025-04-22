import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainDashboard } from "@/components/main-dashboard"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#dcd2c6]">
      <header className="bg-[#5b3a29] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BlockAttend</h1>
          <nav className="flex gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-white hover:text-[#f1f586]">
                Dashboard
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="ghost" className="text-white hover:text-[#f1f586]">
                Events
              </Button>
            </Link>
            <Link href="/tokens">
              <Button variant="ghost" className="text-white hover:text-[#f1f586]">
                Tokens
              </Button>
            </Link>
          </nav>
          <Button variant="outline" className="bg-[#4c9a9a] text-white border-[#69b578] hover:bg-[#69b578]">
            Connect Wallet
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-[#5b3a29] mb-4">Blockchain Attendance Management</h2>
            <p className="text-lg text-gray-700 mb-6">
              Securely track attendance and reward participation with blockchain technology and tokenization.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#69b578] hover:bg-[#4c9a9a] text-white">Get Started</Button>
              <Button variant="outline" className="border-[#5b3a29] text-[#5b3a29]">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://globalfintechseries.com/wp-content/uploads/Integrating-Blockchain-Technology-into-Digital-Banking-Systems-1-960x720.jpg"
              alt="Blockchain Attendance"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-[#5b3a29] mb-6 text-center">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-[#69b578]">
              <CardHeader>
                <CardTitle className="text-[#5b3a29]">Decentralized Ledger</CardTitle>
                <CardDescription>Immutable attendance records</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Track attendance with secure, tamper-proof blockchain records that ensure data integrity.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#69b578]">
              <CardHeader>
                <CardTitle className="text-[#5b3a29]">Token Rewards</CardTitle>
                <CardDescription>Incentivize participation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Automatically distribute tokens to reward consistent attendance and participation.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#69b578]">
              <CardHeader>
                <CardTitle className="text-[#5b3a29]">Real-time Analytics</CardTitle>
                <CardDescription>Insights and reporting</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Access real-time data on attendance patterns, token distribution, and participation metrics.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#5b3a29] mb-6 text-center">Live Dashboard</h3>
          <Card className="bg-white border-[#4c9a9a] p-4">
            <CardContent className="p-0">
              <MainDashboard />
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-[#5b3a29] text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2025 BlockAttend. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-[#f1f586]">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-[#f1f586]">
                Privacy
              </Link>
              <Link href="/contact" className="hover:text-[#f1f586]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
