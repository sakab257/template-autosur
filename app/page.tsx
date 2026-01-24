// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Clock, ArrowRight, Star } from "lucide-react";
// N'oublie pas d'importer le nouveau composant !
import HeroAnimation from "@/components/HeroAnimation";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-slate-50">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      
      {/* CORRECTION MOBILE : 'min-h' au lieu de 'h' sur mobile pour éviter que le contenu soit coupé */}
      {/* DESKTOP : On garde la hauteur fixe pour le design split screen */}
      <section className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] w-full overflow-hidden bg-linear-to-br from-white via-blue-50 to-red-100 flex items-center py-12 lg:py-0">
        
        {/* --- DÉCORATION D'ARRIÈRE-PLAN --- */}
        {/* Suppression du jaune -> Remplacement par du Rouge très léger (Brand) et du Bleu */}
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
            
            {/* --- COLONNE GAUCHE : TEXTE --- */}
            <div className="flex flex-col items-start justify-center text-left z-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-100 text-blue-900 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <ShieldCheck size={14} className="" /> 
                <span>Centre Agréé par l'État</span>
              </div>
              
              <h1 className="text-4xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight mx-auto lg:mx-0">
                Le Contrôle Technique <br/>
                <span className="text-5xl">
                  <span className="text-blue-700">Simple</span> & <span className="text-red-600">Rapide</span>.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-lg mb-8 font-medium leading-relaxed mx-auto lg:mx-0 text-center lg:text-left">
                Roulez l'esprit tranquille. Prenez rendez-vous en 2 clics dans votre centre de confiance. Contre-visite et pollution incluses.
              </p>

              {/* Animation Mobile */}
              <div className="block lg:hidden w-full max-w-70 mx-auto mb-8">
                 <HeroAnimation />
              </div>

              {/* BOUTONS MODIFIÉS SELON TA DEMANDE */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                
                {/* Bouton PRENDRE RDV : Style épuré avec Hover Actif */}
                <Link 
                  href="/rdv" 
                  className="group flex items-center justify-center gap-2 bg-red-600 text-white border-2 border-red-600 font-extrabold text-lg px-8 py-4 rounded-xl shadow-sm hover:bg-white hover:border-red-600 hover:text-red-600 hover:shadow-md transition-all duration-300"
                >
                  PRENDRE RDV
                  {/* La flèche se déplace légèrement au survol */}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Bouton TARIFS : Même base, hover différent */}
                <Link 
                  href="#tarifs" 
                  className="flex items-center justify-center gap-2 bg-white text-slate-600 border-2 border-slate-100 font-bold text-lg px-8 py-4 rounded-xl shadow-sm hover:border-blue-900 hover:text-blue-900 hover:shadow-md transition-all duration-300"
                >
                  Voir les tarifs
                </Link>
              </div>

              {/* AVIS CLIENTS (Visible maintenant grâce au min-h sur le container parent) */}
              <div className="flex items-center gap-4 mt-10 opacity-90 pb-4 lg:pb-0">
                 <div className="flex -space-x-3">
                    {[1,2,3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                           {/* Placeholder avatar */}
                        </div>
                    ))}
                 </div>
                 <div className="flex flex-col">
                    {/* Étoiles en ROUGE (ou bleu foncé) pour éviter le jaune */}
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

      {/* ========================================= */}
      {/* 2. SERVICES                               */}
      {/* ========================================= */}
      <section id="services" className="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] scroll-mt-20 lg:scroll-mt-24 py-20 px-6 bg-white">
        <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-blue-900 mb-4 text-center">Nos Services de Contrôle</h2>
            <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">Nous réalisons tous types de contrôles techniques réglementaires et volontaires pour garantir votre sécurité.</p>
            
            {/* Grid placeholders */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Carte 1 */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                        <CheckCircle size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Contrôle Technique Périodique</h3>
                    <p className="text-slate-600 leading-relaxed">Obligatoire tous les 2 ans pour les véhicules de plus de 4 ans. Un bilan complet pour votre sécurité.</p>
                </div>
                {/* Ajoute tes autres cartes ici */}
            </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. TARIFS                                 */}
      {/* ========================================= */}
      <section id="tarifs" className="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] scroll-mt-20 lg:scroll-mt-24 py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-blue-900 mb-10 text-center">Nos Tarifs Transparents</h2>
          {/* Tableau de prix ici */}
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. AVIS                                   */}
      {/* ========================================= */}
      <section id="avis" className="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] scroll-mt-20 lg:scroll-mt-24 py-20 px-6 bg-blue-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-10 text-center">Ce que pensent nos clients</h2>
          {/* Slider d'avis ici */}
        </div>
      </section>
      
    </main>
  );
}