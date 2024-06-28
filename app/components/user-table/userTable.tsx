import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { ActionEyeIcon } from "@/app/icon/ActionEyeIcon";

interface UserTableProps {
  data: Array<{
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    role?: string;
    jabatan?: string | null;
    status?: string;
  }> | undefined;
}

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  const columnsUser = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },

  ];

  const renderCell = React.useCallback((data: any, columnKey: string) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: data.avatar }}
            description={data.email}
            name={cellValue}
          >
            {data.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{data.jabatan ? data.jabatan : "null"}</p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="flex flex-col mt-10 max-lg:w-[90%] w-full justify-center items-center">
      <div className="flex w-[70%] max-lg:w-[100%]">
        <Table aria-label="Maturity Table">
          <TableHeader columns={columnsUser}>
            {(column) => (
              <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={data}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey.toString())}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UserTable;