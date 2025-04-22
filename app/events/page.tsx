import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Calendar, Users, MapPin, Clock } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#dcd2c6]">
      <header className="bg-[#5b3a29] text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Events</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#5b3a29]">Upcoming Events</h2>
          <Button className="bg-[#69b578] hover:bg-[#4c9a9a]">
            <PlusCircle className="mr-2 h-4 w-4" /> Create Event
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: 1,
              title: "Blockchain Workshop",
              date: "April 20, 2025",
              time: "14:00 - 16:00",
              location: "Tech Hub, Building A",
              attendees: 24,
              description: "Learn the fundamentals of blockchain technology and its applications.",
            },
            {
              id: 2,
              title: "Smart Contract Seminar",
              date: "April 25, 2025",
              time: "10:00 - 12:00",
              location: "Virtual (Zoom)",
              attendees: 42,
              description: "Deep dive into Solidity and smart contract development.",
            },
            {
              id: 3,
              title: "Web3 Development",
              date: "May 2, 2025",
              time: "09:00 - 17:00",
              location: "Innovation Center",
              attendees: 18,
              description: "Full-day workshop on building dApps and Web3 integration.",
            },
            {
              id: 4,
              title: "DeFi Workshop",
              date: "May 10, 2025",
              time: "13:00 - 15:00",
              location: "Finance Building, Room 302",
              attendees: 15,
              description: "Explore decentralized finance protocols and applications.",
            },
            {
              id: 5,
              title: "NFT Masterclass",
              date: "May 15, 2025",
              time: "11:00 - 13:00",
              location: "Art Gallery",
              attendees: 30,
              description: "Creating and minting NFTs on the blockchain.",
            },
            {
              id: 6,
              title: "Cryptocurrency Trading",
              date: "May 22, 2025",
              time: "14:00 - 16:00",
              location: "Virtual (Teams)",
              attendees: 50,
              description: "Introduction to cryptocurrency markets and trading strategies.",
            },
          ].map((event) => (
            <Card key={event.id} className="overflow-hidden border-[#69b578]">
              <div className="bg-[#4c9a9a] h-2"></div>
              <CardHeader>
                <CardTitle className="text-[#5b3a29]">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#5b3a29]" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#5b3a29]" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[#5b3a29]" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-[#5b3a29]" />
                    <span className="text-sm">{event.attendees} registered</span>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-[#69b578] hover:bg-[#4c9a9a]">Register</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
