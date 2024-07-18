import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { HeaderTabelResultMaturity } from "@/lib/actions";

export type TableRowMaturity = {
  kriteria: string;
  [key: string]: string;
  avg_result: string;
  recommendation: string;
}

export type User = {
  name: string;
  email: string;
  jabatan: string | null;
}
interface MaturityRecapTableProps {
  data: TableRowMaturity[];
  users: User[];
}

const MaturityRecapTable: React.FC<MaturityRecapTableProps> = ({ data, users }) => {
  const keys = Object.keys(data[0]);

  return (
    <div className="w-[70%] max-lg:w-[90%] flex flex-col gap-14 mt-10 text-center">
      <div>
        <p className="text-lg p-2">Maturity Measurement Result Overall</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">
                  {user.name !== "Kriteria" && user.name !== "Hasil Rata Rata" && user.name !== "Hasil Rekomendasi" 
                    ? user.name + '\'s level'
                    : user.name
                  }
                </TableColumn>
              ))}
          </TableHeader>
          <TableBody
            emptyContent="No data found."
          >
            {data.map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default MaturityRecapTable;