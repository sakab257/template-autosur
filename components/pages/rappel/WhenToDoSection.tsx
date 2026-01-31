'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CarFront, Repeat, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface WhenToDoCard {
    icon: LucideIcon
    title: string
    description: ReactNode
    example: string
}

const whenToDoCards: WhenToDoCard[] = [
    {
        icon: CarFront,
        title: 'Véhicule Neuf',
        description: (
            <>
                Le tout premier contrôle doit être effectué dans les <strong className="text-blue-700">6 mois précédant le 4ème anniversaire</strong> de la mise en circulation.
            </>
        ),
        example: 'Immatriculé le 15/03/2021 → CT à faire entre le 15/09/2024 et le 15/03/2025.',
    },
    {
        icon: Repeat,
        title: 'Renouvellement',
        description: (
            <>
                Une fois le premier passage effectué, le contrôle est à renouveler <strong className="text-blue-700">tous les 2 ans</strong>, avant la date indiquée sur votre vignette.
            </>
        ),
        example: 'Dernier CT le 10/01/2024 → Prochain CT avant le 10/01/2026.',
    },
]

const WhenToDo = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                    Quand passer mon <span className="text-blue-600">Contrôle ?</span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    La réglementation diffère selon l'âge de votre véhicule. Voici les règles simples à retenir.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {whenToDoCards.map((card, index) => {
                    const Icon = card.icon
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Icon size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                                    <Icon size={24} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {card.description}
                                </p>
                                <div className="bg-slate-50 rounded-xl p-4 text-sm">
                                    <span className="font-bold text-slate-900 block mb-1">Exemple :</span>
                                    {card.example}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Bon à savoir */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-12 max-w-5xl mx-auto bg-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 flex gap-4 items-start"
            >
                <div className="shrink-0">
                    <AlertCircle className="text-blue-600 mt-1" />
                </div>
                <div>
                    <h4 className="font-bold text-blue-900 mb-1">L'astuce Autosur</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                        Vous pouvez passer le contrôle jusqu'à 6 mois avant la date butoir sans perdre la validité de votre date initiale. N'attendez pas la dernière minute !
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default WhenToDo