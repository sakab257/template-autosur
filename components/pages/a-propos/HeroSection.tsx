'use client';

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import SeparationWave from '@/components/ui/SeparationWave';
import DotPattern from '@/components/ui/DotPattern';

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-48 lg:pt-32 lg:pb-60 overflow-hidden bg-blue-500 text-white">
        <DotPattern />

        <SeparationWave position="bottom" variant="wave2" fillColor="fill-white" height="h-16 lg:h-24" className="z-20" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                {/* Badge style "Glassmorphism" sur fond bleu */}
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                    <Info size={14} strokeWidth={3} className="text-blue-200" />
                    Notre Histoire & Nos Valeurs
                </span>

                <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                    Plus qu'un contrôle, <br />
                    votre partenaire sécurité.
                </h1>
                
                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto font-medium">
                    Depuis plus de 10 ans, nous accompagnons les automobilistes avec une exigence : allier expertise technique et pédagogie bienveillante.
                </p>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection;