import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
};

const NewsletterForm = () => {
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
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Erreur de connexion. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold mb-4 text-center">Abonnez-vous</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <input
            type="email"
            placeholder="Votre e-mail"
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            {...register("email", {
              required: "L'e-mail est requis",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Format d'e-mail invalide",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go!
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
