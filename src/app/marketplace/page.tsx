import Header from "@/components/marketplace/content/header";
import PropertyList from "@/components/marketplace/content/property-list";
import Sidebar from "@/components/marketplace/sidebar";

export default function MarketPlacePage() {
  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar />

      <main className="flex-1 p-[3.252vw] overflow-auto">
        <Header /> 

        <PropertyList />
      </main>
    </div>
  )
}
