import Hero from "@/components/Hero";
import About from "@/components/About";
import System from "@/components/System";
import Feedback from "@/components/Feedback";
import Newsletter from "@/components/Newsletter";
import LearnTogether from "@/components/LearnTogether";
import ShareKnowledge from "@/components/ShareKnowledge";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <ShareKnowledge />
      <LearnTogether />
      <System />
      <Feedback />
      <Newsletter />
    </div>
  );
};

export default Home;
