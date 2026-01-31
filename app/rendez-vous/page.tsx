import ContactSection from "@/components/pages/rendez-vous/ContactSection";
import HeroSection from "@/components/pages/rendez-vous/HeroSection";
import IframeSection from "@/components/pages/rendez-vous/IframeSection";

export default function RendezVousPage() {
    return (
        <main className="w-full bg-slate-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Iframe Section */}
            <IframeSection />

            {/* Contact alternatif */}
            <ContactSection />
        </main>
    );
}
