'use client'

import { Briefcase } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const HeroSection = () => {
    return (
        <PageHero
            icon={Briefcase}
            badge="Carrières"
            title={<>Rejoignez notre <br /><span className="text-blue-200">équipe d'experts.</span></>}
            description="Vous souhaitez intégrer une structure dynamique et passionnée par l'automobile ? Découvrez nos opportunités et construisons l'avenir ensemble."
        />
    )
}

export default HeroSection
