import React, { useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import AHPResultTable from "@/app/components/ahp-result-table/ahpResultTable";
import MaturityRecapTable, { TableRowMaturity, User } from "@/app/components/maturity-recap-table/maturityRecapTable";
import { HeaderTabelResultMaturity } from "@/lib/actions";

interface DashboardProps {
  session: any;
  ahpResult: Array<{
    category?: {
      key?: string | null;
    } | null;
    value?: number;
  }> | undefined;
  maturityResult: {
    header: HeaderTabelResultMaturity[],
    data: any[];
  } | undefined
}

const DashboardUi: React.FC<DashboardProps> = ({ session, ahpResult, maturityResult }) => {
  const maturityResultData = maturityResult!.data as TableRowMaturity[];
  const maturityResultHeader = maturityResult!.header as User[];

  console.log('ini maturity reesult dashboard --- ', maturityResultData);

  return (
    <main className="flex flex-col w-full min-h-screen items-center">
      <div className="max-lg:mt-20 mt-10 mb-[-30px] rounded-2xl max-lg:mx-6">
        <h1 className="text-3xl font-bold text-tertiary max-lg:text-lg text-center p-4">Risk Management Maturity Measurement Dashboard</h1>
      </div>
      <div className="flex flex-col max-lg:flex-col w-[90%] max-lg:w-[90%] min-h-screen justify-center items-center">

        <div className="flex flex-col w-full justify-center items-center">
          <AHPResultTable
            ahpResult={ahpResult}
            session={session}
          />
        </div>

        <div className="flex flex-col w-full justify-center items-center mb-6">
          <MaturityRecapTable 
            users={maturityResultHeader}
            data={maturityResultData}
          />
        </div>
      </div>
    </main>
  );
}

export default DashboardUi;