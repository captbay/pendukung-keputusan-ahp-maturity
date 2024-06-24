import React from "react";
import { auth } from "@/auth";
import DashboardUi from "@/app/ui/dashboard-ui/dashboardUi";

export default async function Dashboard() {
  const session = await auth();
  return (
    <DashboardUi session={session} />
  );
}
