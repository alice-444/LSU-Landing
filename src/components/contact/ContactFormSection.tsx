import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ContactFormData } from "@/lib/types";
import FormField from "@/components/contact/FormField";
import SubmitButton from "@/components/contact/SubmitButton";
import { clarityEvent, ClarityEvents } from "@/lib/clarity";

const ContactFormSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Tracker la soumission du formulaire
    clarityEvent.track(ClarityEvents.CONTACT_FORM_SUBMIT, {
      subject: data.subject || "unknown",
    });

    try {
      console.log(data);
      toast.success("Message envoyé avec succès !");
      reset();
      
      // Tracker le succès
      clarityEvent.track(ClarityEvents.CONTACT_FORM_SUCCESS, {
        subject: data.subject || "unknown",
      });
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer plus tard.");
      
      // Tracker l'erreur
      clarityEvent.track(ClarityEvents.CONTACT_FORM_ERROR, {
        error: error instanceof Error ? error.message : "unknown_error",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-[#FFB647]/20"
    >
      <div className="mb-6">
        <div className="inline-block bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
          Envoie-nous un message
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Formulaire de contact
        </h2>
        <p className="text-gray-600">
          Remplis le formulaire et on te répondra rapidement
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
  );
};

export default ContactFormSection;
