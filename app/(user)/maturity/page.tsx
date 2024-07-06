
import MaturityPage from "@/app/ui/maturity-page/maturityPage";
import { auth } from "@/auth";

export default async function Maturity() {
  const session = await auth();
  return (
    <MaturityPage
      session={session}
    />
  );
}
