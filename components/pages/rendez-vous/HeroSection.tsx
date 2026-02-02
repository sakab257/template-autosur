'use client'

import { motion } from 'framer-motion'
import { CalendarClock } from 'lucide-react'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-blue-500 overflow-hidden">
        
        {/* Pattern & Texture */}
        <DotPattern />

        {/* Vague Bas (Vers Blanc) */}
        <SeparationWave position="bottom" fillColor="fill-white" height="h-16 lg:h-24" flip />

        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                {/* Badge Glass */}
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                    <CalendarClock size={14} strokeWidth={3} className="text-blue-200" />
                    Réservation 24/7
                </span>

                <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                    Votre contrôle technique <br />
                    <span className="text-blue-200">en quelques clics.</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto font-medium">
                    Choisissez le créneau qui vous convient. Confirmation immédiate par SMS et rappel automatique la veille.
                </p>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection