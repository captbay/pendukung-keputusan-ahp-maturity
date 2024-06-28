import React from "react";
import { auth } from "@/auth";
import DashboardUiAdmin from "@/app/ui/dashboard-ui-admin/dashboardUiAdmin";
import { getAhpData, getAllUser } from "@/lib/actions";
import AhpRecap from "@/app/ui/ahp-recap/ahpRecap";

export default async function AHPRecap() {
  const session = await auth();
  const user = await getAllUser();
  const ahpResult = await getAhpData();
  return (
    <AhpRecap 
      data={user.data}
    />
  );
}
