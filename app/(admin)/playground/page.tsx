import { getQuestionMaturityAdmin, getResultMaturityAll, getResultMaturityUser } from "@/lib/actions";
import React from "react";

export default async function Playground() {
  // RUN FUNCTION HERE
  // dicek satu satu yak pin

  const allMaturity = await getResultMaturityAll();

  console.log(allMaturity);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Playground</h1>
    </div>
  );
}
