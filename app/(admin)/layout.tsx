import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "../ui/sidebar/sidebar";
import { useState } from "react";
import { auth } from '@/auth';

// const poppins = Poppins({ 
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Sistem Pendukung Keputusan -citra",
  description: "Analytical Hierarchy Process & Project Management Maturity Measurement",
};

export default async function RootLayout({ children }: {children: React.ReactNode}) {
  const session = await auth();
  
  return (
    <html lang="en">
      <body>
        <Sidebar 
          isAdmin={true}
          session={session}
        />
        {children}
      </body>
    </html>
  );
}