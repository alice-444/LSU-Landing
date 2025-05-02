import { motion } from "framer-motion";
import { Send } from "lucide-react";

const SubmitButton: React.FC<{ isSubmitting: boolean }> = ({
  isSubmitting,
}) => (
  <motion.button
    type="submit"
    disabled={isSubmitting}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--quaternary-blue)] text-white px-4 py-3 sm:py-3 rounded-full text-base sm:text-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
  >
    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
  </motion.button>
);

export default SubmitButton;
