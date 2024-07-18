import MaturityPage from "@/app/ui/maturity-page/maturityPage";
import { auth } from "@/auth";
import { QuestionPerSection, getQuestionMaturity, getResultMaturityUser } from "@/lib/actions";

export default async function Maturity() {
  const session = await auth();
  const questionMaturity = await getQuestionMaturity(session!.user.id);
  const questionMaturityData = questionMaturity?.data as QuestionPerSection[];
  
  const peruserMaturity = await getResultMaturityUser(session?.user.id);
  const perUserMaturityData = peruserMaturity?.success ? peruserMaturity?.data as QuestionPerSection[] : [];
  return (
    <MaturityPage
      session={session}
      questionMaturity={questionMaturityData}
      maturityResult={perUserMaturityData}
    />
  );
}
