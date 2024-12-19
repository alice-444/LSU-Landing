import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ShareKnowledge: React.FC = () => {
  const images = [
    "/studentWorking.jpg",
    "/team-collaboration-2.jpg",
    "/team-collaboration-3.jpg",
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center">
          <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-md">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              className="rounded-lg"
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">
            Envie de partager vos connaissances ?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Faites la différence en devenant une source d'inspiration pour
            d'autres étudiants ! En proposant des cours dans votre domaine
            d'expertise, vous contribuez à construire une communauté solidaire
            où chacun peut apprendre et grandir.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Que ce soit pour approfondir une matière, développer une compétence
            pratique ou explorer une passion commune, vos connaissances peuvent
            transformer le parcours d’un autre étudiant.
          </p>
        </div>
      </div>

      <div className="mt-12 mx-auto max-w-2xl text-center">
        <p className="text-lg text-gray-700 font-normal">
          Partagez votre savoir, gagnez en confiance et enrichissez vos propres
          compétences pédagogiques. Ensemble, créons un réseau où
          l’apprentissage est une aventure collective et stimulante.
        </p>
      </div>
    </div>
  );
};

export default ShareKnowledge;
