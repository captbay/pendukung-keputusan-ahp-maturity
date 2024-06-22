import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <div className="flex bg-secondary p-14 rounded-lg">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-3xl font-bold">ini dashboard user</h1>
          <h1 className="text-xl p-2">Analytical Hierarchy Process & Project Management Maturity Measurement</h1>
        </div>
      </div>
    </main>
  );
}
