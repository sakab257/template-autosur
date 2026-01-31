'use client'

import { useRef } from 'react'
import { Car, Truck, CarFront, Leaf, RotateCcw, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

const tarifs = [
    {
        icon: Car,
        categorie: "Véhicule Particulier",
        description: "Voitures essence et diesel",
        prix: 75,
        ancienPrix: 79,
        promo: "Promo Web",
        inclus: ["Contrôle des 133 points", "Procès-verbal détaillé", "Vignette officielle"],
    },
    {
        icon: Truck,
        categorie: "Utilitaire Léger",
        description: "Véhicules utilitaires légers",
        prix: 86,
        ancienPrix: 90,
        promo: "Promo Web",
        inclus: ["Contrôle des 133 points", "Procès-verbal détaillé", "Vignette officielle"],
    },
    {
        icon: CarFront,
        categorie: "4x4 / Grand Utilitaire",
        description: "SUV, 4x4 et grands utilitaires",
        prix: 91,
        ancienPrix: 95,
        promo: "Promo Web",
        inclus: ["Contrôle des 133 points", "Procès-verbal détaillé", "Vignette officielle"],
    },
    {
        icon: Leaf,
        categorie: "Véhicule Hybride",
        description: "Véhicules hybrides et électriques",
        prix: 86,
        ancienPrix: 90,
        promo: "Promo Web",
        inclus: ["Contrôle des 133 points", "Procès-verbal détaillé", "Vignette officielle"],
    },
    {
        icon: RotateCcw,
        categorie: "Contre-Visite",
        description: "Suite à un contrôle défavorable",
        prix: 30,
        ancienPrix: null,
        promo: null,
        inclus: ["Vérification des points défaillants", "Nouveau procès-verbal"],
    },
]

export default function TarifsCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 320
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="relative">
            {/* Boutons de navigation */}
            <button
                onClick={() => scroll('left')}
                className="cursor-pointer absolute -left-24 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 hidden lg:flex active:scale-90"
                aria-label="Précédent"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => scroll('right')}
                className="cursor-pointer absolute -right-24 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 hidden lg:flex active:scale-90"
                aria-label="Suivant"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-16 px-4 -mx-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {tarifs.map((tarif, index) => {
                    const Icon = tarif.icon
                    return (
                        <div
                            key={index}
                            className="shrink-0 w-72 snap-center bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Badge promo */}
                            {tarif.promo && (
                                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {tarif.promo}
                                </div>
                            )}

                            {/* Icône */}
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                                <Icon className="w-8 h-8 text-blue-600" />
                            </div>

                            {/* Catégorie */}
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {tarif.categorie}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                {tarif.description}
                            </p>

                            {/* Prix */}
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-3xl font-extrabold text-blue-600">
                                    {tarif.prix}€
                                </span>
                                {tarif.ancienPrix && (
                                    <span className="text-lg text-gray-400 line-through">
                                        {tarif.ancienPrix}€
                                    </span>
                                )}
                            </div>

                            {/* Inclus */}
                            <ul className="space-y-2">
                                {tarif.inclus.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="text-blue-500 mt-0.5">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Bouton voir tous les tarifs */}
            <div className="flex justify-center mt-8">
                <a
                    href="#tarifs-table"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                >
                    Voir tous les tarifs
                    <ChevronDown className="w-5 h-5" />
                </a>
            </div>
        </div>
    )
}
