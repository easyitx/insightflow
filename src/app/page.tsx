import Services from "@/widgets/Services/Services";
import { FAQ } from "@/widgets/FAQ/FAQ";
import { WhyChooseUs } from "@/widgets/WhyChooseUs/WhyChooseUs";
import { ContactCta } from "@/widgets/ContactCta/ContactCta";
import { Spacing } from "@/shared/ui/Spacing";
import { JsonLd } from "@/shared/ui/JsonLd/JsonLd";
import { getHomeStructuredData } from "@/shared/config/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={getHomeStructuredData()} />
      <Services className="app-container" />
      <Spacing size="4xl" direction="vertical" />
      <WhyChooseUs className="app-container" />
      <Spacing size="4xl" direction="vertical" />
      <ContactCta className="app-container" />
      <Spacing size="4xl" direction="vertical" />
      <FAQ className="app-container" />
    </>
  );
}
