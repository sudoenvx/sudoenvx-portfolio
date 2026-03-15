import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface AppLayoutProps {
    children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="p-4 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 max-w-205 mx-auto">
            {children}
        </div>
        <Footer />
    </div>
  )
}
