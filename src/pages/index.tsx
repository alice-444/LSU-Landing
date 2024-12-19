import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Working from "@/components/Working";
import Feedback from "@/components/Feedback";
import Newsletter from "@/components/Newsletter";
import ShareKnowledge from "@/components/ShareKnowledge";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <ShareKnowledge />
      <Stats />
      <Feedback />
      <Working />
      <Newsletter />
    </div>
  );
};

export default Home;
