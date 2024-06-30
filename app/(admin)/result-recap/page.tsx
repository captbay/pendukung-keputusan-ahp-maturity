import React from "react";
import ResultRecapPage from "@/app/ui/result-recap-page/resultRecap";
import { getAllUser } from "@/lib/actions";

export default async function ResultRecap() {
  const user = await getAllUser();
  return (
    <div>
      <ResultRecapPage 
        data={user!.data}
      />
    </div>
  );
}
