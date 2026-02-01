'use client'

import { ArrowRight, Ban, LucideIcon, BadgeEuro, Siren, ShieldAlert } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import SeparationWave from '@/components/ui/SeparationWave'

interface SanctionCard {
    icon: LucideIcon
    title: string
    description: ReactNode
}

const sanctionCards: SanctionCard[] = [
    {
        icon: BadgeEuro,
        title: 'Amende Forfaitaire',
        description: (
            <>
                L'amende est de <strong className="text-blue-300">135€</strong>. Elle peut être majorée jusqu'à 750€ si elle n'est pas réglée dans les temps.
            </>
        ),
    },
    {
        icon: Siren,
        title: 'Immobilisation',
        description: (
            <>
                Les forces de l'ordre peuvent immobiliser votre véhicule immédiatement et retenir votre <strong className="text-white">carte grise</strong> (fiche provisoire de 7 jours).
            </>
        ),
    },
    {
        icon: ShieldAlert,
        title: 'Assurance',
        description: (
            <>
                En cas d'accident responsable, votre assureur peut <strong className="text-blue-300">refuser de vous couvrir</strong> si le défaut de CT est lié à la cause de l'accident.
            </>
        ),
    },
]

// 1. Définition des animations du conteneur (la grille)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Délai de 0.2s entre chaque carte
        },
    },
}

// 2. Définition des animations des enfants (les cartes)
const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 40 // Commence 40px plus bas
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.5, 
            ease: "easeOut" as const
        }
    },
}

const SanctionSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-blue-500 overflow-hidden">

        {/* --- PATTERN DE POINTS (Texture) --- */}
        <div className="absolute inset-0 opacity-20 pointer-events-none lg:translate-y-3">
            <svg width="100%" height="100%">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
        </div>

        <SeparationWave position="top" fillColor="fill-white" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">

            {/* EN-TÊTE */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg text-blue-600 mb-6">
                    <Ban size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                    Les risques en cas de retard
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
                    Rouler sans contrôle technique valide n'est pas anodin. Au-delà de l'amende, c'est votre sécurité et vos garanties qui sont en jeu.
                </p>
            </div>

            {/* 3. Application des animations sur la grille */}
            <motion.div 
                className="grid md:grid-cols-3 gap-6 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // L'anim se lance quand 20% de la grille est visible
            >
                {sanctionCards.map((card) => {
                    const Icon = card.icon
                    return (
                        <motion.div
                            key={card.title}
                            variants={cardVariants} // Application de la variante enfant
                            whileHover={{ 
                                y: -8, // Légère montée au survol
                                transition: { duration: 0.3 } 
                            }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 text-blue-600 shadow-md">
                                <Icon size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    )
                })}
            </motion.div>

            {/* CTA FINAL */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-blue-900/40 mx-auto max-w-6xl relative overflow-hidden"
            >
                {/* Décoration de fond subtile dans la carte blanche */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>

                <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                        Ne prenez aucun risque inutile.
                    </h3>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto font-medium">
                        Vous avez un doute sur votre date ? Prenez rendez-vous dès maintenant pour sécuriser votre véhicule et votre porte-monnaie.
                    </p>
                    <Link
                        href="/rendez-vous"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-md"
                    >
                        Réserver mon créneau
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default SanctionSection