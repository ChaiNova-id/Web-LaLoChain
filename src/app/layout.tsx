import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/allPage/Navbar";

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
        <Navbar navlink={["Home", "Marketplace", "Owners"]} />
        <main className="w-full bg-neutral-50 px-36 py-5">{children}</main>
      </body>
    </html>
  );
}
