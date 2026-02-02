'use client'

import { CalendarClock } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const HeroSection = () => {
    return (
        <PageHero
            icon={CalendarClock}
            badge="Réservation 24/7"
            title={<>Votre contrôle technique <br /><span className="text-blue-200">en quelques clics.</span></>}
            description="Choisissez le créneau qui vous convient. Confirmation immédiate par SMS et rappel automatique la veille."
        />
    )
}

export default HeroSection
