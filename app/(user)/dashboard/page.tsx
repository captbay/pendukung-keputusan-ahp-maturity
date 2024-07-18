import React from "react";
import { auth } from "@/auth";
import DashboardUi from "@/app/ui/dashboard-ui/dashboardUi";
import { getAhpData, getResultMaturityAll, HeaderTabelResultMaturity } from "@/lib/actions";

export default async function Dashboard() {
  const session = await auth();
  const ahpResult = await getAhpData();

  const maturityResultAll = await getResultMaturityAll();
  const maturityResultData1 = maturityResultAll!.data;

  // print maturityResultData1
  console.log('maturityResultData1 --- ', maturityResultData1);
  
  const maturityResultData : {
    header: HeaderTabelResultMaturity[],
    data: any[]
  } = {
    header: [],
    data: []
  }

  return (
    <>
      <DashboardUi 
        session={session}
        ahpResult={ahpResult!.data}
        maturityResult={maturityResultData}
      />
    </>
  );
}
