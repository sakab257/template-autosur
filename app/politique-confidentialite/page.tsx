import type { Metadata } from "next";
import LegalHero from "@/components/pages/mentions-legales/LegalHero";
import PrivacyContent from "@/components/pages/politique-confidentialite/PrivacyContent";
import CTASection from "@/components/pages/a-propos/CTASection";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité d'Autosur : protection de vos données personnelles, cookies, droits RGPD et gestion de vos informations.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
    return (
        <main className="w-full bg-slate-50">
            <LegalHero 
                title="Politique de Confidentialité" 
                subtitle="Nous nous engageons à protéger votre vie privée et vos données personnelles."
                icon="privacy"
                lastUpdate="01 Février 2026"
            />
            <PrivacyContent />
            <CTASection />
        </main>
    );
}