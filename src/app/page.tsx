import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-row space-x-2">
        <Button variant="blue" asChild>
          <Link href="/marketplace">Marketplace</Link>
        </Button>
        <Button variant="blue" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
