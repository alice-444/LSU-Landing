import Hero from "@/components/home/Hero";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5]">
      <div className="py-16">
        <Hero />
        {/* <Features />
        <FAQ />
        <Newsletter /> */}
      </div>
    </div>
  );
};

export default Home;
