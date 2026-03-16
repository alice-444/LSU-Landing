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
    className="w-full bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-4 py-3 sm:py-3 rounded-2xl text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105"
  >
    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
  </motion.button>
);

export default SubmitButton;
