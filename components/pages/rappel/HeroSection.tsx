import CTCalculator from "@/components/pages/rappel/CTCalculator";

const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-br from-white via-blue-50 to-blue-100 py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                                Rappel CT
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                Mon prochain contrôle technique
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                                Calculez facilement la date de votre prochain contrôle technique
                                et ne soyez plus jamais en retard.
                            </p>
                        </div>
                        <CTCalculator />
                    </div>
                </div>
            </section>
  )
}

export default HeroSection