'use client'

import { motion } from 'framer-motion'
import { Scale, ShieldCheck } from 'lucide-react'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

interface LegalHeroProps {
    title: string;
    subtitle: string;
    icon: "legal" | "privacy";
    lastUpdate?: string;
}

const LegalHero = ({ title, subtitle, icon, lastUpdate }: LegalHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-blue-500 overflow-hidden">
        
        <DotPattern />

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
                    {icon === "legal" ? <Scale size={14} strokeWidth={3} /> : <ShieldCheck size={14} strokeWidth={3} />}
                    Information Légale
                </span>

                <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                    {title}
                </h1>
                
                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto font-medium">
                    {subtitle}
                </p>

                {lastUpdate && (
                    <p className="mt-8 text-sm text-blue-200 font-mono bg-blue-900/30 inline-block px-4 py-2 rounded-lg border border-blue-500/30">
                        Dernière mise à jour : {lastUpdate}
                    </p>
                )}
            </motion.div>
        </div>
    </section>
  )
}

export default LegalHero