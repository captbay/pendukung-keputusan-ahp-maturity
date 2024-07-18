import React from "react";
import { auth } from "@/auth";
import DashboardUi from "@/app/ui/dashboard-ui/dashboardUi";
import { getAhpData, getResultMaturityAll } from "@/lib/actions";

export default async function Dashboard() {
  const session = await auth();
  const ahpResult = await getAhpData();

  const maturityResultAll = await getResultMaturityAll();
  const maturityResultData = maturityResultAll!.data;

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
