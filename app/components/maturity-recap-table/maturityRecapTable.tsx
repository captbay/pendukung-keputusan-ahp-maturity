"use client";
import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, Button } from "@nextui-org/react";
import { HeaderTabelResultMaturity, resetMaturityData } from "@/lib/actions";
import { Toaster, toast } from "sonner";
import LoadingScreen from "../loading-screen/loadingScreen";
import ConfirmationModal from "@/app/ui/confirmation-modal/confirmationModal";

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
  session: any;
}

const MaturityRecapTable: React.FC<MaturityRecapTableProps> = ({ session, data, users }) => {
  const [isDeleteClicked, setIsDeleteClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleResetMaturityData = async () => {
    setIsLoading(true);
    try {
      const result = await resetMaturityData();
      console.log('result resetting Maturity data --- ', result);
      if (result!.success) {
        setIsLoading(false);
        toast.success("Maturity data has been reset successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        throw new Error("Failed to reset Maturity data");
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const keys = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="w-[70%] max-lg:w-[90%] flex flex-col text-center">
      <div>
        <p className="text-lg p-2 mt-8">Maturity Measurement Result Overall</p>
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
            items={data}
            emptyContent="No data found."
          >
            {(item) => (
              <TableRow key={item.recommendation}>
              {keys.map((key, cellIndex) => (
                <TableCell key={cellIndex}>{item[key]}</TableCell>
              ))}
            </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {data.length > 0 && session.user.jabatan == "Admin" && (
        <div className="flex justify-end w-full">
          <Button
            size="sm"
            className="bg-primary mt-4 text-secondary hover:bg-amber-800 hover:text-secondary"
            onClick={() => setIsDeleteClicked(true)}
          >
            <h1>
              Reset Maturity Data
            </h1>
          </Button>
        </div>
      )}
      <ConfirmationModal
        isOpen={isDeleteClicked}
        onClose={() => setIsDeleteClicked(false)}
        title="Reset Maturity Data"
        message="Are you sure you want to reset the Maturity data?"
        onConfirm={() => {
          setIsDeleteClicked(false);
          handleResetMaturityData();
        }}
      />
      <LoadingScreen
        isLoading={isLoading}
        text="Resetting Maturity data..."
      />
      <Toaster
        expand={true} 
        richColors 
        position="top-center"
      />
    </div>
  )
}

export default MaturityRecapTable;