import Services from "@/widgets/Services/Services";
import { FAQ } from "@/widgets/FAQ/FAQ";
import { WhyChooseUs } from "@/widgets/WhyChooseUs/WhyChooseUs";
import { Spacing } from "@/shared/ui/Spacing";

export default function Home() {
  return (
    <>
      <Services className="app-container"/>
      <Spacing size="4xl" direction="vertical"/>
      <WhyChooseUs className="app-container"/>
      <Spacing size="4xl" direction="vertical"/>
      <FAQ className="app-container"/>
    </>
  );
}
