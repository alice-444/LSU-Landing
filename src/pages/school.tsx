import SchoolsHero from "@/components/domain/school/SchoolsHero";
import BenefitsSection from "@/components/domain/school/BenefitsSection";
import FeaturesSection from "@/components/domain/school/FeaturesSection";
import ProcessSection from "@/components/domain/school/ProcessSection";
import SchoolsCTA from "@/components/domain/school/SchoolsCTA";
import { benefits, features, processSteps } from "@/lib/data/school";

const SchoolsPage = () => {
  return (
    <div className="min-h-screen">
      <SchoolsHero />
      <BenefitsSection benefits={benefits} />
      <FeaturesSection features={features} />
      <ProcessSection steps={processSteps} />
      <SchoolsCTA />
    </div>
  );
};

export default SchoolsPage;
