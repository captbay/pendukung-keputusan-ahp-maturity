import MaturityPage from "@/app/ui/maturity-page/maturityPage";
import { auth } from "@/auth";
import { getQuestionMaturity } from "@/lib/actions";

export default async function Maturity() {
  const session = await auth();
  const questionMaturity = await getQuestionMaturity(session!.user.id);
  console.log('maturity question ---- ', questionMaturity?.data);
  return (
    <MaturityPage
      session={session}
      questionMaturity={questionMaturity?.data}
    />
  );
}
