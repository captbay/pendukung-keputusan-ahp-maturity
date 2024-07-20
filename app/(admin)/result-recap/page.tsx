import React from "react";
import ResultRecapPage from "@/app/ui/result-recap-page/resultRecap";
import { getAllUser, getResultMaturityAll } from "@/lib/actions";
import { auth } from "@/auth";

export default async function ResultRecap() {
  const user = await getAllUser();
  const maturityResultAll = await getResultMaturityAll();
  const maturityResultData = maturityResultAll!.data;
  const session = await auth();

  return (
    <div>
      <ResultRecapPage 
        maturityResult={maturityResultData}
        session={session}
      />
    </div>
  );
}
