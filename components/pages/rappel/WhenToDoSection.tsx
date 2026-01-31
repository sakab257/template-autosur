import { AlertCircle, HelpCircle } from 'lucide-react'

const WhenToDo = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <HelpCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                            Quand faire son contrôle technique ?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                Véhicule neuf
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Pour un véhicule neuf, le premier contrôle technique doit être effectué
                                <strong className="text-slate-900"> dans les 6 mois précédant le 4ème anniversaire</strong> de
                                sa première mise en circulation.
                            </p>
                            <div className="bg-white rounded-xl p-4 border border-slate-200">
                                <p className="text-sm text-slate-500">Exemple :</p>
                                <p className="text-slate-700">
                                    Véhicule immatriculé le <strong>15 mars 2021</strong><br />
                                    Premier CT entre le <strong>15 septembre 2024</strong> et le <strong>15 mars 2025</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                Véhicule d&apos;occasion
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Pour un véhicule déjà contrôlé, le renouvellement doit être effectué
                                <strong className="text-slate-900"> tous les 2 ans</strong>, dans les 6 mois
                                précédant la date d&apos;échéance indiquée sur votre procès-verbal.
                            </p>
                            <div className="bg-white rounded-xl p-4 border border-slate-200">
                                <p className="text-sm text-slate-500">Exemple :</p>
                                <p className="text-slate-700">
                                    Dernier CT le <strong>10 janvier 2024</strong><br />
                                    Prochain CT entre le <strong>10 juillet 2025</strong> et le <strong>10 janvier 2026</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Bon à savoir
                        </h4>
                        <p className="text-blue-800">
                            Vous pouvez effectuer votre contrôle technique jusqu&apos;à 6 mois avant la date limite
                            sans perdre de temps sur la validité de votre prochain contrôle. La nouvelle date
                            d&apos;échéance sera calculée à partir de l&apos;ancienne date limite, pas de la date du contrôle.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default WhenToDo