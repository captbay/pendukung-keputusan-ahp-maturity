"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import AHPResultTable from "@/app/components/ahp-result-table/ahpResultTable";
import MaturityRecapTable from "@/app/components/maturity-recap-table/maturityRecapTable";

interface DashboardProps {
  session: any;
  ahpResult: Array<{
    category?: {
      key?: string | null;
    } | null;
    value?: number;
  }> | undefined;
}

interface RowData {
  key: string;
  kriteria: string;
  priority_vector: number;
  rank: number;
}

const DashboardUi: React.FC<DashboardProps> = ({ session, ahpResult }) => {
  const router = useRouter();

  useEffect(() => {
    if(session?.user.jabatan !== "Admin") {
      router.replace("/dashboard"); 
    }
  }, [session]);

  return (
    <main className="flex flex-col w-full min-h-screen items-center">
      <div className="max-lg:mt-20 mt-10 mb-[-30px] rounded-2xl max-lg:mx-6">
        <h1 className="text-3xl font-bold text-tertiary max-lg:text-lg text-center p-4">Risk Management Maturity Measurement Dashboard</h1>
      </div>
      <div className="flex flex-col max-lg:flex-col w-[70%] max-lg:w-[90%] min-h-screen justify-center items-center">

        <div className="flex flex-col w-full justify-center items-center">
          <AHPResultTable
            ahpResult={ahpResult}
            session={session}
          />
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <MaturityRecapTable />
        </div>
      </div>
    </main>
  );
}

export default DashboardUi;