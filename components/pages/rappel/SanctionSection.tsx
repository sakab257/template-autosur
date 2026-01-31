import { ArrowRight, Ban } from 'lucide-react'
import Link from 'next/link'

const SanctionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                            <Ban className="w-6 h-6 text-red-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                            Que se passe-t-il si je dépasse la date ?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                <span className="text-2xl">💶</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Amende</h3>
                            <p className="text-slate-600">
                                Circuler avec un CT non valide est passible d&apos;une
                                <strong className="text-red-600"> amende de 135€</strong> (pouvant
                                aller jusqu&apos;à 750€ en cas de majoration).
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                <span className="text-2xl">🚗</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Immobilisation</h3>
                            <p className="text-slate-600">
                                Votre véhicule peut être <strong className="text-red-600">immobilisé</strong> par
                                les forces de l&apos;ordre jusqu&apos;à présentation d&apos;un contrôle technique valide.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                <span className="text-2xl">📋</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Assurance</h3>
                            <p className="text-slate-600">
                                En cas d&apos;accident, votre assurance peut
                                <strong className="text-red-600"> refuser de vous indemniser</strong> si
                                votre contrôle technique n&apos;est pas à jour.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-linear-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Ne prenez pas de risque !
                        </h3>
                        <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                            Un contrôle technique à jour, c&apos;est rouler en toute sérénité.
                            Prenez rendez-vous dès maintenant pour éviter les mauvaises surprises.
                        </p>
                        <Link
                            href="/rendez-vous"
                            className="inline-flex items-center gap-2 bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-xl hover:bg-red-50 transition-colors"
                        >
                            Prendre rendez-vous
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
  )
}

export default SanctionSection