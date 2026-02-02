import PageCTA from '@/components/ui/PageCTA'

const CTASection = () => {
    return (
        <PageCTA
            title="Prêt à rouler l'esprit tranquille ?"
            description="Rejoignez les milliers d'automobilistes qui nous font confiance chaque année. Simple, rapide, agréé."
            primaryButtonText="Prendre rendez-vous"
            primaryButtonHref="/rendez-vous"
            secondaryButtonText="Voir nos tarifs"
            secondaryButtonHref="/tarifs"
        />
    )
}

export default CTASection
