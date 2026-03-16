import { useEffect } from "react";
import clarity from "@microsoft/clarity";
import { useRouter } from "next/router";
import { clarityEvent, ClarityEvents } from "@/lib/clarity";

const Clarity: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

    if (clarityId) {
      clarity.init(clarityId);
      
      // Exposer clarity globalement pour les utilitaires
      if (typeof window !== "undefined") {
        // Clarity est déjà disponible globalement après init
        // Pas besoin de l'assigner manuellement
      }
    } else {
      console.warn(
        "Microsoft Clarity ID is not configured. Please set NEXT_PUBLIC_CLARITY_ID in your environment variables."
      );
    }
  }, []);

  // Tracker les changements de page
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      clarityEvent.track(ClarityEvents.PAGE_VIEW, {
        page: url,
        timestamp: new Date().toISOString(),
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default Clarity;
