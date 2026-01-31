"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { CalendarCheck, Car, Key, ShieldCheck, ArrowRight, Check, HeartHandshake } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    number: "01",
    title: "PRENDRE RDV",
    subtitle: "Simple & Rapide",
    description: "Choisissez le créneau qui vous convient en ligne. C'est simple, rapide et confirmation immédiate par SMS.",
    icon: CalendarCheck,
    isAction: true,
  },
  {
    id: 2,
    number: "02",
    title: "PASSER LE CONTRÔLE",
    subtitle: "Expertise Complète",
    description: "Confiez-nous vos clés. Pendant environ 45min, nos experts vérifient 133 points de sécurité sur votre véhicule.",
    icon: Car,
  },
  {
    id: 3,
    number: "03",
    title: "RESTITUTION",
    subtitle: "Bilan Transparent",
    description: "Nous vous expliquons le bilan en détail. Si tout est vert, le macaron est posé immédiatement sur votre pare-brise.",
    icon: Key,
  },
  {
    id: 4,
    number: "04",
    title: "ROULER TRANQUILLE",
    subtitle: "Sérénité Assurée",
    description: "Repartez l'esprit libre avec un véhicule sûr, en règle et validé pour 2 ans.",
    icon: ShieldCheck,
    isFinished: true,
  },
];

