"use client";

import { motion } from "framer-motion";
import type { FC } from "react";
import type { FeatureCardProps } from "@/lib/types";

const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  badge,
}) => (
  <motion.div
    className="relative group overflow-hidden p-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none">
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[var(--primary-blue)]/30 via-[var(--secondary-blue)]/20 to-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </div>
    <div className="relative z-10 flex flex-col items-center p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl group-hover:shadow-[0_8px_32px_0_rgba(74,144,226,0.25)] transition-all duration-300">
      <span className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-[var(--primary-blue)]/20 via-[var(--secondary-blue)]/10 to-white/0 blur-2xl z-0" />
      <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-white/80 shadow-lg border-2 border-[var(--primary-blue)] group-hover:shadow-[0_0_0_8px_var(--primary-blue)] transition-all duration-300 relative z-10">
        <span className="drop-shadow-[0_2px_8px_var(--primary-blue)] text-[var(--primary-blue)]">
          {icon}
        </span>
      </div>
      <h3 className="text-2xl font-extrabold mb-3 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--tertiary-blue)] bg-clip-text text-transparent text-center">
        {title}
      </h3>
      <p className="text-gray-700 text-center text-base leading-relaxed">
        {description}
      </p>
      {badge && (
        <span className="absolute top-4 left-4 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
          {badge}
        </span>
      )}
    </div>
  </motion.div>
);

export default FeatureCard;
