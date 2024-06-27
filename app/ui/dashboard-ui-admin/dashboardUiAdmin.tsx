"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { ActionEyeIcon } from "@/app/icon/ActionEyeIcon";
import UserTable from "@/app/components/user-table/userTable";
import AHPResultTable from "@/app/components/ahp-result-table/ahpResultTable";

interface DashboardProps {
  session: any;
  data: Array<{
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    role?: string;
    jabatan?: string | null;
    status?: string;
  }> | undefined;
  ahpResult: Array<{
    category?: {
      key?: string | null;
    } | null;
    value?: number;
  }> | undefined;
}

const DashboardUiAdmin: React.FC<DashboardProps> = ({ session, data, ahpResult }) => {
  const router = useRouter();

  useEffect(() => {
    if (session?.user.jabatan === "Admin") {
      router.replace("/dashboard-admin");
    }
  }, [session, router]);

  useEffect(() => {
    if (data) {
      console.log('this is data --- ', data);
    }
  }, [data]);

  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center">
      <div className="flex flex-row max-lg:flex-col max-lg:gap-10 w-[70%] max-lg:w-[90%] justify-center items-center mt-8">
        <AHPResultTable
          ahpResult={ahpResult}
        />
      </div>
      <UserTable
        data={data}
      />
    </main>
  );
}

export default DashboardUiAdmin;