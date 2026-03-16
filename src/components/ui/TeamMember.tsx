import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMemberProps } from "@/lib/types";

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden"
  >
    <div className="aspect-square w-48 mx-auto relative overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-white/90 text-sm">{role}</p>
      </div>
    </div>
  </motion.div>
);

export default TeamMember; 