import React from "react";
import { auth } from "@/auth";
import DashboardUiAdmin from "@/app/ui/dashboard-ui-admin/dashboardUiAdmin";

export default async function DashboardAdmin() {
  const session = await auth();
  return (
    <DashboardUiAdmin session={session} />
  );
}
