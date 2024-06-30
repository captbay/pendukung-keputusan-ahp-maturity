"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import UserRecapTable from "@/app/components/user-recap-table/userRecapTable";
import AHPRecapModal from "@/app/components/ahp-recap-modal/ahpRecapModal";

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
  ahpData: any;
}

const AhpRecap: React.FC<AhpRecapProps> = ({ data, ahpData }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const selectedUser = useRef<any>(null);

  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center py-10">
      <UserRecapTable
        data={ahpData.tableData}
        users={ahpData.users}
      />
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