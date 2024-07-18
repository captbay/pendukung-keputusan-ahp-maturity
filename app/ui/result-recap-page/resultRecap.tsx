"use client"

import MaturityRecapTable, { TableRowMaturity, User } from '@/app/components/maturity-recap-table/maturityRecapTable';
import UserTable from '@/app/components/user-table/userTable';
import { HeaderTabelResultMaturity } from '@/lib/actions';
import React from 'react';

interface ResultRecapPageProps {
  maturityResult: {
    header: HeaderTabelResultMaturity[],
    data: any[];
  } | undefined;
}

const ResultRecapPage: React.FC<ResultRecapPageProps> = ({ maturityResult }) => {
  const maturityResultData = maturityResult!.data as TableRowMaturity[];
  const maturityResultHeader = maturityResult!.header as User[];

  return (
    <main className="flex flex-col w-full min-h-screen items-center py-10">
      <div className="max-lg:mt-20 mb-[30px] rounded-2xl max-lg:mx-6">
        <h1 className="text-3xl font-bold text-tertiary max-lg:text-2xl text-center p-4">Maturity Measurement Recap</h1>
      </div>
      <MaturityRecapTable 
        users={maturityResultHeader}
        data={maturityResultData}
      />
    </main>
  )
};

export default ResultRecapPage;