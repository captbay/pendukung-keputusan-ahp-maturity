import React from "react";
import { auth } from "@/auth";
import DashboardUiAdmin from "@/app/ui/dashboard-ui-admin/dashboardUiAdmin";
import { getAhpData, getAllUser, getQuestionMaturityAdmin, getResultMaturityAll } from "@/lib/actions";

export default async function DashboardAdmin() {
  const session = await auth();
  const user = await getAllUser();
  const ahpResult = await getAhpData();
  const maturityResult = await getResultMaturityAll();
  return (
    // <></>
    <DashboardUiAdmin 
      session={session} 
      data={user!.data}
      ahpResult={ahpResult!.data}
      maturityResult={maturityResult!.data}
    />
  );
}
