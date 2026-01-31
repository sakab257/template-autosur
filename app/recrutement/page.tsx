import ApplicationSection from "@/components/pages/recrutement/ApplicationSection";
import HeroSection from "@/components/pages/recrutement/HeroSection";
import OurWorkSection from "@/components/pages/recrutement/OurWorkSection";
import WhyJoinUsSection from "@/components/pages/recrutement/WhyJoinUsSection";

export default function RecrutementPage() {
    return (
        <main className="w-full bg-slate-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Pourquoi nous rejoindre */}
            <WhyJoinUsSection />

            {/* Nos métiers */}
            <OurWorkSection />

            {/* Formulaire de candidature */}
            <ApplicationSection />
        </main>
    );
}
