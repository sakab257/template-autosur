import Link from "next/link";
import { ShieldCheck, ArrowRight, Star } from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] w-full overflow-hidden bg-linear-to-br from-white via-blue-50 to-blue-200 flex items-center py-12 lg:py-0 scroll-mt-20 lg:scroll-mt-24"
    >
      {/* --- VAGUE DE SÉPARATION (CSS PURE) --- */}
      {/* Forme ondulée en haut pour la transition douce */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-20 lg:h-25" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 lg:px-12 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">

          {/* --- COLONNE GAUCHE : TEXTE --- */}
          <div className="flex flex-col items-start justify-center text-left z-10">

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-100 text-blue-900 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm mx-auto lg:mx-0">
              <ShieldCheck size={14} className="" />
              <span>Centre Agréé par l'État</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight mx-auto lg:mx-0 text-center lg:text-left">
              Le Contrôle Technique <br/>
              <span className="text-4xl sm:text-5xl">
                <span className="text-blue-700">Simple</span> & <span className="text-red-600">Rapide</span>.
              </span>
            </h1>

            <p className="text-sm lg:text-lg text-slate-600 max-w-lg mb-8 font-medium leading-relaxed mx-auto lg:mx-0 text-center lg:text-left">
              Roulez l'esprit tranquille. Prenez rendez-vous en 2 clics dans votre centre de confiance. Contre-visite et pollution incluses.
            </p>

            {/* Animation Mobile */}
            <div className="block lg:hidden w-full max-w-70 mx-auto mb-8">
                <HeroAnimation />
            </div>

            {/* BOUTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto lg:mx-0">

              <Link
                href="/rdv"
                className="group flex items-center justify-center gap-2 bg-red-600 text-white border-2 border-red-600 font-extrabold text-lg px-8 py-4 rounded-xl shadow-sm hover:bg-white hover:border-red-600 hover:text-red-600 hover:shadow-md transition-all duration-300"
              >
                PRENDRE RDV
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#tarifs"
                className="flex items-center justify-center gap-2 bg-white text-slate-600 border-2 border-slate-100 font-bold text-lg px-8 py-4 rounded-xl shadow-sm hover:border-blue-900 hover:text-blue-900 hover:shadow-md transition-all duration-300"
              >
                Voir les tarifs
              </Link>
            </div>

            {/* AVIS CLIENTS */}
            <div className="flex w-full justify-end sm:justify-center lg:justify-start items-center gap-4 mt-10 opacity-90 pb-4 lg:pb-0">
               <div className="flex -space-x-3">
                  {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                         {/* Placeholder avatar */}
                      </div>
                  ))}
               </div>
               <div className="flex flex-col">
                  <div className="flex text-red-500 text-xs">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-bold text-slate-600 mt-0.5">4.9/5 sur Google (+500 avis)</span>
               </div>
            </div>
          </div>

          {/* --- COLONNE DROITE : ANIMATION (DESKTOP) --- */}
          <div className="hidden lg:flex relative w-full h-full items-center justify-center">
              <div className="relative z-10 w-full max-w-137.5 p-4">
                  <HeroAnimation />
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
