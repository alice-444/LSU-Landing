import Hero from "@/components/domain/home/Hero";
import WhyLearnSup from "@/components/domain/home/WhyLearnSup";
import HowItWorks from "@/components/domain/home/HowItWork";
import Newsletter from "@/components/shared/Newsletter";
import CTA from "@/components/shared/CTA";

const Home: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-[#fffaf5] via-white to-[#fffaf5]">
      <div className="py-10">
        <Hero />
        <HowItWorks />
        <WhyLearnSup />
        <Newsletter />
        <CTA />
      </div>
    </div>
  );
};

export default Home;
