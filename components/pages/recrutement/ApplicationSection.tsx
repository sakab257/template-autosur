// components/pages/recrutement/ApplicationSection.tsx
import ApplicationForm from "@/components/pages/recrutement/ApplicationForm";
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

const list = [
    "Envoi de candidature",
    "Étude de votre dossier",
    "Entretien téléphonique",
    "Entretien en personne",
]

const ApplicationSection = () => {
  return (
    <section className="relative pt-24 lg:pt-32 bg-white">
        
        {/* Vague Haut (Bleu -> Blanc) */}
        {/* Le bleu vient de la section précédente (OurWork) */}
        <SeparationWave position="top" fillColor="fill-white" className="-mt-px" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                
                {/* Colonne Texte */}
                <div className="lg:sticky lg:top-32">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Postulez <br /><span className="text-blue-600">maintenant.</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                        Aucune offre ne correspond à votre profil ? Envoyez-nous une candidature
                        spontanée ! Nous étudions toutes les opportunités avec attention.
                    </p>
                    
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                        <h4 className="text-xl font-bold text-slate-900 mb-6">Processus de recrutement</h4>
                        <div className="space-y-6">
                            {list.map((text, index) => (
                                <div key={text} className="flex items-center gap-4 group">
                                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 text-lg flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        {index + 1}
                                    </span>
                                    <span className="font-bold text-slate-700 group-hover:text-blue-900 transition-colors">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Colonne Formulaire */}
                <ApplicationForm />
            </div>
        </div>

        {/* Transition vers le Footer (Blanc -> Bleu) */}
        <div className="relative h-32 lg:h-40 bg-blue-500 mt-24 overflow-hidden translate-y-3">
            <DotPattern />
            <SeparationWave position="top" fillColor="fill-white" />
        </div>
    </section>
  )
}

export default ApplicationSection