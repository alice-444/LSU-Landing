/**
 * Utilitaire pour envoyer des événements personnalisés à Microsoft Clarity
 * Clarity expose automatiquement window.clarity après l'initialisation
 */
export const clarityEvent = {
  /**
   * Envoie un événement personnalisé à Clarity
   * @param name - Nom de l'événement
   * @param data - Données supplémentaires (optionnel)
   */
  track: (name: string, data?: Record<string, string | number | boolean>) => {
    if (typeof window !== "undefined") {
      try {
        const clarity = (window as any).clarity;
        if (clarity && typeof clarity === "function") {
          clarity("event", name, data);
        }
      } catch (error) {
        console.warn("Erreur lors de l'envoi de l'événement Clarity:", error);
      }
    }
  },

  /**
   * Identifie un utilisateur dans Clarity
   * @param userId - Identifiant unique de l'utilisateur
   */
  identify: (userId: string) => {
    if (typeof window !== "undefined") {
      try {
        const clarity = (window as any).clarity;
        if (clarity && typeof clarity === "function") {
          clarity("identify", userId);
        }
      } catch (error) {
        console.warn("Erreur lors de l'identification Clarity:", error);
      }
    }
  },

  /**
   * Définit des métadonnées utilisateur via setTag
   * @param key - Clé de la métadonnée
   * @param value - Valeur de la métadonnée
   */
  setTag: (key: string, value: string | string[]) => {
    if (typeof window !== "undefined") {
      try {
        const clarity = (window as any).clarity;
        if (clarity && clarity.setTag) {
          clarity.setTag(key, value);
        }
      } catch (error) {
        console.warn(
          "Erreur lors de la définition des métadonnées Clarity:",
          error
        );
      }
    }
  },
};

/**
 * Événements Clarity prédéfinis pour l'application
 */
export const ClarityEvents = {
  // Formulaires
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  CONTACT_FORM_SUCCESS: "contact_form_success",
  CONTACT_FORM_ERROR: "contact_form_error",
  NEWSLETTER_SUBSCRIBE: "newsletter_subscribe",
  NEWSLETTER_SUCCESS: "newsletter_success",
  NEWSLETTER_ERROR: "newsletter_error",

  // Actions utilisateur
  CTA_CLICK: "cta_click",
  BUTTON_CLICK: "button_click",
  LINK_CLICK: "link_click",
  SCROLL_DEPTH: "scroll_depth",

  // Navigation
  PAGE_VIEW: "page_view",
  SECTION_VIEW: "section_view",

  // Engagement
  VIDEO_PLAY: "video_play",
  VIDEO_COMPLETE: "video_complete",
  DOWNLOAD: "download",
  SHARE: "share",
} as const;
