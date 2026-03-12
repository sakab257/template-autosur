import type { Metadata } from "next";
import LegalHero from "@/components/pages/mentions-legales/LegalHero";
import MentionsContent from "@/components/pages/mentions-legales/MentionsContent";
import CTASection from "@/components/pages/a-propos/CTASection"; // On réutilise le CTA existant

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site Autosur : informations sur l'éditeur, l'hébergeur, les conditions d'utilisation et la propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

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