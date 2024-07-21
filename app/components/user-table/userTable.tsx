"use client"

import React, { useEffect, useRef, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, Button } from "@nextui-org/react";
import { ActionEyeIcon } from "@/app/icon/ActionEyeIcon";
import { TrashIcon } from "@/app/icon/TrashIcon";
import ConfirmationModal from "@/app/ui/confirmation-modal/confirmationModal";
import { Toaster, toast } from "sonner";
import LoadingScreen from "../loading-screen/loadingScreen";
import { deleteUser, getQuestionMaturity, getResultMaturityUser } from "@/lib/actions";
import { useRouter } from "next/navigation";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import MaturityTable from "../maturity-table/maturityTable";

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
  isAdmin?: boolean;
  session: any;
}

const UserTable: React.FC<UserTableProps> = ({ data, isAdmin, session }) => {
  const [isDeleteClicked, setIsDeleteClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const clickedUser = useRef();
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState<any>();
  const [maturityData, setMaturityData] = useState<any>();
  const [dynamicText, setDynamicText] = useState<string>("");
  const columnsUser = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "ACTIONS", uid: "actions" },
  ];

  useEffect(() => {
    if(selectedUser){
      getMaturityData(selectedUser.id);
    }
  }, [selectedUser]);

  const getMaturityData = async(id: string) => {
    const response = await getQuestionMaturity(id);
    setMaturityData(response?.data);
  };
  
  const handleDeleteUser = async() => {
    setIsLoading(true);
    try{
      const response = await deleteUser(clickedUser.current!);

      if(response?.success){
        setIsLoading(false);
        router.refresh();
        toast.success("User has been deleted");
      } else{
        setIsLoading(false);
        toast.error("Failed to delete user");
      }
    } catch(error){
      setIsLoading(false);
      toast.error("Failed to delete user");
    }
  };
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
      case "actions":
        return (
          <div className="flex justify-center">
            {!isAdmin ? (
              <Tooltip content="Delete User" placement="top">
                <Button
                  className="bg-secondary"
                  onPress={() => {
                    clickedUser.current = data.id;
                    setIsDeleteClicked(true);
                    console.log('clicked user --- ', clickedUser.current);
                  }}
                >
                  <TrashIcon />
                </Button>
              </Tooltip>
            ) : (
              <Tooltip content="View Maturity" placement="top">
                <Button
                  className="bg-secondary"
                  onPress={() => {
                    clickedUser.current = data.id;
                    setSelectedUser(data);
                    setIsLoading(true);
                    setDynamicText("Mengambil maturity data...");
                    setTimeout(() => {
                      onOpen();
                      setIsLoading(false);
                    }, 2000);
                    console.log('clicked user --- ', clickedUser.current);
                  }}
                >
                  <ActionEyeIcon />
                </Button>
              </Tooltip>
            )}
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
      <ConfirmationModal
        isOpen={isDeleteClicked}
        onClose={() => setIsDeleteClicked(false)}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onConfirm={() => {
          setIsDeleteClicked(false);
          setDynamicText("Menghapus pengguna...");
          handleDeleteUser();
        }}
      />
      <LoadingScreen
        isLoading={isLoading}
        text={dynamicText}
      />
      <Toaster 
        expand={true} 
        richColors 
        position="top-center"
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
        size={"5xl"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Maturity Recap for {selectedUser.name}
              </ModalHeader>
              <ModalBody>
                <div className="px-6">
                  <MaturityTable
                    maturityQuestion={maturityData}
                    session={session}
                    isAdmin={true}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default UserTable;