import { Settings, Timer } from 'lucide-react'
import SeparationWave from '@/components/ui/SeparationWave'

const controlSteps = [
    {
        step: 1,
        title: "Accueil & Enregistrement",
        description: "Nous vérifions votre carte grise et validons l'identité du véhicule.",
    },
    {
        step: 2,
        title: "Contrôle Visuel",
        description: "Inspection extérieure : carrosserie, éclairage, vitrages, miroirs...",
    },
    {
        step: 3,
        title: "Banc de Mesure",
        description: "Tests de freinage, suspension, pollution et réglage des feux.",
    },
    {
        step: 4,
        title: "Inspection sous Pont",
        description: "Vérification du châssis, de la direction et des organes mécaniques.",
    },
    {
        step: 5,
        title: "Remise du Bilan",
        description: "Le contrôleur vous explique le rapport et colle la vignette.",
    },
];

const ControlProgress = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white">

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 flex items-center gap-3">
                        <Settings className="text-blue-600" size={32} />
                        Déroulement du contrôle
                    </h2>
                    <p className="text-slate-600 text-lg max-w-xl">
                        Une procédure standardisée de 45 minutes pour garantir votre sécurité.
                    </p>
                </div>
                {/* Badge Info Durée */}
                <div className="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl border border-blue-100">
                    <Timer className="text-blue-600" />
                    <div>
                        <span className="block text-xs font-bold text-blue-400 uppercase tracking-wide">Durée Moyenne</span>
                        <span className="block text-lg font-bold text-blue-900">30 à 45 min</span>
                    </div>
                </div>
            </div>

            <div className="relative">
                {/* Ligne centrale (Desktop) */}
                <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-100 -translate-x-1/2 rounded-full" />

                <div className="space-y-8 lg:space-y-0">
                    {controlSteps.map((item, index) => (
                        <div
                            key={item.step}
                            className={`relative lg:flex lg:items-center lg:gap-12 ${
                                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                        >
                            {/* Carte Contenu */}
                            <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                <div className={`
                                    bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow
                                    ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}
                                `}>
                                    <div className={`flex items-center gap-3 mb-2 lg:hidden`}>
                                        <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                            {item.step}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                    </div>
                                    <h3 className="hidden lg:block text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>

                            {/* Point Central (Desktop) */}
                            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-100 items-center justify-center z-10">
                                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            </div>

                            {/* Espace vide pour équilibre */}
                            <div className="hidden lg:block lg:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ControlProgress