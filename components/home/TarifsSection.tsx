import TarifsCarousel from './tarifs/TarifsCarousel'
import TarifsTable from './tarifs/TarifsTable'

export default function TarifsSection() {
    return (
        <section
            id="tarifs"
            className="relative min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] scroll-mt-20 lg:scroll-mt-24 bg-linear-to-b from-white via-blue-50/50 to-white pb-16"
        >

            {/* --- CONTENU --- */}
            <div className="container mx-auto px-6 lg:px-16 pt-24">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                        Nos Tarifs Transparents
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Des prix clairs et compétitifs pour tous types de véhicules.
                        Pas de frais cachés, pas de mauvaises surprises.
                    </p>
                </div>

                {/* Carousel de cartes */}
                <TarifsCarousel />

                {/* Tableau récapitulatif */}
                <TarifsTable />
            </div>
        </section>
    )
}
