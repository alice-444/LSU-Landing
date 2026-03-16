import CTA from "@/components/shared/CTA";
import ServicesHero from "@/components/domain/services/ServicesHero";
import UniqueFeaturesSection from "@/components/domain/services/UniqueFeaturesSection";
import WorkshopsSection from "@/components/domain/services/WorkshopsSection";
import ComparisonTableSection from "@/components/domain/services/ComparisonTableSection";
import DemoSection from "@/components/domain/services/DemoSection";
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
