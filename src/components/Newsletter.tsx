import NewsletterForm from "@/components/NewsletterForm";

const Newsletter = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <NewsletterForm />
        <div>
          <p>
            En cliquant sur “Go!” vous acceptez de communiquer vos coordonnées
            afin de recevoir des emails d’informations de la part de (nom de la
            startup). Vous pouvez à tout moment demander à vous désinscrire de
            cette newsletter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
