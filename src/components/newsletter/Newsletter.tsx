import { Sparkles } from "lucide-react";
import Link from "next/link";
import NewsletterForm from "@/components/newsletter/NewsletterForm";

const Newsletter = () => {
  return (
    <section className="relative bg-linear-to-br from-purple-50 via-orange-50 to-blue-50 py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C9A0DC] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-20 w-80 h-80 bg-[#FFB647] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#A8D5BA] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 lg:p-16 border-[5px] border-gray-900 shadow-[12px_12px_0_0_rgba(0,0,0,0.1)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 bg-linear-to-r from-[#FFB647] to-[#C9A0DC] text-white px-5 py-2.5 rounded-full border-3 border-gray-900 shadow-[0_6px_0_0_rgba(0,0,0,0.15)]"
                style={{ borderWidth: "3px" }}
              >
                <Sparkles className="w-5 h-5" strokeWidth={3} />
                <span className="font-black">Newsletter</span>
              </div>
              <div>
                <h2 className="mb-4">
                  <span className="block text-gray-900 font-black">
                    Ne rate aucun{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 text-[#FFB647]">
                        conseil
                      </span>
                      <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFB647] opacity-30 -rotate-1"></span>
                    </span>
                  </span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Inscris-toi pour recevoir nos{" "}
                  <span className="font-black text-[#FFB647]">
                    tips exclusifs
                  </span>
                  ,{" "}
                  <span className="font-black text-[#4A90E2]">
                    promos spéciales
                  </span>{" "}
                  et{" "}
                  <span className="font-black text-[#C9A0DC]">
                    nouvelles fonctionnalités
                  </span>{" "}
                  en avant-première !
                </p>
              </div>
            </div>

            <div className="relative">
              <NewsletterForm />
              <p className="text-xs sm:text-sm text-(--quaternary-blue)] mt-3 sm:mt-4">
                En communiquant votre email, tu acceptes de recevoir des
                informations marketing des services de LearnSup. Pour en savoir
                plus, consulte notre{" "}
                <Link
                  href="/privacy"
                  className="text-[var(--primary-blue)] underline hover:text-[var(--secondary-blue)] transition-colors duration-300"
                >
                  politique de confidentialité
                </Link>
                .{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
