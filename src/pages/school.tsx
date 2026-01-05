import SchoolsHero from "@/components/school/SchoolsHero";
import BenefitsSection from "@/components/school/BenefitsSection";
import FeaturesSection from "@/components/school/FeaturesSection";
import ProcessSection from "@/components/school/ProcessSection";
import SchoolsCTA from "@/components/school/SchoolsCTA";
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
