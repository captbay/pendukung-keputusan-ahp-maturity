"use client"

import UserTable from '@/app/components/user-table/userTable';
import React from 'react';

interface ResultRecapPageProps {
  data: Array<{
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    role?: string;
    jabatan?: string | null;
    status?: string;
  }> | undefined;
}

const ResultRecapPage: React.FC<ResultRecapPageProps> = ({ data }) => {
  return (
    <main className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <UserTable
        data={data}
      />
    </main>
  )
};

export default ResultRecapPage;