'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Quote } from 'lucide-react'

const teamInfo = [
    { role: "Directeur de Centre", name: "Jean Dupont", description: "20 ans d'expertise. Il s'assure que chaque contrôle respecte nos standards d'excellence.", initiales: "JD" },
    { role: "Contrôleur Technique", name: "Marie Martin", description: "La rigueur incarnée. Spécialiste des véhicules hybrides et électriques.", initiales: "MM" },
    { role: "Contrôleur Technique", name: "Pierre Bernard", description: "Passionné de mécanique, il prend le temps d'expliquer chaque détail du bilan.", initiales: "PB" },
]

const TeamSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center mb-16">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">L'humain avant tout</span>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                    Rencontrez nos experts
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {teamInfo.map((member, idx) => (
                    <motion.div 
                        key={member.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Décoration background */}
                        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-r from-blue-500 to-blue-600 rounded-t-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                            {/* Avatar */}
                            <div className="w-24 h-24 rounded-full bg-white p-1.5 shadow-md mb-6 group-hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full rounded-full bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                                    {member.initiales}
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase mb-6">
                                <BadgeCheck size={14} />
                                {member.role}
                            </div>

                            {/* Description / Quote */}
                            <div className="relative text-center">
                                <Quote className="w-6 h-6 text-blue-100 absolute -top-2 -left-2 -scale-x-100" />
                                <p className="text-slate-600 text-sm leading-relaxed relative z-10 px-2">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default TeamSection;