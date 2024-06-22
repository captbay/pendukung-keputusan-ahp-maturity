import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "../ui/sidebar/sidebar";
import { useState } from "react";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sistem Pendukung Keputusan -citra",
  description: "Analytical Hierarchy Process & Project Management Maturity Measurement",
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  // const [isOpen, setIsOpen] = useState(true);
  // const [activeItem, setActiveItem] = useState('dashboard');
  
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Sidebar
          isAdmin={false}
          // isOpen={isOpen} 
          // activeItem={activeItem} 
          // setActiveItem={setActiveItem} 
        />
        {children}
      </body>
    </html>
  );
}
