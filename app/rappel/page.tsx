import HeroSection from "@/components/pages/rappel/HeroSection";
import WhenToDoSection from "@/components/pages/rappel/WhenToDoSection";
import SanctionSection from "@/components/pages/rappel/SanctionSection";

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
