import HeroSection from "@/components/pages/infos-pratiques/HeroSection";
import FAQSection from "@/components/pages/infos-pratiques/FAQSection";
import Documents from "@/components/pages/infos-pratiques/Documents";
import ControlProgress from "@/components/pages/infos-pratiques/ControlProgress";
import ControlPointsSection from "@/components/pages/infos-pratiques/ControlPointsSection";
import CTASection from "@/components/pages/infos-pratiques/CTASection";

export default function InfosPratiquesPage() {
    return (
        <main className="w-full bg-slate-50">
            {/* Hero Section */}
            <HeroSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* Documents à apporter */}
            <Documents />

            {/* Déroulement du contrôle */}
            <ControlProgress />

            {/* Points de contrôle */}
            <ControlPointsSection />

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
