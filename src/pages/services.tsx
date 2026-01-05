import CTA from "@/components/CTA";
import ServicesHero from "@/components/services/ServicesHero";
import UniqueFeaturesSection from "@/components/services/UniqueFeaturesSection";
import WorkshopsSection from "@/components/services/WorkshopsSection";
import ComparisonTableSection from "@/components/services/ComparisonTableSection";
import DemoSection from "@/components/services/DemoSection";
import {
  competitors,
  comparisonFeatures,
  uniqueFeatures,
  benefits,
} from "@/lib/data/services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <UniqueFeaturesSection features={uniqueFeatures} />
      <WorkshopsSection benefits={benefits} />
      <ComparisonTableSection
        competitors={competitors}
        features={comparisonFeatures}
      />
      <DemoSection />
      <CTA />
    </div>
  );
};

export default ServicesPage;
