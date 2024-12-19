import NewsletterForm from "@/components/NewsletterForm";

const Newsletter: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Abonnez-vous à notre Newsletter
        </h2>

        <NewsletterForm />

        <div className="mt-6 text-gray-600 text-sm text-center">
          <p>
            En cliquant sur <strong>“Go!”</strong>, vous acceptez de communiquer
            vos coordonnées afin de recevoir des emails d’informations de la
            part de <span className="font-semibold">learnSup</span>. Vous pouvez
            à tout moment demander à vous désinscrire de cette newsletter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
