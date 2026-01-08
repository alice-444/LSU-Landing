import React from "react";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import { clarityEvent, ClarityEvents } from "@/lib/clarity";

type NewsletterFormData = {
  email: string;
};

const NewsletterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    // Tracker l'inscription à la newsletter
    clarityEvent.track(ClarityEvents.NEWSLETTER_SUBSCRIBE);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Merci pour votre inscription !");
        reset();

        // Tracker le succès
        clarityEvent.track(ClarityEvents.NEWSLETTER_SUCCESS);
      } else {
        toast.error("Erreur lors de l&apos;inscription.");

        // Tracker l'erreur
        clarityEvent.track(ClarityEvents.NEWSLETTER_ERROR, {
          status: response.status.toString(),
        });
      }
    } catch (error) {
      toast.error(
        "Une erreur réseau s&apos;est produite. Veuillez réessayer plus tard."
      );

      // Tracker l'erreur réseau
      clarityEvent.track(ClarityEvents.NEWSLETTER_ERROR, {
        error: "network_error",
      });
    }
  };

  return (
    <div className="bg-linear-to-br from-orange-50 to-purple-50 rounded-[24px] p-8 border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail className="w-5 h-5" strokeWidth={3} />
          </div>
          <input
            type="email"
            placeholder="ton-email@exemple.com"
            className="w-full pl-12 pr-4 py-4 bg-white border-[3px] border-gray-900 rounded-[16px] font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFB647] focus:ring-opacity-30 transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
            {...register("email", {
              required: "Veuillez entrer une adresse e-mail valide.",
              pattern: {
                value: /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i,
                message: "Adresse e-mail invalide.",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-[#FFB647] to-[#C9A0DC] text-white py-4 px-8 rounded-[16px] font-black border-[3px] border-gray-900 shadow-[0_6px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.15)] hover:translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          <span>S&apos;inscrire</span>
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
