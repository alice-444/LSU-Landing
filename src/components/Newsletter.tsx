import NewsletterForm from "@/components/NewsletterForm";

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
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
    </section>
  );
};

export default Newsletter;
