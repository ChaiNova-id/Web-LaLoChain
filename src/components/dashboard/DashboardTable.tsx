import React, { useState } from "react";
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
import { PropertyOwner, PropertyInvestor } from "@/types/dashboardTypes";
import { useModalStore } from "@/stores/modalStore";

export default function DashboardTable({
  properties,
  type,
  Modal,
}: {
  properties?: PropertyOwner[] | PropertyInvestor[];
  type: "owner" | "investor";
  Modal?: React.ComponentType<{ property_id: string | number }>;
}) {
  const { openModal, isOpen } = useModalStore();
  const [selectedId, setSelectedId] = useState<string | number | null>(null);

  const handleOpenModal = (id: string | number) => {
    setSelectedId(id);
    openModal();
  };

  const columns = [
    {
      key: "name",
      label: "Property",
      className: "flex items-center gap-2",
      render: (p: PropertyOwner | PropertyInvestor) => (
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
      render: (p: PropertyOwner | PropertyInvestor) => (
        <span className="caption-3 text-neutral-950">{p.location}</span>
      ),
    },
    {
      key: `${type === "owner" ? "rate" : "tokensOwn"}`,
      label: `${type === "owner" ? "Rate" : "Tokens Own"}`,
      className: "text-center",
      render: (p: PropertyOwner | PropertyInvestor) => (
        <span className="caption-3 text-neutral-950">
          {type === "owner" && "rate" in p
            ? `${p.rate} %`
            : "tokensOwn" in p
            ? `${p.tokensOwn} LLoT`
            : null}
        </span>
      ),
    },
    {
      key: `${type === "owner" ? "availableTokens" : "withdrawLimit"}`,
      label: `${type === "owner" ? "Available Tokens" : "Withdraw Limit"}`,
      className: "text-center",
      render: (p: PropertyOwner | PropertyInvestor) => (
        <span className="caption-3 text-neutral-950">
          {type === "owner" && "availableTokens" in p
            ? `${p.availableTokens} LLoT`
            : "withdrawLimit" in p
            ? `${p.withdrawLimit} USDC`
            : null}
        </span>
      ),
    },
    {
      key: `${type === "owner" ? "remainingDebt" : "withdrawn"}`,
      label: `${type === "owner" ? "Remaining Debt" : "Withdrawn"}`,
      className: "text-center",
      render: (p: PropertyOwner | PropertyInvestor) => (
        <span className="caption-3 text-neutral-950">
          {type === "owner" && "remainingDebt" in p
            ? `${p.remainingDebt} USDC`
            : "withdrawn" in p
            ? `${p.withdrawn} USDC`
            : null}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      className: "text-center",
      render: (p: PropertyOwner | PropertyInvestor) => (
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
      render: (p: PropertyOwner | PropertyInvestor) => (
        <Button
          size="sm"
          className={`${
            type === "owner"
              ? "bg-warning-600 hover:bg-warning-500"
              : "bg-success-600 hover:bg-success-500"
          } text-neutral-50 caption-3 px-2 cursor-pointer`}
          onClick={() => handleOpenModal(p.property_id)}
        >
          {type === "owner" ? "Deposit" : "Withdraw"}
        </Button>
      ),
    },
  ] as const;

  return (
    <>
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
          {properties?.length ? (
            properties.map((p) => (
              <TableRow key={p.property_id} className="hover:bg-neutral-50">
                {columns.map((col) => (
                  <TableCell key={col.key} className={col.className}>
                    {col.render(p)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                <p className="heading-4 text-brand-500">No properties found</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {isOpen && Modal && selectedId !== null && (
        <Modal property_id={selectedId} />
      )}
    </>
  );
}
