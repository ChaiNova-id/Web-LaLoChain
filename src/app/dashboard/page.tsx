"use client";

import Header from "@/components/dashboard/content/Header";
import RegisteredProperties from "@/components/dashboard/content/RegisteredProperties";
import Sidebar from "@/components/dashboard/Sidebar";
import ZkTLS_Verification from "@/components/dashboard/content/ZkTLS_Verification";

export default function PropertyDashboard() {
  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-[3.252vw] overflow-auto">
        <Header />

        <RegisteredProperties />

        <ZkTLS_Verification />
      </main>
    </div>
  );
}
