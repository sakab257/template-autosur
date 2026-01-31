import { Settings } from 'lucide-react'

const controlSteps = [
    {
        step: 1,
        title: "Accueil & Vérification",
        description: "Présentation des documents et vérification de l'identité du véhicule.",
    },
    {
        step: 2,
        title: "Contrôle visuel",
        description: "Inspection des éléments de carrosserie, éclairage, pneumatiques et équipements.",
    },
    {
        step: 3,
        title: "Contrôle mécanique",
        description: "Vérification du freinage, de la direction, des suspensions et des trains roulants.",
    },
    {
        step: 4,
        title: "Contrôle pollution",
        description: "Analyse des émissions de gaz d'échappement selon les normes en vigueur.",
    },
    {
        step: 5,
        title: "Remise du PV",
        description: "Édition du procès-verbal et explication des résultats par le contrôleur.",
    },
];

const ControlProgress = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Settings className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                            Déroulement du contrôle
                        </h2>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2" />

                        <div className="space-y-8 lg:space-y-0">
                            {controlSteps.map((item, index) => (
                                <div
                                    key={item.step}
                                    className={`relative lg:flex lg:items-center lg:gap-8 ${
                                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                                >
                                    {/* Content */}
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                                        <div className="bg-slate-50 rounded-2xl p-6 inline-block lg:block">
                                            <div className="flex items-center gap-3 mb-2 lg:justify-start">
                                                <span className="lg:hidden w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                                    {item.step}
                                                </span>
                                                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                            </div>
                                            <p className="text-slate-600">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Step number (desktop) */}
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                                        {item.step}
                                    </div>

                                    {/* Empty space for opposite side */}
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