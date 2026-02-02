import { Lock, Eye, Database, Cookie } from 'lucide-react'

const PrivacyContent = () => {
  return (
    <section className="relative py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
                
                {/* Introduction */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        La protection de vos données personnelles est une priorité pour nous. 
                        Cette politique de confidentialité vous explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site de réservation de contrôle technique.
                    </p>
                </div>

                {/* Section 1 : Collecte */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <Database size={20} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Données collectées</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Dans le cadre de la prise de rendez-vous et de la gestion de notre relation client, nous pouvons être amenés à collecter les données suivantes :
                    </p>
                    <ul className="space-y-3">
                        {[
                            "Informations d'identité (Nom, Prénom)",
                            "Coordonnées (Email, Numéro de téléphone)",
                            "Informations sur le véhicule (Immatriculation, Modèle, Date de mise en circulation)",
                            "Historique de vos rendez-vous"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Section 2 : Utilisation */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <Eye size={20} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Utilisation des données</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Vos données sont utilisées exclusivement pour les finalités suivantes :
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {[
                            "Gestion et confirmation des rendez-vous",
                            "Envoi de rappels par SMS ou Email (Rappel CT)",
                            "Édition des procès-verbaux et factures",
                            "Amélioration de nos services"
                        ].map((item, i) => (
                            <li key={i} className="bg-slate-50 rounded-xl p-4 text-slate-700 text-sm font-medium border border-slate-100">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Section 3 : Cookies */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <Cookie size={20} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Cookies & Traceurs</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Notre site utilise des cookies pour améliorer votre expérience de navigation et mesurer l'audience.
                        Vous pouvez à tout moment configurer vos préférences via le gestionnaire de cookies.
                    </p>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-blue-800 text-sm">
                        <strong className="block mb-1">Note importante :</strong>
                        Les cookies nécessaires au fonctionnement technique du site (prise de RDV) ne peuvent pas être désactivés.
                    </div>
                </div>

                {/* Section 4 : Sécurité */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <Lock size={20} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Sécurité des données</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                        Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction. Vos données ne sont jamais vendues à des tiers.
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default PrivacyContent