import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp from "@/Components/NavbarComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocean",
  description: "Best Modern Website Using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-400 text-lg min-h-screen overflow-x-hidden `}
      >
        <NavbarComp />
        {children}
      </body>
    </html>
  );
}
