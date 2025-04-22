import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainDashboard } from "@/components/main-dashboard"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#dcd2c6]">
      <header className="bg-[#5b3a29] text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">BlockAttend Dashboard</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-6">
        <div className="grid gap-6">
          <Card className="border-[#4c9a9a]">
            <CardHeader>
              <CardTitle className="text-[#5b3a29]">Attendance Dashboard</CardTitle>
              <CardDescription>Manage your blockchain-based attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <MainDashboard />
            </CardContent>
          </Card>
        </div>
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
