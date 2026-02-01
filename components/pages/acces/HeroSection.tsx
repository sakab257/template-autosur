'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-blue-500 overflow-hidden">
        
        {/* --- PATTERN DE POINTS --- */}
        <DotPattern />

        {/* Vague Bas (Vers Blanc) */}
        <SeparationWave position="bottom" flip fillColor="fill-white" height="h-16 lg:h-24" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                    <MapPin size={14} strokeWidth={3} className="text-blue-200" />
                    Nous trouver
                </span>

                <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                    Accès & Plan
                </h1>
                
                {/* Adresse mise en valeur */}
                <div className="inline-flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8">
                    <p className="text-xl lg:text-2xl text-white font-medium">
                        <span className="block text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">Adresse du centre</span>
                        <strong className="block text-3xl lg:text-4xl font-black mb-1">1 Avenue de la France</strong>
                        75001 Paris, France
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection