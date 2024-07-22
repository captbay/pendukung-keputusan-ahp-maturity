import React from "react";
import ResultRecapPage from "@/app/ui/result-recap-page/resultRecap";
import { getAllUser, getResultMaturityAll } from "@/lib/actions";
import { auth } from "@/auth";
import UserRecapPage from "@/app/ui/user-recap-page/userRecapPage";

export default async function UserRecap() {
  const user = await getAllUser();
  const maturityResultAll = await getResultMaturityAll();
  const maturityResultData = maturityResultAll!.data;
  const session = await auth();

  console.log("all user --- ", user);
  return (
    <div>
      <UserRecapPage users={user!.data} />
    </div>
  );
}
