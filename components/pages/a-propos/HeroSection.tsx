'use client'

import { Info } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const HeroSection = () => {
    return (
        <PageHero
            icon={Info}
            badge="Notre Histoire & Nos Valeurs"
            title={<>Plus qu'un contrôle, <br />votre partenaire sécurité.</>}
            description="Depuis plus de 10 ans, nous accompagnons les automobilistes avec une exigence : allier expertise technique et pédagogie bienveillante."
        />
    )
}

export default HeroSection
