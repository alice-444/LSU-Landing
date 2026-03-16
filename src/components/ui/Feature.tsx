import React from "react";
import { motion } from "framer-motion";
import { FeatureProps } from "@/lib/types";

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center"
  >
    <div className="text-[var(--primary-blue)] mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 text-lg max-w-md">{description}</p>
  </motion.div>
);

export default Feature; 