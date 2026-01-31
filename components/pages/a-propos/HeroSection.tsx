'use client';

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

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

        {/* --- VAGUE DE TRANSITION (BAS) --- */}
        {/* Connecte le Hero Bleu à la section suivante (History) qui est blanche */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg className="relative block w-[calc(100%+1.3px)] h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
            </svg>
        </div>

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