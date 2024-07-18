"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import UserTable from "@/app/components/user-table/userTable";
import AHPResultTable from "@/app/components/ahp-result-table/ahpResultTable";
import { QuestionPerSection } from "@/lib/actions";
import MaturityQuestionEditTable from "@/app/components/maturity-question-edit-table/maturityQuestionEditTable";

interface MaturityQuestionEditPageProps {
  maturityQuestion: QuestionPerSection[];
}

const MaturityQuestionEditPage: React.FC<MaturityQuestionEditPageProps> = ({ maturityQuestion }) => {
  const router = useRouter();

  return (
    <main className="flex flex-col w-full min-h-screen items-center py-10">
      <div className="max-lg:mt-20 mb-[-30px] rounded-2xl max-lg:mx-6">
        <h1 className="text-3xl font-bold text-tertiary max-lg:text-2xl text-center p-4">Maturity Measurement Question Edit Table</h1>
      </div>
      <div className="flex flex-row max-lg:flex-col max-lg:gap-10 w-[70%] max-lg:w-[90%] justify-center items-center mt-10">
        <MaturityQuestionEditTable
          maturityQuestion={maturityQuestion}
        />
      </div>
    </main>
  );
}

export default MaturityQuestionEditPage;