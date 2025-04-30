import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/allPage/Navbar";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "LaLoChain",
  description: "Presented by ChaiNova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable}  antialiased`}>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar navlink={["Home", "Marketplace", "Owners"]} />
        <main className="w-full h-screen bg-neutral-50 px-36 py-5">
          {children}
        </main>
      </body>
    </html>
  );
}
