import { Eye } from 'lucide-react'

const controlPoints = [
    "Identification du véhicule",
    "Freinage (efficacité, équilibre)",
    "Direction (jeux, état)",
    "Visibilité (vitrage, rétroviseurs)",
    "Éclairage et signalisation",
    "Liaison au sol (pneus, suspensions)",
    "Structure et carrosserie",
    "Équipements (ceintures, klaxon)",
    "Organes mécaniques",
    "Pollution et niveau sonore",
];

const ControlPointsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Eye className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                            Points de contrôle
                        </h2>
                    </div>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                        Le contrôle technique vérifie 133 points répartis en 10 fonctions principales.
                        Voici les grandes catégories inspectées :
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {controlPoints.map((point) => (
                            <div
                                key={point}
                                className="bg-white rounded-xl p-4 border border-slate-100 text-center hover:border-blue-200 hover:shadow-sm transition-all"
                            >
                                <span className="text-slate-700 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
  )
}

export default ControlPointsSection