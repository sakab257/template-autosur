'use client'

import { motion } from 'framer-motion';
import CTCalculator from "./CTCalculator";
import SeparationWave from '@/components/ui/SeparationWave';
import DotPattern from '@/components/ui/DotPattern';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-blue-500 overflow-hidden">
        
        <DotPattern />

        <SeparationWave position="bottom" fillColor="fill-white" flip height="h-16 lg:h-24" />

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