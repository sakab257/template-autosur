'use client'

import { motion } from 'framer-motion'
import { Building2, Award, Star, Users } from 'lucide-react'

const stats = [
    { icon: Building2, value: "10+", label: "Années d'expérience" },
    { icon: Award, value: "50K+", label: "Contrôles réalisés" },
    { icon: Star, value: "4.9", label: "Note Google / 5" },
    { icon: Users, value: "500+", label: "Clients satisfaits" },
]

const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
} as const;

const HistorySection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Vague de séparation haut (optionnelle si collé au Hero, mais ajoute du style) */}
        
        <div className="container mx-auto px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* --- COLONNE GAUCHE : TEXTE --- */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
                        Une décennie d'engagement <br/> pour votre <span className="text-blue-600">sécurité</span>.
                    </h2>
                    
                    <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                        <p>
                            Fondé en 2014, notre centre est né d'une conviction simple : le <strong className='font-normal'>contrôle technique</strong> ne doit pas être une contrainte opaque, mais un moment de rassurance.
                        </p>
                        <p>
                            Au fil des années, nous avons investi massivement dans des équipements de pointe pour suivre les évolutions technologiques (véhicules hybrides, électriques, aides à la conduite).
                        </p>
                        <div className="pl-6 border-l-4 border-blue-200 italic text-slate-500">
                            "Notre fierté n'est pas seulement de coller une vignette, mais de vous voir repartir en toute sérénité."
                        </div>
                    </div>
                </motion.div>

                {/* --- COLONNE DROITE : STATS GRID --- */}
                <div className="w-full lg:w-1/2">
                    <motion.div 
                        variants={containerVars}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4 lg:gap-6"
                    >
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon
                            // On décale une colonne sur deux pour un effet "maçonnerie" subtil
                            const isOffset = idx % 2 !== 0 

                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVars}
                                    className={`
                                        bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center justify-center group
                                        ${isOffset ? 'lg:translate-y-8' : ''}
                                    `}
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <Icon size={24} strokeWidth={2.5} />
                                    </div>
                                    <span className="text-3xl lg:text-4xl font-black text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default HistorySection;