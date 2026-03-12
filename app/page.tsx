import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TarifsSection from "@/components/home/TarifsSection";
import AvisSection from "@/components/home/AvisSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="w-full bg-slate-50">
      <HeroSection />
      <ServicesSection />
      <TarifsSection />
      <AvisSection />
    </main>
  );
}