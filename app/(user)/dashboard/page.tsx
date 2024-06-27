import React from "react";
import { auth } from "@/auth";
import DashboardUi from "@/app/ui/dashboard-ui/dashboardUi";
import { getAhpData } from "@/lib/actions";

export default async function Dashboard() {
  const session = await auth();
  const ahpResult = await getAhpData();

  return (
    <>
      <DashboardUi 
        session={session}
        ahpResult={ahpResult}
      />
    </>
  );
}
