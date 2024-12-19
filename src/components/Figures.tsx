import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Figures: React.FC = () => {
  const FiguresList = [
    {
      metric: "Accompagnateurs",
      value: "332",
      postfix: "+",
    },
    {
      metric: "Étudiants",
      value: "951",
      postfix: "+",
    },
    {
      metric: "Sujets explorés",
      value: "57",
      postfix: "+",
    },
  ];

  return (
    <div className="py-8 px-4 bg-white">
      <div className="flex flex-col sm:flex-row justify-around items-center">
        {FiguresList.map((figure, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-[#000080] text-4xl font-bold flex flex-row">
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(figure.value)}
                locale="en-US"
                className="text-[#000080] text-4xl font-bold"
              />
              {figure.postfix}
            </h2>
            <p className="text-black text-base mt-2">{figure.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Figures;
