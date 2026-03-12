import type { Metadata } from "next";
import HeroSection from "@/components/pages/rappel/HeroSection";
import WhenToDoSection from "@/components/pages/rappel/WhenToDoSection";
import SanctionSection from "@/components/pages/rappel/SanctionSection";

export const metadata: Metadata = {
  title: "Mon Prochain Contrôle Technique - Rappel et Échéances",
  description:
    "Quand faire votre prochain contrôle technique ? Découvrez les échéances, les sanctions en cas de retard et les rappels pour ne jamais oublier votre CT.",
  alternates: { canonical: "/rappel" },
};

export default function RappelPage() {
    return (
        <main className="w-full bg-slate-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Quand faire son CT */}
            <WhenToDoSection />

            {/* Que se passe-t-il si je dépasse */}
            <SanctionSection />
        </main>
    );
}
