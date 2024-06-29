import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";

interface AHPResultTableProps {
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

const AHPResultTable: React.FC<AHPResultTableProps> = ({ ahpResult }) => {

  const rows: RowData[] = ahpResult!.map((item: any) => ({
    key: item.category.key,
    kriteria: item.category.key.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    priority_vector: parseFloat(item.value), // Ensure priority_vector is a number
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

  return (
    <div className="flex flex-row max-lg:flex-col max-lg:gap-10 w-[70%] max-lg:w-[90%] justify-center items-center mt-8">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex p-2 justify-center">
          <h1 className="text-lg">
            AHP Result from User
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
  );
}

export default AHPResultTable;