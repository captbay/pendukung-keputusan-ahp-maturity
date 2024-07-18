import React from "react";
import { auth } from "@/auth";
import DashboardUiAdmin from "@/app/ui/dashboard-ui-admin/dashboardUiAdmin";
import { getAhpData, getAllUser, getQuestionMaturityAdmin } from "@/lib/actions";
import MaturityQuestionEditPage from "@/app/ui/maturity-question-edit-page/maturityQuestionEditPage";

export default async function MaturityQuestionEdit() {
  const session = await auth();
  const user = await getAllUser();
  const ahpResult = await getAhpData();
  const maturityQuestion = await getQuestionMaturityAdmin();
  console.log('ini maturity question --- ', maturityQuestion?.data);
  return (
    <MaturityQuestionEditPage 
      maturityQuestion={maturityQuestion!.data}
    />
  );
}
