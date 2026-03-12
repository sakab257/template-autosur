import type { Metadata } from "next";
import ContactSection from "@/components/pages/rendez-vous/ContactSection";
import HeroSection from "@/components/pages/rendez-vous/HeroSection";
import IframeSection from "@/components/pages/rendez-vous/IframeSection";

export const metadata: Metadata = {
  title: "Prendre Rendez-vous - Contrôle Technique",
  description:
    "Prenez rendez-vous en ligne pour votre contrôle technique chez Autosur à Paris. Réservation rapide, créneaux disponibles du lundi au samedi.",
  alternates: { canonical: "/rendez-vous" },
};

export default function RendezVousPage() {
    return (
        <main className="w-full bg-slate-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Iframe Section */}
            <IframeSection />

            {/* Contact alternatif */}
            <ContactSection />
        </main>
    );
}
