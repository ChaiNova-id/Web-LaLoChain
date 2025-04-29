"use client";

import { Button } from "@/components/ui/button";
import { useWalletStore } from "@/stores/walletStore";
import Link from "next/link";

export default function Home() {
  const { account } = useWalletStore();

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-row space-x-2">
        <Button variant="outlineBrand" asChild>
          <Link href="/marketplace">Marketplace</Link>
        </Button>
        <Button variant="primaryBrand" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <h1 className="heading-6 text-neutral-950">
          {account ? `Connected: ${account}` : "Not connected"}
        </h1>
      </div>
    </main>
  );
}
