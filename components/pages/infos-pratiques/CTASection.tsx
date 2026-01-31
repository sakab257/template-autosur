import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                        Prêt pour votre contrôle ?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Réservez votre créneau en quelques clics et bénéficiez d'un contrôle technique
                        rapide et professionnel.
                    </p>
                    <Link
                        href="/rendez-vous"
                        className="inline-flex items-center gap-2 bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-red-700 transition-colors"
                    >
                        Prendre rendez-vous
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
  )
}

export default CTASection