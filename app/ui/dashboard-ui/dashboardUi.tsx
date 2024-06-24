"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface DashboardProps {
  session: any;
}

const DashboardUi: React.FC<DashboardProps> = ({ session }) => {
  const router = useRouter();
  useEffect(() => {
    if(session?.user.jabatan !== "Admin") {
      router.replace("/dashboard");
    }
  }, [session]);
  return (
    <main className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <div className="flex bg-secondary p-14 rounded-lg">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-3xl font-bold">ini dashboard user</h1>
          <h1 className="text-xl p-2">
            Analytical Hierarchy Process & Project Management Maturity
            Measurement
          </h1>
          <p>{session?.user.name}</p>
          <p>{session?.user.email}</p>
          <p>{session?.user.jabatan}</p>
        </div>
      </div>
    </main>
  );
}

export default DashboardUi;