import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";

interface TableRow {
  kriteria: string;
  [key: string]: string;
  avg_result: string;
  recommendation: string;
}
interface User {
  name: string;
  email: string;
  jabatan: string | null;
}
interface MaturityRecapTableProps {
  data: TableRow[];
  users: User[];
}

// const MaturityRecapTable: React.FC<MaturityRecapTableProps> = ({ data, users }) => {
const MaturityRecapTable = () => {
  const usersTemp: User[] = [
    {
      name: "Kriteria",
      email: "",
      jabatan: ""
    },
    {
      name: "User One",
      email: "user_one@mail.com",
      jabatan: "Manager"
    },
    {
      name: "User Two",
      email: "user_two@mail.com",
      jabatan: "Manager"
    },
    {
      name: "User Three",
      email: "user_three@mail.com",
      jabatan: "Manager"
    },
    {
      name: "Hasil Rata Rata",
      email: "",
      jabatan: ""
    },
    {
      name: "Hasil Rekomendasi",
      email: "",
      jabatan: ""
    }
  ]

  const maturityResultTemp: TableRow[] = [
    {
      kriteria: "Plan Risk Management",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: "Tingkatkan lagi"
    },
    {
      kriteria: "Project Risks",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: ""
    },
    {
      kriteria: "Plan Quantitative Analysis Research",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: "Tingkatkan lagi"
    },
    {
      kriteria: "Plan Risk Management",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: "Tingkatkan lagi"
    },
    {
      kriteria: "Project Risks",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: ""
    },
    {
      kriteria: "Plan Quantitative Analysis Research",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: "Tingkatkan lagi"
    },
    {
      kriteria: "Plan Risk Management",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: "Tingkatkan lagi"
    },
    {
      kriteria: "Project Risks",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: ""
    },
    {
      kriteria: "Plan Quantitative Analysis Research",
      "User One": "5",
      "User Two": "3",
      "User Three": "4",
      avg_result: "4",
      recommendation: "Tingkatkan lagi"
    }
  ]
  // const keys = Object.keys(data[0]);
  const keys = Object.keys(maturityResultTemp[0]);

  return (
    <div className="w-[70%] max-lg:w-[90%] flex flex-col gap-14 mt-10 text-center">
      <div>
        <p className="text-lg p-2">Maturity Measurement Result Overall</p>
        <Table aria-label="Example static collection table">
          <TableHeader>
              {usersTemp.map((user, index) => (
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
            {maturityResultTemp.map((item, rowIndex) => (
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