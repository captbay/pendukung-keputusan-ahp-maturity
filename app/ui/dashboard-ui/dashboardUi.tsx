"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

interface DashboardProps {
  session: any;
  ahpResult: any;
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

  useEffect(() => {
    console.log('this is ahp result --- ', ahpResult.data);
  }, [ahpResult]);

  // from ahpResult.data, convert into rows
  // make the kriteria from ahpResult.data.category.key with removing underscore and capitalize each word
  // make the rank by sorting the ahpResult.data by value
  // there is no item.rank in ahpResult.data, so we need to create it
  // the rank is the index of the item in the sorted ahpResult.data by its value
  // the priority_vector is the value of the item

  const rows: RowData[] = ahpResult.data.map((item: any) => {
    return {
      key: item.category.key,
      kriteria: item.category.key.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      priority_vector: item.value,
      rank: item.rank,
    };
  });

  const sortedRows = [...rows].sort((a, b) => b.priority_vector - a.priority_vector);

  rows.forEach(row => {
    row.rank = sortedRows.findIndex(sortedRow => sortedRow.key === row.key) + 1;
  });

  console.log('this is rows --- ', rows);
  
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
    <main className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-row max-lg:flex-col max-lg:gap-10 w-[70%] max-lg:w-[90%] min-h-screen justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex p-2 justify-center">
            <h1 className="text-lg">
              This is your AHP Result!
            </h1>
          </div>
          <div className="max-lg:w-full lg:w-[90%] w-[80%]">
            <Table aria-label="Example table with dynamic content">
              <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
              </TableHeader>
              <TableBody items={rows}>
                {(item) => (
                  <TableRow key={item.key}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex p-2 justify-center">
            <h1 className="text-lg">
              This is your Maturity Result!
            </h1>
          </div>
          <div className="max-lg:w-full lg:w-[90%] w-[80%]">
            <Table aria-label="Example table with dynamic content">
              <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
              </TableHeader>
              <TableBody items={rows}>
                {(item) => (
                  <TableRow key={item.key}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardUi;