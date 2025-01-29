import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Figures: React.FC = () => {
  const FiguresList = [
    {
      metric: "Accompagnateurs",
      value: "332",
      postfix: "+",
      color: "#ff7849",
    },
    {
      metric: "Étudiants",
      value: "951",
      postfix: "+",
      color: "#ff4d6d",
    },
    {
      metric: "Sujets explorés",
      value: "57",
      postfix: "+",
      color: "#ff914d",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-[#fffaf5] to-[#ffffff]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
        {FiguresList.map((figure, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl font-bold flex items-center"
              style={{ color: figure.color }}
            >
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(figure.value)}
                locale="en-US"
                className="text-5xl font-bold"
                config={{ mass: 1, tension: 130, friction: 40 }}
              />
              <span className="ml-2">{figure.postfix}</span>
            </h2>

            <p
              className="text-xl mt-4 font-semibold"
              style={{ color: figure.color }}
            >
              {figure.metric}
            </p>

            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-[#ff7849] to-[#ff4d6d] mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Figures;
