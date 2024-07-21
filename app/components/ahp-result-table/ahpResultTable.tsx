"use client";

import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, Button } from "@nextui-org/react";
import ConfirmationModal from "@/app/ui/confirmation-modal/confirmationModal";
import LoadingScreen from "../loading-screen/loadingScreen";
import { resetAhpData } from "@/lib/actions";
import { Toaster, toast } from "sonner";

interface AHPResultTableProps {
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
  rank?: number;
}

const AHPResultTable: React.FC<AHPResultTableProps> = ({ ahpResult, session }) => {
  const [isDeleteClicked, setIsDeleteClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const rows: RowData[] = ahpResult!.map((item: any) => ({
    key: item.category.key,
    kriteria: item.category.key.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    priority_vector: parseFloat(item.value),
  }));

  const sortedRows = [...rows].sort((a, b) => b.priority_vector - a.priority_vector);

  rows.forEach(row => {
    row.rank = sortedRows.findIndex(sortedRow => sortedRow.key === row.key) + 1;
  });

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

  const handleResetAHPData = async() => {
    setIsLoading(true);
    try {
      const result = await resetAhpData();
      console.log('result resetting ahp data --- ', result);
      if (result!.success) {
        setIsLoading(false);
        toast.success("AHP data has been reset successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        throw new Error("Failed to reset AHP data");
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row max-lg:flex-col max-lg:gap-10 w-[40%] max-lg:w-[90%] justify-center items-center mt-8">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex p-2 justify-center">
          <h1 className="text-lg">
            AHP Result Overall
          </h1>
        </div>
        <div className="max-lg:w-full lg:w-full w-[80%]">
          <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody 
              items={rows}
              emptyContent={"No AHP result found."}
            >
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {rows.length > 0 && session.user.jabatan == "Admin" && (
          <div className="flex justify-end w-full">
            <Button
              size="sm"
              className="mt-4 bg-primary text-secondary hover:bg-amber-800 hover:text-secondary"
              onClick={() => setIsDeleteClicked(true)}
            >
              <h1>
                Reset AHP Data
              </h1>
            </Button>
          </div>
        )}
      </div>
      <ConfirmationModal
        isOpen={isDeleteClicked}
        onClose={() => setIsDeleteClicked(false)}
        title="Reset AHP Data"
        message="Are you sure you want to reset the AHP data?"
        onConfirm={() => {
          setIsDeleteClicked(false);
          handleResetAHPData();
        }}
      />
      <LoadingScreen
        isLoading={isLoading}
        text="Resetting AHP data..."
      />
      <Toaster 
        expand={true} 
        richColors 
        position="top-center"
      />
    </div>
  );
}

export default AHPResultTable;