const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-br from-white via-blue-50 to-blue-100 py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                            Tout savoir
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            Tout sur le contrôle technique
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                            Retrouvez toutes les informations pratiques pour préparer votre contrôle technique :
                            documents nécessaires, déroulement, points vérifiés et questions fréquentes.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default HeroSection