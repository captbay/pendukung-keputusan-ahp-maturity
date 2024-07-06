import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({ 
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Sistem Pendukung Keputusan -citra",
  description: "Analytical Hierarchy Process & Project Management Maturity Measurement",
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
