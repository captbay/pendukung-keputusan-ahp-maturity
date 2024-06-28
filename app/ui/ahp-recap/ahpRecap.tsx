"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import UserRecapTable from "@/app/components/user-recap-table/userRecapTable";
import AHPRecapModal from "@/app/components/ahp-recap-modal/ahpRecapModal";
import ConfirmationModal from "../confirmation-modal/confirmationModal";

interface AhpRecapProps {
  data: Array<{
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    role?: string;
    jabatan?: string | null;
    status?: string;
  }> | undefined;
  // ahpResult: Array<{
  //   category?: {
  //     key?: string | null;
  //   } | null;
  //   value?: number;
  // }> | undefined;
}

const AhpRecap: React.FC<AhpRecapProps> = ({ data }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const selectedUser = useRef<any>(null);

  useEffect(() => {
    if (data) {
      console.log('this is data --- ', data);
    }
  }, [data]);

  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center">
      <UserRecapTable
        data={data}
        // viewOnClick={(item) => {
        //   console.log('viewOnClick ', item);
        //   selectedUser.current = item;
        //   setIsOpen(true);
        // }}
      />
      {/* make the modal to show ahp table recap here */}
      {isOpen && (
        <AHPRecapModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          data={data}
          header={`AHP Recap for ${selectedUser.current?.name}`}
        />
      )}
    </main>
  );
}

export default AhpRecap;