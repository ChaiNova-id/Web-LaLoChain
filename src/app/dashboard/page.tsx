"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

import Image from "next/image";

export default function PropertyDashboard() {
  const properties = [
    {
      icon: "/images/Property.svg",
      name: "Futura Apartments",
      location: "New York, NY",
      income: "$5,000/month",
      value: "$500,000",
      status: "Verified",
      badgeVariant: "default" as
        | "default"
        | "outline"
        | "destructive"
        | "secondary",
    },
    {
      icon: "/images/Property.svg",
      name: "Grand Villas",
      location: "Miami, FL",
      income: "$3,200/month",
      value: "$280,000",
      status: "Pending",
      badgeVariant: "outline" as
        | "default"
        | "outline"
        | "destructive"
        | "secondary",
    },
    {
      icon: "/images/Property.svg",
      name: "Westside Homes",
      location: "Dallas, TX",
      income: "$4,400/month",
      value: "$450,000",
      status: "Verified",
      badgeVariant: "default" as
        | "default"
        | "outline"
        | "destructive"
        | "secondary",
    },
  ];

  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar (252px/984px ≈ 25.61vw) */}
      <aside className="flex flex-col w-[20vw] bg-blue-950 text-neutral-400 px-[2.44vw] py-[3.252vw]">
        <h2 className="text-[1.9vw] font-medium text-white mb-[4.065vw]">
          Property Owner
        </h2>
        <nav className="space-y-[1.626vw] flex-1">
          <Button
            variant="ghost"
            className="text-[1.1vw] px-[2vw] py-[1.2vw] w-[10vw] justify-start cursor-pointer hover:bg-blue-800 hover:text-neutral-100"
          >
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="text-[1.1vw] px-[2vw] py-[1.2vw] w-[10vw] justify-start cursor-pointer hover:bg-blue-800 hover:text-neutral-100"
          >
            Properties
          </Button>
          <Button
            variant="ghost"
            className="text-[1.1vw] px-[2vw] py-[1.2vw] w-[10vw] justify-start cursor-pointer hover:bg-blue-800 hover:text-neutral-100"
          >
            Analytics
          </Button>
          <Button
            variant="ghost"
            className="text-[1.1vw] px-[2vw] py-[1.2vw] w-[10vw] justify-start cursor-pointer hover:bg-blue-800 hover:text-neutral-100"
          >
            Settings
          </Button>
        </nav>
        <Button
          variant="link"
          className="mt-auto text-[1.1vw] text-neutral-400 cursor-pointer"
        >
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-[3.252vw] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-[3.252vw]">
          <h1 className="text-[2.6vw] font-semibold text-neutral-800 cursor-pointer">
            Property Dashboard
          </h1>
          <Button className="flex items-center py-[1.2vw] cursor-pointer">
            <Plus className="w-[2vw] h-[2vw]" />
            <span className="text-[1vw]">Register New Property</span>
          </Button>
        </div>

        {/* Registered Properties (663px/984px ≈ 67.38vw) */}
        <Card className="mb-[3.252vw] w-[72.99vw]">
          <CardHeader>
            <CardTitle className="text-[1vw]">Registered Properties</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="text-[0.85vw]">
                  <TableHead>Property</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Rental Income</TableHead>
                  <TableHead>Tokenized Value</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {properties.map((p) => (
                  <TableRow className="text-[0.85vw]" key={p.name}>
                    <TableCell className="flex items-center space-x-[1.22vw]">
                      <Image
                        src={p.icon}
                        width={32}
                        height={32}
                        alt={`${p.name} icon`}
                      />

                      <span>{p.name}</span>
                    </TableCell>
                    <TableCell>{p.location}</TableCell>
                    <TableCell>{p.income}</TableCell>
                    <TableCell>{p.value}</TableCell>
                    <TableCell>
                      <Badge className="text-[0.75vw]" variant={p.badgeVariant}>
                        {p.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* zkTLS Verification (664px/984px ≈ 67.48vw) */}
        <Card className="w-[72.99vw]">
          <CardHeader>
            <CardTitle className="text-[1vw]">zkTLS Verification</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-items-center gap-[1vw]">
            <Progress value={75} className="h-[0.813vw] rounded-full" />
            <span className="self-end text-[1vw]">75%</span>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
