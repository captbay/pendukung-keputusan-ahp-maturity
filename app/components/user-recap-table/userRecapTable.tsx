import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";

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
    <div className="w-[70%] max-lg:w-[90%] flex flex-col gap-14 mt-10 text-center">
      <div>
        <p>Perbandingan Berpasangan Tingkat Kepentingan Antar Kriteria</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            emptyContent="No data found."
          >
            {data.slice(0, 6).map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <p>Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Size</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            emptyContent="No data found."
          >
            {data.slice(6, 27).map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <p>Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Complexity</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            emptyContent="No data found."
          >
            {data.slice(27, 48).map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <p>Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Importance</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            emptyContent="No data found."
          >
            {data.slice(48, 69).map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                {keys.map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{item[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <p>Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Approach</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {users.map((user, index) => (
                <TableColumn key={index} align="center">{user.name}</TableColumn>
              ))}
          </TableHeader>
          <TableBody
            emptyContent="No data found."
          >
            {data.slice(69, 90).map((item, rowIndex) => (
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

export default UserRecapTable;