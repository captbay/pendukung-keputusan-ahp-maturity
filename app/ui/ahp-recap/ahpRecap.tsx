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

  console.log('this is ahp data --- ', ahpData);

  return (
    <main className="flex flex-col w-full min-h-screen items-center py-10">
      <div className="max-lg:mt-20 mb-[30px] rounded-2xl max-lg:mx-6">
        <h1 className="text-3xl font-bold text-tertiary max-lg:text-2xl text-center p-4">Analytical Hierarchy Process Recap</h1>
      </div>
      <UserRecapTable
        data={ahpData.tableData}
        users={ahpData.users}
      />
    </main>
  );
}

export default AhpRecap;