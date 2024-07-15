
import { getQuestionMaturity } from "@/lib/actions";
import React from "react";

export default async function Playground() {
  // RUN FUNCTION HERE
  const dude = await getQuestionMaturity("clyg1a78w0001wvj961br6ps8");

  console.log(dude?.data);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Playground</h1>
    </div>
  );
}
