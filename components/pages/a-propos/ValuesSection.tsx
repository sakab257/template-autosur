import ValuesGrid from './ValuesGrid'

const ValuesSection = () => {
  return (
    <section className="relative py-48 lg:py-60 bg-blue-500 overflow-hidden">
        
        {/* --- PATTERN DE POINTS (Texture) --- */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
                <defs>
                    <pattern id="values-dot-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="white" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#values-dot-pattern)" />
            </svg>
        </div>

        {/* --- VAGUE DE SÉPARATION HAUTE (Transition Blanc -> Bleu) --- */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
            <svg className="relative block w-[calc(100%+1.3px)] h-12 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
            </svg>
        </div>

        {/* --- CONTENU --- */}
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                    Nos valeurs fondamentales
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto font-medium">
                    Parce que confier son véhicule est une question de confiance, nous avons bâti notre service sur des piliers solides.
                </p>
            </div>
            <ValuesGrid />
        </div>

        {/* --- VAGUE DE SÉPARATION BASSE (Transition Bleu -> Blanc) --- */}
        <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-none z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-12 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>
    </section>
  )
}

export default ValuesSection