import { ContactInfo } from "@/lib/types";
import { motion } from "framer-motion";

const ContactInfoItem: React.FC<{ item: ContactInfo; index: number }> = ({
  item,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
    className="flex items-start space-x-4 px-4 sm:px-0"
  >
    <div className="text-[var(--primary-blue)] flex-shrink-0">{item.icon}</div>
    <div>
      <h3 className="font-semibold text-[var(--primary-blue)] text-xl sm:text-lg">
        {item.title}
      </h3>
      <p className="text-[var(--quaternary-blue)] mt-1 text-lg sm:text-sm">
        {item.content}
      </p>
    </div>
  </motion.div>
);

export default ContactInfoItem;
