"use client";

import { useEffect, useState } from "react";
import AboutHero from "@/components/learnsup/AboutHero";
import AboutNavigation from "@/components/learnsup/AboutNavigation";
import AboutSectionContent from "@/components/learnsup/AboutSectionContent";
import { Section } from "@/lib/types";

export default function LearnSup() {
  const [activeSection, setActiveSection] = useState<Section>("mission");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && ["mission", "approche", "équipe", "contact"].includes(hash)) {
      setActiveSection(hash as Section);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <AboutSectionContent activeSection={activeSection} />
    </div>
  );
}
