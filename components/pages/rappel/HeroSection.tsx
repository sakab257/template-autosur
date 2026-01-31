'use client'

import { motion } from 'framer-motion';
import CTCalculator from "./CTCalculator"; // Assure-toi que le chemin est bon

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-blue-500 overflow-hidden">
        
        {/* --- BACKGROUND PATTERN --- */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
        </div>

        {/* --- VAGUE DE TRANSITION (BAS) --- */}
        <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-none z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Texte Gauche */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 text-white"
                >
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                        Outil Gratuit
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-[1.15]">
                        Ne soyez plus jamais <br/>
                        <span className="text-blue-200">pris au dépourvu.</span>
                    </h1>
                    <p className="text-lg text-blue-100 leading-relaxed max-w-lg mb-8">
                        Une amende pour contrôle technique dépassé coûte 135€.
                        Utilisez notre simulateur pour connaître votre date limite exacte en quelques secondes.
                    </p>
                </motion.div>

                {/* Calculateur Droite */}
                <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mr-0">
                    <CTCalculator />
                </div>

            </div>
        </div>
    </section>
  )
}

export default HeroSection