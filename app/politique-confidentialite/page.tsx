import LegalHero from "@/components/pages/mentions-legales/LegalHero";
import PrivacyContent from "@/components/pages/politique-confidentialite/PrivacyContent";
import CTASection from "@/components/pages/a-propos/CTASection";

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