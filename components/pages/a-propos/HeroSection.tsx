'use client';

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import SeparationWave from '@/components/ui/SeparationWave';

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-48 lg:pt-32 lg:pb-60 overflow-hidden bg-blue-500 text-white">
        {/* --- BACKGROUND PATTERN --- */}
        {/* On passe les points en blanc avec une opacité réduite */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%">
                <defs>
                    <pattern id="hero-dot-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" className="fill-white" />
                    </pattern>
                    <linearGradient id="hero-fade" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity={0} /> {/* StopColor n'importe peu ici, c'est le mask qui compte, mais gardons la logique */}
                        <stop offset="50%" stopColor="white" stopOpacity={1} />
                        <stop offset="100%" stopColor="white" stopOpacity={0} />
                    </linearGradient>
                    {/* Masque pour créer l'effet de fondu sur les points */}
                    <mask id="hero-mask">
                        <rect width="100%" height="100%" fill="url(#hero-fade)" />
                    </mask>
                </defs>
                {/* Application du pattern avec le masque */}
                <rect width="100%" height="100%" fill="url(#hero-dot-pattern)" mask="url(#hero-mask)" />
            </svg>
        </div>

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