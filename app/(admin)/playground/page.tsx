import { getQuestionMaturityAdmin, getResultMaturityAll, getResultMaturityUser } from "@/lib/actions";
import React from "react";

export default async function Playground() {
  // RUN FUNCTION HERE
  // dicek satu satu yak pin

  // const allMaturity = await getResultMaturityAll();
  // const peruserMaturity = await getResultMaturityUser("clyncawot0001o2ubhpgabn35");
  const questionAdmin = await getQuestionMaturityAdmin();

  // console.log(allMaturity);
  // console.log(peruserMaturity);
  console.log(questionAdmin);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Playground</h1>
    </div>
  );
}
