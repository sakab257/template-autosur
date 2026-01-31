import HeroSection from "@/components/pages/a-propos/HeroSection";
import HistorySection from "@/components/pages/a-propos/HistorySection";
import ValuesSection from "@/components/pages/a-propos/ValuesSection";
import TeamSection from "@/components/pages/a-propos/TeamSection";
import CTASection from "@/components/pages/a-propos/CTASection";

export default function AProposPage() {
    return (
        <main className="w-full bg-slate-50 overflow-x-hidden">
            <HeroSection />
            <HistorySection />
            <ValuesSection />
            <TeamSection />
            <CTASection />
        </main>
    );
}