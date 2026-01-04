import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    {
      category: "LearnSup",
      items: [
        { label: "Mission", href: "/learnsup?section=mission" },
        { label: "Approche", href: "/learnsup?section=approche" },
        { label: "Équipe", href: "/learnsup?section=équipe" },
        { label: "Nous Contacter", href: "/learnsup?section=contact" },
      ],
    },
    {
      category: "Aide & Support",
      items: [
        { label: "FAQ", href: "/faq" },
        { label: "Centre d'aide", href: "/learnsup?section=contact" },
      ],
    },
    {
      category: "Légal",
      items: [
        { label: "Confidentialité", href: "/privacy" },
        { label: "Mentions légales", href: "/legal-notice" },
        { label: "CGU", href: "cgu" },
      ],
    },
  ];

  const socials = [
    {
      icon: Mail,
      href: "mailto:contact@learnsup.com",
      label: "Email",
      color: "#FFB647",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "#C9A0DC",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "#4A90E2",
    },

    {
      icon: Youtube,
      href: "#",
      label: "Youtube",
      color: "#FF6B6B",
    },
  ];

  return (
    <footer className="relative bg-linear-to-br from-orange-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#FFB647] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#C9A0DC] rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/2 w-72 h-72 bg-[#A8D5BA] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src="/logo/logo_horizontal.png"
                  alt="LearnSup"
                  width={120}
                  height={60}
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Apprendre ensemble ?{" "}
                <span className="text-[#FF9500] font-bold">
                  C'est possible !
                </span>{" "}
              </p>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="group w-12 h-12 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-[0_6px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.1)] hover:translate-y-1 border-3 border-gray-900"
                      style={{
                        backgroundColor: social.color,
                        borderColor: "#1a1a1a",
                        borderWidth: "3px",
                      }}
                      title={social.label}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={3} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {links.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <h4 className="text-gray-900 font-black mb-3 text-sm uppercase tracking-wide">
                {section.category}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-[#FFB647] transition-all hover:translate-x-1 inline-block font-medium text-sm group"
                    >
                      <span className="relative">
                        {item.label}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FFB647] transition-all group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.hr
          className="w-3/4 mx-auto border-gray-900 my-4"
          initial={{ width: "0%" }}
          animate={{ width: "75%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.p
          className="text-center text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          © {currentYear} LearnSup. Tous droits réservés.{" "}
          <span className="text-sm font-semibold text-[#FF9500]">
            FOR STUDENTS. BY STUDENTS.
          </span>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
