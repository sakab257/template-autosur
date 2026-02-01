import ValuesGrid from './ValuesGrid'
import SeparationWave from '@/components/ui/SeparationWave'

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

        <SeparationWave position="top" variant="wave2" fillColor="fill-white" flip height="h-12 lg:h-24" />

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

        <SeparationWave position="bottom" fillColor="fill-white" flip height="h-12 lg:h-24" />
    </section>
  )
}

export default ValuesSection