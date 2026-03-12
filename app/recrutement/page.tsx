import type { Metadata } from "next";
import ApplicationSection from "@/components/pages/recrutement/ApplicationSection";
import HeroSection from "@/components/pages/recrutement/HeroSection";
import OurWorkSection from "@/components/pages/recrutement/OurWorkSection";
import WhyJoinUsSection from "@/components/pages/recrutement/WhyJoinUsSection";

export const metadata: Metadata = {
  title: "Recrutement - Rejoignez notre équipe",
  description:
    "Rejoignez l'équipe Autosur ! Découvrez nos offres d'emploi dans le contrôle technique automobile à Paris. Postulez en ligne dès maintenant.",
  alternates: { canonical: "/recrutement" },
};

export default function RecrutementPage() {
    return (
        <main className="w-full">
            {/* Hero Section (Bleu) */}
            <HeroSection />

            {/* Pourquoi nous rejoindre (Blanc) */}
            <WhyJoinUsSection />

            {/* Nos métiers (Bleu) */}
            <OurWorkSection />

            {/* Formulaire de candidature (Blanc) */}
            <ApplicationSection />
        </main>
    );
}