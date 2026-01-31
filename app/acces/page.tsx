import MapEmbed from "@/components/pages/acces/MapEmbed";
import HeroSection from "@/components/pages/acces/HeroSection";
import ScheduleSection from "@/components/pages/acces/ScheduleSection";
import ContactSection from "@/components/pages/acces/ContactSection";
import CTASection from "@/components/pages/acces/CTASection";

export default function AccesPage() {
    return (
        <main className="w-full bg-slate-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Map Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <MapEmbed />
                </div>
            </section>

            {/* Comment venir & Horaires */}
            <ScheduleSection />

            {/* Contact Section */}
            <ContactSection />

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
