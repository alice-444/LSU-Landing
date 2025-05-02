"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/learnsup/Navigation";
import SectionContent from "@/lib/data/SectionContent";
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
    <div className="min-h-screen bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5] py-25">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <SectionContent activeSection={activeSection} />
    </div>
  );
}
