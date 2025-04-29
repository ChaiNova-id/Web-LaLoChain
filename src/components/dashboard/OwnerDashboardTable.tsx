import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

import { Property } from "@/types/propertyDashboardTypes";

export default function OwnerDashboardTable({
  properties,
}: {
  properties?: Property[];
}) {
  const columns = [
    {
      key: "name",
      label: "Property",
      className: "flex items-center gap-2",
      render: (p: Property) => (
        <>
          <span className="caption-3 text-neutral-950">{p.name}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-help">
                  <Info className="w-4 h-4 text-neutral-500" />
                </span>
              </TooltipTrigger>
              <TooltipContent className="p-2">
                <p className="caption-3">
                  {p.description || "Property description not available"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      ),
    },
    {
      key: "location",
      label: "Location",
      className: "text-center",
      render: (p: Property) => (
        <span className="caption-3 text-neutral-950">{p.location}</span>
      ),
    },
    {
      key: "rentalIncome",
      label: "Rental Income",
      className: "text-center",
      render: (p: Property) => (
        <span className="caption-3 text-neutral-950">{p.rentalIncome}</span>
      ),
    },
    {
      key: "tokenizedValue",
      label: "Tokenized",
      className: "text-center",
      render: (p: Property) => (
        <span className="caption-3 text-neutral-950">{p.tokenizedValue}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      className: "text-center",
      render: (p: Property) => (
        <Badge
          variant={p.status === "Verified" ? "default" : "destructive"}
          className={`${
            p.status === "Verified" ? "bg-success-600" : "bg-error-600"
          } px-2 caption-3`}
        >
          {p.status}
        </Badge>
      ),
    },
    {
      key: "action",
      label: "Action",
      className: "flex justify-center gap-2",
      render: () => (
        <>
          <Button
            size="sm"
            className="text-neutral-50 bg-warning-600 hover:bg-warning-500 caption-3 px-2 cursor-pointer"
          >
            Edit
          </Button>
          <Button
            size="sm"
            className="text-neutral-50 bg-error-600 hover:bg-error-500 caption-3 px-2 cursor-pointer"
          >
            Delete
          </Button>
        </>
      ),
    },
  ] as const;

  return (
    <Table className="bg-neutral-50 border border-neutral-200 cursor-default">
      <TableHeader className="bg-neutral-100">
        <TableRow>
          {columns.map((col) => (
            <TableHead
              key={col.key}
              className={`${
                col.label === "Property" ? "text-left" : "text-center"
              } body-3`}
            >
              {col.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {properties?.map((p) => (
          <TableRow key={p.id} className="hover:bg-neutral-50">
            {columns.map((col) => (
              <TableCell key={col.key} className={col.className}>
                {col.render(p)}
              </TableCell>
            ))}
          </TableRow>
        )) || (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center">
              No properties found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
