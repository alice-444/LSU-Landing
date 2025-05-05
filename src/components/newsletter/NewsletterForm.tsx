import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
};

const NewsletterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Merci pour votre inscription !");
        reset();
      } else {
        toast.error("Erreur lors de l'inscription.");
      }
    } catch {
      toast.error(
        "Une erreur réseau s'est produite. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Toaster position="top-center" />
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row items-center justify-center w-full px-2 py-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="flex w-full sm:w-auto relative">
          <input
            type="email"
            placeholder="Entre ton adresse email"
            className="relative w-full sm:w-80 px-4 py-2.5 text-base bg-white border border-gray-200 rounded-l-full rounded-r-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent transition-all duration-300 shadow-sm placeholder-gray-400 font-medium tracking-wide"
            {...register("email", {
              required: "Veuillez entrer une adresse e-mail valide.",
              pattern: {
                value: /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i,
                message: "Adresse e-mail invalide.",
              },
            })}
          />
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--quaternary-blue)] text-white px-5 py-3 text-base font-semibold rounded-r-full rounded-l-none shadow-sm hover:shadow-md transition-all duration-300 hover:opacity-90 whitespace-nowrap h-full"
            style={{ minHeight: 'auto', width: 'auto' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            S&apos;inscrire
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default NewsletterForm;
