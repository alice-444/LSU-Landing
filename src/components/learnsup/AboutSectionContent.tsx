import React from "react";
import { motion } from "framer-motion";
import { SectionContentProps } from "@/lib/types";
import Feature from "@/components/learnsup/Feature";
import TeamMember from "@/components/learnsup/TeamMember";
import Link from "next/link";
import {
  HelpCircle,
  Mail,
  Users,
  GraduationCap,
  Lightbulb,
  HeartHandshake,
  BrainCircuit,
} from "lucide-react";

const AboutSectionContent: React.FC<SectionContentProps> = ({
  activeSection,
}) => {
  const teamMembers = [
    { name: "Julien", role: "Chargé de projet digital", image: "/Sending.png" },
    {
      name: "Vincent",
      role: "Développement commerciale",
      image: "/Sending.png",
    },
    { name: "Quentin", role: "Direction artistique", image: "/Sending.png" },
    {
      name: "Maxence",
      role: "Développement commerciale",
      image: "/Sending.png",
    },
    { name: "Ulysse", role: "UI/UX Design", image: "/Sending.png" },
    { name: "Carole", role: "Développement Web", image: "/Sending.png" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "mission":
        return (
          <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block bg-linear-to-r from-[#4A90E2] to-[#26547C] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
                  Notre Mission
                </div>
                <h2 className="text-4xl sm:text-5xl mb-4">Ce Qui Nous Anime</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Découvrez les valeurs et principes qui guident Learnsup
                </p>
              </div>
              <motion.div
                id="mission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                <Feature
                  title="Apprentissage par les pairs"
                  description="Nous croyons en la puissance de l'apprentissage collaboratif. Notre plateforme facilite les échanges entre étudiants, favorisant l'entraide et le partage de connaissances. Les étudiants peuvent s'entraider, poser des questions et partager leurs expériences."
                  icon={<Users className="w-8 h-8 md:w-10 md:h-10" />}
                />
                <Feature
                  title="Accessibilité universelle"
                  description="Nous rendons l'éducation accessible à tous, en proposant des solutions adaptées aux différents besoins et niveaux d'apprentissage. Notre plateforme est conçue pour être intuitive et accessible à tous les étudiants, quel que soit leur niveau."
                  icon={<GraduationCap className="w-8 h-8 md:w-10 md:h-10" />}
                />
                <Feature
                  title="Innovation pédagogique"
                  description="Nous repensons les méthodes d'apprentissage traditionnelles en intégrant les dernières avancées technologiques et pédagogiques. Notre approche combine le meilleur de l'enseignement traditionnel avec les innovations numériques."
                  icon={<Lightbulb className="w-8 h-8 md:w-10 md:h-10" />}
                />
                <Feature
                  title="Communauté engagée"
                  description="Nous favorisons la création d'une communauté d'apprentis active et engagée. Les étudiants peuvent interagir, partager leurs connaissances et créer des liens durables."
                  icon={<HeartHandshake className="w-8 h-8 md:w-10 md:h-10" />}
                />
              </motion.div>
            </div>
          </section>
        );

      case "approche":
        return (
          <section className="bg-linear-to-b from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
                  Notre Approche
                </div>
                <h2 className="text-4xl sm:text-5xl mb-4">
                  Comment Nous Travaillons
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Une méthodologie centrée sur l'étudiant et l'innovation
                </p>
              </div>
              <motion.div
                id="approche"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl mx-auto"
              >
                <Feature
                  title="Méthodologie active"
                  description="Nous privilégions une approche active où les étudiants sont au cœur de leur apprentissage. Notre plateforme encourage la participation, l'expérimentation et la mise en pratique des connaissances."
                  icon={<BrainCircuit className="w-8 h-8 md:w-10 md:h-10" />}
                />
              </motion.div>
            </div>
          </section>
        );

      case "équipe":
        return (
          <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block bg-linear-to-r from-[#C9A0DC] to-[#A66FD9] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
                  Notre Équipe
                </div>
                <h2 className="text-4xl sm:text-5xl mb-4">
                  Les Visages Derrière Learnsup
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Une équipe passionnée et dédiée à ta réussite
                </p>
              </div>
              <motion.div
                id="équipe"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 justify-items-center">
                  {teamMembers.map((member) => (
                    <TeamMember key={member.name} {...member} />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="bg-linear-to-b from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block bg-linear-to-r from-[#A8D5BA] to-[#7BC9A6] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
                  Contacte-nous
                </div>
                <h2 className="text-4xl sm:text-5xl mb-4">
                  Restons en Contact
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nous sommes à ton écoute pour répondre à toutes tes questions
                  et discuter de tes projets.
                </p>
              </div>
              <motion.div
                id="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-[#4A90E2]/20 transform hover:scale-105 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-linear-to-br from-[#4A90E2] to-[#26547C] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                        <HelpCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Centre d&apos;aide
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Notre équipe est disponible pour répondre à toutes tes
                        questions et vous accompagner.
                      </p>
                      <Link
                        href="/contact"
                        className="bg-linear-to-r from-[#4A90E2] to-[#26547C] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all inline-flex items-center gap-2"
                      >
                        Accéder au centre d&apos;aide
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-[#FFB647]/20 transform hover:scale-105 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-linear-to-br from-[#FFB647] to-[#FF9500] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Partenariats
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Tu souhaites collaborer avec nous ? Contacte-nous pour
                        discuter des opportunités.
                      </p>
                      <Link
                        href="mailto:partenariat@learnsup.fr"
                        className="bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all inline-flex items-center gap-2"
                      >
                        partenariat@learnsup.fr
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
};

export default AboutSectionContent;
