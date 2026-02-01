'use client'

import { motion } from 'framer-motion'
import { Eye, CheckSquare } from 'lucide-react'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

const controlPoints = [
    "Identification du véhicule",
    "Freinage (efficacité, équilibre)",
    "Direction (jeux, état)",
    "Visibilité (vitrage, rétroviseurs)",
    "Éclairage et signalisation",
    "Liaison au sol (pneus, suspensions)",
    "Structure et carrosserie",
    "Équipements (ceintures, klaxon)",
    "Organes mécaniques",
    "Pollution et niveau sonore",
];

const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
}

const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const ControlPointsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-blue-500 overflow-hidden">
        
        {/* Vague Haut (Blanc -> Bleu) */}
        <SeparationWave position="top" fillColor="fill-white" />
        
        <DotPattern className='translate-y-2'/>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
                    <Eye size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                    133 Points de Contrôle
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                    Le contrôle technique vérifie 10 fonctions principales essentielles pour la sécurité et l'environnement.
                </p>
            </div>

            <motion.div 
                variants={containerVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            >
                {controlPoints.map((point) => (
                    <motion.div
                        key={point}
                        variants={itemVars}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/20 transition-colors duration-300 text-center flex flex-col items-center justify-center gap-3 min-h-35 group"
                    >
                        <CheckSquare className="text-blue-300 w-8 h-8 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        <span className="text-white font-medium text-sm leading-tight">{point}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  )
}

export default ControlPointsSection