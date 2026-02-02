'use client'

import { FileText } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const HeroSection = () => {
    return (
        <PageHero
            icon={FileText}
            badge="Guide Pratique"
            title={<>Tout savoir sur le <br /><span className="text-blue-200">contrôle technique.</span></>}
            description="Préparez votre visite sereinement. Documents, déroulement, points de vérification : on vous explique tout."
        />
    )
}

export default HeroSection
