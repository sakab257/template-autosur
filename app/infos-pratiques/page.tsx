import type { Metadata } from "next";
import HeroSection from "@/components/pages/infos-pratiques/HeroSection";
import FAQSection from "@/components/pages/infos-pratiques/FAQSection";
import Documents from "@/components/pages/infos-pratiques/Documents";
import ControlProgress from "@/components/pages/infos-pratiques/ControlProgress";
import ControlPointsSection from "@/components/pages/infos-pratiques/ControlPointsSection";

export const metadata: Metadata = {
  title: "Infos Pratiques - Tout savoir sur le contrôle technique",
  description:
    "Tout savoir sur le contrôle technique : documents à apporter, déroulement, points de contrôle, FAQ. Préparez votre visite chez Autosur à Paris.",
  alternates: { canonical: "/infos-pratiques" },
};

export default function InfosPratiquesPage() {
    return (
        <main className="w-full bg-slate-50">
            {/* Hero Section (Bleu) */}
            <HeroSection />

            {/* FAQ Section (Blanc) */}
            <FAQSection />

            {/* Documents à apporter (Gris) */}
            <Documents />

            {/* Déroulement du contrôle (Blanc) */}
            <ControlProgress />

            {/* Points de contrôle (Bleu) */}
            <ControlPointsSection />
        </main>
    );
}