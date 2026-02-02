'use client'

import { MapPin } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const HeroSection = () => {
    return (
        <PageHero
            icon={MapPin}
            badge="Nous trouver"
            title="Accès & Plan"
        >
            {/* Adresse mise en valeur */}
            <div className="inline-flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8">
                <p className="text-xl lg:text-2xl text-white font-medium">
                    <span className="block text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">Adresse du centre</span>
                    <strong className="block text-3xl lg:text-4xl font-black mb-1">1 Avenue de la France</strong>
                    75001 Paris, France
                </p>
            </div>
        </PageHero>
    )
}

export default HeroSection
