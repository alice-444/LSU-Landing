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
        const result = await response.json();
        toast.error("Erreur lors de l'inscription.");
      }
    } catch (error) {
      toast.error(
        "Une erreur réseau s'est produite. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center gap-4 mt-4"
      >
        <div className="flex items-center w-full max-w-md rounded-full border border-green-600 overflow-hidden">
          <input
            type="email"
            placeholder="Votre adresse mail"
            className="flex-grow px-4 py-2 focus:outline-none text-gray-600"
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
            className="px-6 py-2 bg-green-600 text-white font-semibold flex items-center gap-2 hover:bg-green-700 transition"
          >
            S’inscrire <MdLogin />
          </button>
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;
