import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { ActionEyeIcon } from "@/app/icon/ActionEyeIcon";

interface TableRow {
  kriteria1: string;
  kriteria2: string;
  bobot: string;
  [key: string]: string;
}
interface User {
  name: string;
  email: string;
  jabatan: string | null;
}
interface UserRecapTableProps {
  data: TableRow[];
  users: User[];
}

const UserRecapTable: React.FC<UserRecapTableProps> = ({ data, users }) => {
  const keys = Object.keys(data[0]);

  return (
    <div className="w-[70%] max-lg:w-[90%]">
      <Table aria-label="Example static collection table">
        <TableHeader>
            {users.map((user, index) => (
              <TableColumn key={index} align="center">{user.name}</TableColumn>
            ))}
        </TableHeader>
        <TableBody>
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
  )
}

export default UserRecapTable;