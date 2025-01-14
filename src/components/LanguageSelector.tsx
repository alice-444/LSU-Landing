import { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { Listbox } from "@headlessui/react";

const languages = [
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
];

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <motion.div
      className="w-3/4 max-w-xs mx-auto my-4 flex items-center space-x-3 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-12 h-12"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10a40 40 0 0130 70"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ADE80" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <FaGlobe className="text-gray-500 text-xl" />
        </motion.div>
      </div>
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <div className="relative w-full">
          <Listbox.Button
            className="w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              {selectedLanguage.label}
            </motion.div>
          </Listbox.Button>
          <motion.div
            className="absolute w-full mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Listbox.Options>
              {languages.map((language) => (
                <Listbox.Option
                  key={language.value}
                  value={language}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {language.label}
                      </span>
                      {selected ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"
                        >
                          ✓
                        </motion.span>
                      ) : null}
                    </motion.div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </motion.div>
        </div>
      </Listbox>
    </motion.div>
  );
};

export default LanguageSelector;