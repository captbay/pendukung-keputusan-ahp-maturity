import React from "react";
import ResultRecapPage from "@/app/ui/result-recap-page/resultRecap";
import { getAllUser, getResultMaturityAll } from "@/lib/actions";

export default async function ResultRecap() {
  const user = await getAllUser();
  const maturityResultAll = await getResultMaturityAll();
  const maturityResultData = maturityResultAll!.data;

  return (
    <div>
      <ResultRecapPage 
        maturityResult={maturityResultData!!}
      />
    </div>
  );
}
