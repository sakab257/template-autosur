import MapEmbed from "@/components/pages/acces/MapEmbed";
import HeroSection from "@/components/pages/acces/HeroSection";
import ScheduleSection from "@/components/pages/acces/ScheduleSection";
import ContactSection from "@/components/pages/acces/ContactSection";
import CTASection from "@/components/pages/acces/CTASection";

export default function AccesPage() {
    return (
        <main className="w-full bg-white">
            {/* Hero Section (Bleu) */}
            <HeroSection />

            {/* Map Section (Blanc) */}
            <section className="py-0 mt-10 lg:mt-20 relative z-20 px-6 bg-white">
                <div className="container mx-auto bg-white">
                    <MapEmbed />
                </div>
            </section>
            
            {/* Petit spacer pour compenser le negative margin de la map */}
            <div className="h-10 lg:h-20 bg-white"></div>

            {/* Comment venir & Horaires (Gris) */}
            <ScheduleSection />

            {/* Contact Section (Blanc) */}
            <ContactSection />

            {/* CTA Section (Bleu) */}
            <CTASection />
        </main>
    );
}