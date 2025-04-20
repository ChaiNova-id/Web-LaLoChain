import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";

const RegisteredProperties = () => {
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
                    className="py-[0.5vw]"
                  />

                  <span>{p.name}</span>
                </TableCell>
                <TableCell>{p.location}</TableCell>
                <TableCell>{p.income}</TableCell>
                <TableCell>{p.value}</TableCell>
                <TableCell>
                  <Badge className="text-[0.75vw] py-[0.2vw]" variant={p.badgeVariant}>
                    {p.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RegisteredProperties;
