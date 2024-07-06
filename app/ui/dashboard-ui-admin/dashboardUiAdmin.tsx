"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import UserTable from "@/app/components/user-table/userTable";
import AHPResultTable from "@/app/components/ahp-result-table/ahpResultTable";

interface DashboardProps {
  session: any;
  data: Array<{
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    role?: string;
    jabatan?: string | null;
    status?: string;
  }> | undefined;
  ahpResult: Array<{
    category?: {
      key?: string | null;
    } | null;
    value?: number;
  }> | undefined;
}

const DashboardUiAdmin: React.FC<DashboardProps> = ({ session, data, ahpResult }) => {
  const router = useRouter();

  useEffect(() => {
    if (session?.user.jabatan === "Admin") {
      router.replace("/dashboard-admin");
    }
  }, [session, router]);

  return (
    <main className="flex flex-col w-full min-h-screen items-center py-10">
      <div className="max-lg:mt-20 mb-[-30px] rounded-2xl max-lg:mx-6">
        <h1 className="text-3xl font-bold text-tertiary max-lg:text-2xl text-center p-4">Risk Management Maturity Measurement Dashboard</h1>
      </div>
      <div className="flex flex-row max-lg:flex-col max-lg:gap-10 w-[70%] max-lg:w-[90%] justify-center items-center mt-10">
        <AHPResultTable
          ahpResult={ahpResult}
          session={session}
        />
      </div>
      <UserTable
        data={data}
      />
    </main>
  );
}

export default DashboardUiAdmin;