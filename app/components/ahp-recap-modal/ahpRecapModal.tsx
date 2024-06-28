import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell  } from "@nextui-org/react";
import UserTable from "../user-table/userTable";

interface AHPRecapModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  message?: string;
  data: 
  Array<{
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    role?: string;
    jabatan?: string | null;
    status?: string;
  }> | undefined;
}

const AHPRecapModal: React.FC<AHPRecapModalProps> = ({
  isOpen,
  onClose,
  header = "Confirm Action",
  data
}) => {
  const tableData = [
    { kriteria1: "Project Size", responden1: "0.50", responden2: "0.5", responden3: "3", kriteria2: "Project Complexity", bobot: "0.91" },
    { kriteria1: "Project Size", responden1: "2.00", responden2: "1", responden3: "3", kriteria2: "Project Importance", bobot: "1.82" },
    { kriteria1: "Project Size", responden1: "1.00", responden2: "1", responden3: "3", kriteria2: "Development Approach", bobot: "1.44" },
    { kriteria1: "Project Complexity", responden1: "4.00", responden2: "3", responden3: "2", kriteria2: "Project Importance", bobot: "2.88" },
    { kriteria1: "Project Complexity", responden1: "1.00", responden2: "3", responden3: "3", kriteria2: "Development Approach", bobot: "2.08" },
    { kriteria1: "Project Importance", responden1: "1.00", responden2: "2", responden3: "2", kriteria2: "Development Approach", bobot: "1.59" },
  ];
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      aria-label="modal"
      size="4xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
        <ModalBody>
          <div className="flex justify-center items-center flex-col">
            <Table aria-label="Example static collection table">
              <TableHeader>
                  <TableColumn align="center">Kriteria</TableColumn>
                  <TableColumn align="center">Responden</TableColumn>
                  <TableColumn align="center">Responden</TableColumn>
                  <TableColumn align="center">Responden</TableColumn>
                  <TableColumn align="center">Kriteria</TableColumn>
                  <TableColumn align="center">Bobot</TableColumn>
              </TableHeader>
              <TableBody>
                {tableData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.kriteria1}</TableCell>
                    <TableCell>{item.responden1}</TableCell>
                    <TableCell>{item.responden2}</TableCell>
                    <TableCell>{item.responden3}</TableCell>
                    <TableCell>{item.responden3}</TableCell>
                    <TableCell>{item.responden3}</TableCell>
                    <TableCell>{item.responden3}</TableCell>
                    <TableCell>{item.kriteria2}</TableCell>
                    <TableCell>{item.bobot}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          <Spacer y={1} />
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default AHPRecapModal;