const ServicesScroller = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const smoothProgress = useSpring(progressHeight, { stiffness: 60, damping: 20 });
    return (
        <>
        {/* --- HEADER MOBILE --- */}
      <div className="lg:hidden container mx-auto px-6 mb-16 text-center relative z-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            Le Parcours
        </span>
        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
          Votre Contrôle <br/><span className="text-blue-700">en 4 étapes</span>
        </h2>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 md:px-8 relative z-20">
        
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
          
          {/* =======================================================
              GAUCHE (STICKY) - TITRE & WIDGET
             ======================================================= */}
          <div className="hidden lg:block w-5/12 sticky top-32">
            <div className="pr-8">
                {/* Badge Flottant */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-900 font-bold text-sm mb-8"
                >
                    <Check size={16} className="text-blue-900 stroke-[4px]" />
                    <span>Processus Certifié</span>
                </motion.div>

                <h2 className="text-5xl xl:text-6xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                    La route vers <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-500">
                        la sécurité.
                    </span>
                </h2>
                
                <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-md">
                    Un parcours clair, rapide et sans mauvaise surprise. Nous vous accompagnons de la prise de rendez-vous jusqu'à la pose du macaron.
                </p>

                {/* VISUEL WIDGET DYNAMIQUE (Refait Style "Clean") */}
                <div className="w-full bg-white rounded-3xl shadow-xl border border-blue-50/80 p-8 relative overflow-hidden transition-all duration-300">
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400">
                                Étape {activeStep + 1} / 4
                            </span>
                            {/* Indicateurs simples */}
                            <div className="flex gap-1.5">
                                {[0,1,2,3].map(i => (
                                    <div key={i} className={`h-2 w-2 rounded-full transition-all duration-300 ${i === activeStep ? 'bg-red-600 w-6' : i < activeStep ? 'bg-blue-800' : 'bg-slate-200'}`}></div>
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                          {(() => {
                              const CurrentStep = steps[activeStep];
                              const Icon = CurrentStep.icon;
                              
                              return (
                              <motion.div 
                                  key={activeStep}
                                  // On définit ici l'orchestration (les enfants s'animent l'un après l'autre)
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  variants={{
                                      hidden: { opacity: 0 },
                                      visible: { 
                                          opacity: 1,
                                          transition: { staggerChildren: 0.1 } // Délai entre l'icône et le texte
                                      },
                                      exit: { 
                                          opacity: 0, 
                                          transition: { duration: 0.2 } 
                                      }
                                  }}
                                  className="flex flex-col gap-4"
                              >
                                  <div className="flex items-center gap-4">
                                      {/* ANIMATION DE L'ICÔNE : Effet de "Pop" élastique */}
                                      <motion.div 
                                          variants={{
                                              hidden: { scale: 0.5, opacity: 0 },
                                              visible: { 
                                                  scale: 1, 
                                                  opacity: 1, 
                                                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                                              },
                                              exit: { scale: 0.8, opacity: 0 }
                                          }}
                                          className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shrink-0"
                                      >
                                          <Icon size={28} strokeWidth={2} />
                                      </motion.div>

                                      {/* ANIMATION DU TEXTE : Glissement vertical doux */}
                                      <motion.div 
                                          variants={{
                                              hidden: { y: 10, opacity: 0 },
                                              visible: { 
                                                  y: 0, 
                                                  opacity: 1,
                                                  transition: { duration: 0.4, ease: "easeOut" }
                                              },
                                              exit: { y: -10, opacity: 0 }
                                          }}
                                      >
                                          <h3 className="text-2xl font-black text-slate-800 leading-none mb-1">
                                              {CurrentStep.title}
                                          </h3>
                                          <p className="text-slate-500 font-medium text-sm">
                                              {CurrentStep.subtitle}
                                          </p>
                                      </motion.div>
                                  </div>
                              </motion.div>
                              )
                          })()}
                      </AnimatePresence>
                    </div>
                </div>

            </div>
          </div>

          {/* =======================================================
              DROITE (TIMELINE & CARTES)
             ======================================================= */}
          <div className="w-full lg:w-7/12 relative">
            
            {/* --- CONFIGURATION DE LA BARRE VERTICALE --- */}
            {/* Calcul : 
                Mobile : Grid col-1 = 3.5rem (56px). Centre = 1.75rem (28px).
                Desktop : Grid col-1 = 6rem (96px). Centre = 3rem (48px).
            */}
            
            {/* Trace (Background gris) */}
            <div className="absolute left-7 lg:left-12 top-4 bottom-0 w-1 bg-slate-200 rounded-full -translate-x-1/2 z-0"></div>
            
            {/* Barre de progression (Bleue animée) */}
            <motion.div 
                style={{ height: smoothProgress }} 
                className="absolute left-7 lg:left-12 top-4 w-1 bg-blue-600 rounded-full -translate-x-1/2 origin-top z-10"
            />

            {/* LISTE DES ÉTAPES */}
            <div className="flex flex-col gap-12 lg:gap-24 pb-12">
                {steps.map((step, index) => {
                    const isActive = index <= activeStep;
                    
                    return (
                        <motion.div
                            key={step.id}
                            /* LA GRILLE : Définit l'alignement précis Point / Carte */
                            className="relative grid grid-cols-[3.5rem_1fr] lg:grid-cols-[6rem_1fr] gap-4 lg:gap-8"
                            onViewportEnter={() => setActiveStep(index)}
                            viewport={{ margin: "-45% 0px -45% 0px" }}
                        >
                            {/* COLONNE 1 : LE POINT (DOT) */}
                            <div className="relative z-20 flex justify-center pt-8 lg:pt-10">
                                {/* Le cercle */}
                                <div className={`
                                    w-6 h-6 rounded-full border-4 border-white transition-all duration-500
                                    ${isActive ? 'bg-red-600 scale-110 lg:scale-125' : 'bg-slate-300 scale-100'}
                                `}></div>
                            </div>

                            {/* COLONNE 2 : LA CARTE */}
                            <div className={`
                                group relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden
                                ${isActive ? 'opacity-100 translate-y-0 ring-1 ring-blue-50' : 'opacity-60 translate-y-4 lg:translate-y-8 grayscale-[0.5]'}
                            `}>
                                {/* Numéro en arrière plan (CORRIGÉ : TAILLE ET POSITION) */}
                                <span className={`
                                    absolute right-4 bottom-2 lg:right-6 
                                    text-5xl lg:text-6xl 
                                    font-black z-0 pointer-events-none select-none transition-colors duration-500
                                    ${isActive ? 'text-slate-100' : 'text-slate-50'}
                                `}>
                                    {step.number}
                                </span>

                                <div className="relative z-10">
                                    {/* Titre */}
                                    <h3 className={`text-xl sm:text-2xl font-black mb-3 uppercase tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                                        {step.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6 lg:mb-8 max-w-lg">
                                        {step.description}
                                    </p>

                                    {/* BOUTON D'ACTION (Étape 1 seulement) */}
                                    {step.isAction ? (
                                        <Link
                                            href="/rendez-vous"
                                            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold text-sm sm:text-base px-5 py-3 rounded-xl shadow-lg shadow-red-100 hover:bg-red-700 hover:scale-105 active:scale-95 transition-all"
                                        >
                                            <CalendarCheck size={18} />
                                            <span>PRENDRE RDV</span>
                                            <ArrowRight size={16} className="hidden sm:block" />
                                        </Link>
                                    ) : step.isFinished ? (
                                      <div className="bg-blue-50 text-blue-700 w-fit px-2 p-1 lg:px-4 lg:py-2 font-medium text-xs lg:text-lg rounded-xl flex items-center gap-2 uppercase">
                                        <HeartHandshake />
                                        Bonne route
                                        <HeartHandshake />
                                      </div>
                                    ) : (
                                        // Indicateur discret pour les autres étapes
                                        <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                                            
                                            {isActive ? 'Étape en cours' : 'Étape suivante'}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA Mobile Fin de liste */}
            <div className="lg:hidden pl-14 pr-2">
                 <Link
                    href="/rendez-vous"
                    className="flex w-full items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition-all text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 hover:scale-105"
                >
                    <CalendarCheck />
                    Réserver maintenant
                </Link>
            </div>

          </div>
        </div>
      </div>
      </>
    )
}

export default ServicesScroller