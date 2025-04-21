import Header from "@/components/marketplace/content/header";
import Sidebar from "@/components/marketplace/sidebar";

export default function MarketPlacePage() {
  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar />

      <main className="flex-1 p-[3.252vw] overflow-auto">
        <Header /> 
      </main>
    </div>
  )
}
