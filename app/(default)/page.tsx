import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen justify-center items-center bg-primary">
      <div className="flex bg-secondary p-14 rounded-lg">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-3xl font-bold text-center">Sistem Pendukung Keputusan</h1>
          <h1 className="text-xl p-2 text-center">Analytical Hierarchy Process & Project Management Maturity Measurement</h1>

          <Button
            className="mt-4"
            color="primary"
          >
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
