import Hero from "@/components/home/Hero";
import WhyLearnSup from "@/components/home/WhyLearnSup";
import HowItWorks from "@/components/home/HowItWork";
import Newsletter from "@/components/newsletter/Newsletter";
import CTA from "@/components/CTA";

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
