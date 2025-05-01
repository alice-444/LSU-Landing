import { motion } from "framer-motion";
import { MdLogin } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
};

const NewsletterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    } catch (error) {
      toast.error(
        "Une erreur réseau s'est produite. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <div className="w-full">
      <Toaster position="top-center" />
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <input
            type="email"
            placeholder="Entre ton adresse email"
            className="relative w-full px-6 py-4 text-base bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
            {...register("email", {
              required: "Veuillez entrer une adresse e-mail valide.",
              pattern: {
                value: /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i,
                message: "Adresse e-mail invalide.",
              },
            })}
          />
          {errors.email && (
            <motion.p
              className="absolute -bottom-6 left-0 text-red-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>

        <motion.button
          type="submit"
          className="relative w-full px-5 py-3 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-blue)] to-[var(--primary-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative text-lg font-medium">S'inscrire</span>
          <MdLogin className="relative text-xl group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </motion.form>
    </div>
  );
};

export default NewsletterForm;
