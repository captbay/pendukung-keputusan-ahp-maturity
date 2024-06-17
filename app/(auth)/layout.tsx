import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pendukung Keputusan",
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
          `custom-bg h-screen overscroll-y-none overscroll-x-none`,
          inter.className
        )}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
