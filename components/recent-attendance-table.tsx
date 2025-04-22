"use client"

import { CheckCircle, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const attendanceData = [
  {
    id: 1,
    event: "Blockchain Workshop",
    user: "0x1a2b...3c4d",
    timestamp: "Today, 14:30",
    status: "Present",
    tokens: 10,
    txHash: "0xe5d4...7f8g",
  },
  {
    id: 2,
    event: "Smart Contract Seminar",
    user: "0x5e6f...7g8h",
    timestamp: "Yesterday, 10:15",
    status: "Present",
    tokens: 15,
    txHash: "0x9i8h...7g6f",
  },
  {
    id: 3,
    event: "Web3 Development",
    user: "0x9i0j...1k2l",
    timestamp: "Apr 15, 2025",
    status: "Absent",
    tokens: 0,
    txHash: "N/A",
  },
  {
    id: 4,
    event: "DeFi Workshop",
    user: "0x3m4n...5o6p",
    timestamp: "Apr 12, 2025",
    status: "Present",
    tokens: 20,
    txHash: "0x5e4d...3c2b",
  },
  {
    id: 5,
    event: "NFT Masterclass",
    user: "0x7q8r...9s0t",
    timestamp: "Apr 10, 2025",
    status: "Present",
    tokens: 15,
    txHash: "0x1a2b...3c4d",
  },
]

export function RecentAttendanceTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#dcd2c6]">
            <TableHead className="text-[#5b3a29]">Event</TableHead>
            <TableHead className="text-[#5b3a29]">Time</TableHead>
            <TableHead className="text-[#5b3a29]">Status</TableHead>
            <TableHead className="text-[#5b3a29] text-right">Tokens</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendanceData.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="font-medium">{record.event}</TableCell>
              <TableCell>{record.timestamp}</TableCell>
              <TableCell>
                {record.status === "Present" ? (
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#69b578] mr-1" />
                    <span>Present</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" />
                    <span>Absent</span>
                  </div>
                )}
              </TableCell>
              <TableCell className="text-right">{record.tokens}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
