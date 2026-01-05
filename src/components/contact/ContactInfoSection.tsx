import React from "react";
import { motion } from "framer-motion";
import { Mails, Smartphone, Map } from "lucide-react";
import { ContactInfo } from "@/lib/types";

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: <Mails className="w-6 h-6" />,
    title: "Email",
    content: "contact@learnsup.com",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Téléphone",
    content: "+33 1 23 45 67 89",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Adresse",
    content: "123 Rue de l'Éducation, 75000 Paris",
  },
];

const ContactInfoSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {CONTACT_INFO.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-[#FFB647] transition-all transform hover:scale-105"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-linear-to-br from-[#FFB647] to-[#FF9500] rounded-xl flex items-center justify-center shadow-lg text-white shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfoSection;
