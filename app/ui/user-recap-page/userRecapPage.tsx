"use client";

import MaturityRecapTable, {
  TableRowMaturity,
  User,
} from "@/app/components/maturity-recap-table/maturityRecapTable";
import UserTable from "@/app/components/user-table/userTable";
import { HeaderTabelResultMaturity } from "@/lib/actions";
import React from "react";

interface UserRecapPageProps {
  users:
    | Array<{
        id: string;
        name?: string;
        email?: string;
        avatar?: string;
        role?: string;
        jabatan?: string | null;
        status?: string;
      }>
    | undefined;
}

const UserRecapPage: React.FC<UserRecapPageProps> = ({ users }) => {
  return (
    <main className="flex flex-col w-full min-h-screen items-center py-10">
      <div className="max-lg:mt-20 mb-[30px] rounded-2xl max-lg:mx-6">
        <h1 className="text-3xl font-bold text-tertiary max-lg:text-2xl text-center p-4">
          User Recap
        </h1>
      </div>
      <UserTable data={users} session={null} />
    </main>
  );
};

export default UserRecapPage;
