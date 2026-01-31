import { Calendar } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-br from-white via-blue-50 to-blue-100 py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 mb-6">
                            <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
                            Prenez rendez-vous
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                            Réservez votre créneau en quelques clics. Choisissez la date et l&apos;heure
                            qui vous conviennent le mieux.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default HeroSection