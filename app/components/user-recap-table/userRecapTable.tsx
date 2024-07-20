import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import NotFoundIcon from "@/app/icon/NotFoundIcon";

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

  if (data.length == 0){
    return (
      <div className='flex justify-center items-center flex-col gap-4'>
        <NotFoundIcon />
        <p className="text-center text-xl max-w-[500px] min-w-[500px] mt-[-30px]">No AHP data found.</p>
      </div>
    )
  }
  const keys = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="w-[70%] max-lg:w-[90%] flex flex-col gap-14 mt-10 text-center">
      <div>
        <p className="p-2">Perbandingan Berpasangan Tingkat Kepentingan Antar Kriteria</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            items={data.slice(0, 6)}
            emptyContent="No data found."
          >
            {(item) => (
              <TableRow key={item.key}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div>
        <p className="p-2">Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Size</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            items={data.slice(6, 27)}
            emptyContent="No data found."
          >
            {(item) => (
              <TableRow key={item.key}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div>
        <p className="p-2">Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Complexity</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            items={data.slice(27, 48)}
            emptyContent="No data found."
          >
            {(item) => (
              <TableRow key={item.key}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div>
        <p className="p-2">Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Importance</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            items={data.slice(48, 69)}
            emptyContent="No data found."
          >
            {(item) => (
              <TableRow key={item.key}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div>
        <p className="p-2">Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Approach</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            items={data.slice(69, 90)}
            emptyContent="No data found."
          >
            {(item) => (
              <TableRow key={item.key}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UserRecapTable;