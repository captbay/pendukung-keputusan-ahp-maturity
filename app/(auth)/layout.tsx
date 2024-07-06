import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistem Pendukung Keputusan",
  description: "Dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          `bg-primary h-screen overscroll-y-none overscroll-x-none`,
          inter.className
        )}
      >
       <div className="flex flex-col justify-center items-center h-full gap-20">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-secondary text-3xl">Sistem Pendukung Keputusan</h1>
            <h1 className="text-secondary text-xl">Analytical Hierarchy Process and Maturity Measurement</h1>
          </div>
          <NextUIProvider>{children}</NextUIProvider>
       </div>
      </body>
    </html>
  );
}
