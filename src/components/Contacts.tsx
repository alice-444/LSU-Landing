import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-white relative">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl font-bold text-[#019D3B] mb-6">
          Inscrivez-vous à notre newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          En cliquant sur <strong>“S’inscrire”</strong>, vous acceptez de
          communiquer vos coordonnées afin de recevoir des emails d’informations
          de la part de LearnSup. Vous pouvez à tout moment demander à vous
          désinscrire de cette newsletter.
        </p>
        <NewsletterForm />
      </div>

      <div className="absolute top-1/4 left-0 transform -translate-y-1/2">
        <div className="bg-green-500 w-32 h-32 rounded-full opacity-70"></div>
      </div>

      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
        <Image
          src="/Sending.png"
          alt="Newsletter Illustration"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Contact;
