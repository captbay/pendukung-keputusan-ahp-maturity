import React from "react";
import ResultRecapPage from "@/app/ui/result-recap-page/resultRecap";
import { getAllUser, getResultMaturityAll } from "@/lib/actions";
import { auth } from "@/auth";

export default async function ResultRecap() {
  const user = await getAllUser();
  const session = await auth();

  return (
    <div>
      <ResultRecapPage 
        session={session}
        users={user!.data}
      />
    </div>
  );
}
