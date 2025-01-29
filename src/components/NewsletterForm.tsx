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
    <div className="max-w-md mx-auto lg:mx-0">
      <Toaster position="top-center" />
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center shadow-lg rounded-full overflow-hidden bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <input
          type="email"
          placeholder="Votre adresse email"
          className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
          {...register("email", {
            required: "Veuillez entrer une adresse e-mail valide.",
            pattern: {
              value: /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i,
              message: "Adresse e-mail invalide.",
            },
          })}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold flex items-center gap-2 hover:from-orange-500 hover:to-pink-600 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          S’inscrire <MdLogin className="text-xl" />
        </button>
      </motion.form>
      {errors.email && (
        <motion.p
          className="text-red-500 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {errors.email.message}
        </motion.p>
      )}
    </div>
  );
};

export default NewsletterForm;
