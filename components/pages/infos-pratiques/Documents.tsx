// components/pages/infos-pratiques/Documents.tsx
import ChecklistCard from "./ChecklistCard";
import { ClipboardList } from "lucide-react";
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

const Documents = () => {
  return (
    // On utilise bg-blue-600 pour la cohérence avec les autres sections bleues
    <section className="relative py-24 lg:py-32 bg-blue-500 overflow-hidden">
        
        <DotPattern />

        <SeparationWave 
            position="top" 
            fillColor="fill-white" 
        />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            {/* En-tête de section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg text-blue-600 mb-6">
                    <ClipboardList size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                    Préparez vos documents
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
                    Pour un accueil fluide, assurez-vous d'avoir les éléments suivants <br />
                    le jour J.
                </p>
            </div>

            {/* Grille des cartes */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <ChecklistCard
                    title="Documents Obligatoires"
                    items={[
                        "Carte grise du véhicule (originale)",
                        "Ancien procès-verbal (si contre-visite)",
                        "Justificatif d'identité",
                        "Notice descriptive (si véhicule modifié)"
                    ]}
                    delay={0}
                />
                <ChecklistCard
                    title="Recommandations"
                    items={[
                        "Carnet d'entretien du véhicule",
                        "Attestation d'assurance valide",
                        "Écrou antivol des roues (si présent)",
                        "Manuel du véhicule (témoins tableau de bord)"
                    ]}
                    delay={0.1}
                />
            </div>
        </div>
        <SeparationWave 
            position="bottom" 
            fillColor="fill-white" 
            flip
        />
    </section>
  )
}

export default Documents