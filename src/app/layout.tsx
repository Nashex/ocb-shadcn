import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shell/sidebar";
import React from "react";
import Header from "@/components/shell/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCB ShadCN Demo",
  description: "Minimal ShadCN Demo for OpenCourseBook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "scroll-smooth")}>
        <Header />

        <main className="relative flex justify-between">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
