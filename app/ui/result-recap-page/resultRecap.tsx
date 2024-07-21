import MaturityRecapTable, { TableRowMaturity, User } from '@/app/components/maturity-recap-table/maturityRecapTable';
import UserTable from '@/app/components/user-table/userTable';
import { HeaderTabelResultMaturity } from '@/lib/actions';
import React from 'react';

interface ResultRecapPageProps {
  session: any;
  users: Array<{
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    role?: string;
    jabatan?: string | null;
    status?: string;
  }> | undefined;
}

const ResultRecapPage: React.FC<ResultRecapPageProps> = ({ session, users }) => {

  return (
    <main className="flex flex-col w-full min-h-screen items-center py-10">
      <div className="max-lg:mt-20 mb-[30px] rounded-2xl max-lg:mx-6">
        <h1 className="text-3xl font-bold text-tertiary max-lg:text-2xl text-center p-4">Maturity Measurement Recap</h1>
      </div>
      <UserTable
        data={users}
        isAdmin={true}
        session={session}
      />
    </main>
  )
};

export default ResultRecapPage;