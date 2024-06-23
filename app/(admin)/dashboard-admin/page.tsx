import React from "react";
import { auth } from "@/auth";

export default async function DashboardAdmin() {
  const session = await auth();
  return (
    <main className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <div className="flex bg-secondary p-14 rounded-lg">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-3xl font-bold">ini DASHBOARD ADMIN</h1>
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
