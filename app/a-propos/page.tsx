import type { Metadata } from "next";
import HeroSection from "@/components/pages/a-propos/HeroSection";
import HistorySection from "@/components/pages/a-propos/HistorySection";
import ValuesSection from "@/components/pages/a-propos/ValuesSection";
import TeamSection from "@/components/pages/a-propos/TeamSection";
import CTASection from "@/components/pages/a-propos/CTASection";

export const metadata: Metadata = {
  title: "À Propos - Notre histoire et nos valeurs",
  description:
    "Découvrez Autosur, centre de contrôle technique agréé à Paris. Notre histoire, nos valeurs et notre équipe de professionnels qualifiés à votre service.",
  alternates: { canonical: "/a-propos" },
};

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