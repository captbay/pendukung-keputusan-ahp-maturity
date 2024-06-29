import React from "react";
import { auth } from "@/auth";
import DashboardUiAdmin from "@/app/ui/dashboard-ui-admin/dashboardUiAdmin";
import { getAhpData, getAllUser, getAllUserFormAhp } from "@/lib/actions";
import AhpRecap from "@/app/ui/ahp-recap/ahpRecap";

export default async function AHPRecap() {
  const session = await auth();
  const user = await getAllUser();
  const allAhpData = await getAllUserFormAhp();
  return (
    <AhpRecap 
      data={user!.data}
      ahpData={allAhpData!.data}
    />
  );
}
