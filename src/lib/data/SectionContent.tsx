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
  BookOpen,
  Target,
  HeartHandshake,
  BrainCircuit,
} from "lucide-react";
  


const SectionContent: React.FC<SectionContentProps> = ({ activeSection }) => {
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
          <motion.div
            id="mission"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16"
          >
            <Feature
              title="Title 1"
              description="..."
              icon={<Users className="w-8 h-8 md:w-10 md:h-10" />}
            />
            <Feature
              title="Title 2"
              description="..."
              icon={<GraduationCap className="w-8 h-8 md:w-10 md:h-10" />}
            />
            <Feature
              title="Title 3"
              description="..."
              icon={<Lightbulb className="w-8 h-8 md:w-10 md:h-10" />}
            />
            <Feature
              title="Title 5"
              description="..."
              icon={<Users className="w-8 h-8 md:w-10 md:h-10" />}
            />
            <Feature
              title="Title 5"
              description="..."
              icon={<GraduationCap className="w-8 h-8 md:w-10 md:h-10" />}
            />
            <Feature
              title="Title 6"
              description="..."
              icon={<Lightbulb className="w-8 h-8 md:w-10 md:h-10" />}
            />
          </motion.div>
        );

      case "approche":
        return (
          <motion.div
            id="approche"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16"
          >
            <Feature
              title="Title 1"
              description="..."
              icon={<BookOpen className="w-8 h-8 md:w-10 md:h-10" />}
            />
            <Feature
              title="Title 2"
              description="..."
              icon={<Target className="w-8 h-8 md:w-10 md:h-10" />}
            />
            <Feature
              title="Title 3"
              description="..."
              icon={<HeartHandshake className="w-8 h-8 md:w-10 md:h-10" />}
            />
            <Feature
              title="Title 4"
              description="..."
              icon={<BrainCircuit className="w-8 h-8 md:w-10 md:h-10" />}
            />
          </motion.div>
        );

      case "équipe":
        return (
          <motion.div
            id="équipe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Notre équipe
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 justify-items-center">
              {teamMembers.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            id="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Nous contacter
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Nous sommes à votre écoute pour répondre à toutes vos questions
                et discuter de vos projets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary-blue)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                  Centre d&apos;aide
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                  Notre équipe est disponible pour répondre à toutes vos
                  questions et vous accompagner.
                </p>
                <Link
                  href="/contact"
                  className="text-sm md:text-base inline-flex items-center text-[var(--primary-blue)] hover:text-[var(--primary-blue)]/80 font-medium transition-colors"
                >
                  Accéder au centre d&apos;aide
                </Link>
              </div>

              <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary-blue)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                  Partenariats
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                  Vous souhaitez collaborer avec nous ? Contactez-nous pour
                  discuter des opportunités.
                </p>
                <Link
                  href="mailto:partenariat@learnsup.fr"
                  className="text-sm md:text-base inline-flex items-center text-[var(--primary-blue)] hover:text-[var(--primary-blue)]/80 font-medium transition-colors"
                >
                  partenariat@learnsup.fr
                </Link>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {renderSection()}
    </div>
  );
};

export default SectionContent;
