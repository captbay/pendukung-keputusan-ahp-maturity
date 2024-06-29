import MaturityTable from '@/app/components/maturity-table/maturityTable';
import React from 'react';

const MaturityPage = () => {
  return (
    <main className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <MaturityTable />
    </main>
  );
}

export default MaturityPage