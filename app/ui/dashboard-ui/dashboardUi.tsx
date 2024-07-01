"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import AHPResultTable from "@/app/components/ahp-result-table/ahpResultTable";

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

  // const rows: RowData[] = ahpResult?.data.map((item: any) => {
  //   return {
  //     key: item.category.key,
  //     kriteria: item.category.key.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  //     priority_vector: item.value,
  //     rank: item.rank,
  //   };
  // });

  // const sortedRows = [...rows].sort((a, b) => b.priority_vector - a.priority_vector);

  // rows.forEach(row => {
  //   row.rank = sortedRows.findIndex(sortedRow => sortedRow.key === row.key) + 1;
  // });
  
  const columns = [
    {
      key: "kriteria",
      label: "Kriteria",
    },
    {
      key: "priority_vector",
      label: "Priority Vector",
    },
    {
      key: "rank",
      label: "Rank",
    },
  ];

  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center">
      <div className="max-lg:mt-20 mt-10 mb-[-90px] bg-primary rounded-2xl max-lg:mx-6">
        <h1 className="text-xl font-bold text-secondary max-lg:text-lg text-center p-4">Risk Management Maturity Measurement Dashboard</h1>
      </div>
      <div className="flex flex-col max-lg:flex-col gap-10 w-[70%] max-lg:w-[90%] min-h-screen justify-center items-center">

        <div className="flex flex-col w-full justify-center items-center">
          <AHPResultTable
            ahpResult={ahpResult}
          />
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <AHPResultTable
            ahpResult={ahpResult}
          />
        </div>
      </div>
    </main>
  );
}

export default DashboardUi;