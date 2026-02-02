import LegalHero from "@/components/pages/mentions-legales/LegalHero";
import MentionsContent from "@/components/pages/mentions-legales/MentionsContent";
import CTASection from "@/components/pages/a-propos/CTASection"; // On réutilise le CTA existant

export default function MentionsLegalesPage() {
    return (
        <main className="w-full bg-slate-50">
            <LegalHero 
                title="Mentions Légales" 
                subtitle="Informations juridiques concernant l'éditeur et l'hébergeur du site."
                icon="legal"
                lastUpdate="01 Février 2026"
            />
            <MentionsContent />
            <CTASection />
        </main>
    );
}