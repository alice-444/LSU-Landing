import { Check, CreditCard, X } from "lucide-react";
import { clarityEvent, ClarityEvents } from "@/lib/clarity";

const CTA: React.FC = () => {
  return (
    <div className="relative bg-linear-to-br from-[#FFB647] via-[#FF9500] to-[#FFB647] py-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#C9A0DC] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#4A90E2] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-3 font-bold leading-tight">
          Prêt(e) à transformer tes études en aventure ?
        </h2>

        <p className="text-base sm:text-lg text-white/95 mb-4 max-w-2xl mx-auto font-medium">
          Commence{" "}
          <span className="font-bold underline decoration-wavy">
            gratuitement
          </span>{" "}
          aujourd'hui. Pas de carte bancaire. Pas d'engagement.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <button
            onClick={() => {
              clarityEvent.track(ClarityEvents.CTA_CLICK, {
                cta_type: "start_now",
                location: "home_cta_section",
              });
            }}
            className="group bg-white text-[#FFB647] px-6 py-3 rounded-[20px] flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-2xl font-bold"
          >
            <span>Commence maintenant</span>
          </button>
          <button
            onClick={() => {
              clarityEvent.track(ClarityEvents.CTA_CLICK, {
                cta_type: "contact_us",
                location: "home_cta_section",
              });
            }}
            className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-[20px] hover:bg-white/30 transition-all border-4 border-white/40 font-bold hover:scale-105"
          >
            Nous contacter
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 items-center text-white text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg">Gratuit pour toujours</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
              <CreditCard className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg">Sans CB</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
              <X className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg">Annule quand tu veux</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
