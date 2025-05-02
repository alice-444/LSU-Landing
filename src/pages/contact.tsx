import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { MessageCircleQuestion, Mails, Smartphone, Map } from "lucide-react";
import { ContactFormData, ContactInfo } from "@/lib/types";
import ContactInfoItem from "@/components/contact/ContactInfoItem";
import FormField from "@/components/contact/FormField";
import SubmitButton from "@/components/contact/SubmitButton";

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: <Mails className="w-5 h-5" />,
    title: "Email",
    content: "contact@learnsup.com",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Téléphone",
    content: "+33 1 23 45 67 89",
  },
  {
    icon: <Map className="w-5 h-5" />,
    title: "Adresse",
    content: "123 Rue de l'Éducation, 75000 Paris",
  },
];

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log(data);
      toast.success("Message envoyé avec succès !");
      reset();
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5] px-4 sm:px-6 py-29">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <MessageCircleQuestion className="text-[var(--primary-blue)] w-12 h-12 sm:w-16 sm:h-16" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
            >
              Contactez-nous
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-[var(--quaternary-blue)] max-w-2xl mx-auto px-4 sm:px-0"
            >
              Nous sommes là pour répondre à toutes vos questions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              {CONTACT_INFO.map((item, index) => (
                <ContactInfoItem key={index} item={item} index={index} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="px-4 sm:px-0"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-6"
              >
                <FormField
                  label="Nom"
                  id="name"
                  register={register}
                  errors={errors}
                  placeholder="Ton nom"
                  validation={{ required: "Le nom est requis" }}
                />

                <FormField
                  label="Email"
                  id="email"
                  type="email"
                  register={register}
                  errors={errors}
                  placeholder="ton@email.com"
                  validation={{
                    required: "L'email est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide",
                    },
                  }}
                />

                <FormField
                  label="Sujet"
                  id="subject"
                  register={register}
                  errors={errors}
                  placeholder="Sujet de ton message"
                  validation={{ required: "Le sujet est requis" }}
                />

                <FormField
                  label="Message"
                  id="message"
                  register={register}
                  errors={errors}
                  placeholder="Ton message..."
                  validation={{ required: "Le message est requis" }}
                  isTextarea
                />

                <SubmitButton isSubmitting={isSubmitting} />
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
