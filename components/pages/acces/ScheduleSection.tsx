import { Bus, Car, ParkingCircle, TrainFront } from "lucide-react"
import OpeningHours from "@/components/pages/acces/OpeningHours"
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from "@/components/ui/DotPattern"

const howToCome = [
    {
        icon: Car, 
        title: "En voiture", 
        paragraph: "Depuis le périphérique, prendre la sortie Porte de Versailles. Suivre les indications vers le centre-ville. Notre centre se situe à 500m sur votre droite après le feu."
    },
    {
        icon: Bus, 
        title: "En transport", 
        list: [
            {strong: "Métro :", text: "Ligne 12, arrêt Convention (5 min)"},
            {strong: "Bus :", text: "Lignes 39, 80, arrêt Centre Technique"},
            {strong: "Tramway :", text: "T3a, arrêt Porte de Versailles"}
        ]
    },
    {
        icon: ParkingCircle, 
        title: "Parking", 
        paragraph: "Parking gratuit réservé à la clientèle (20 places). Un parking public payant se trouve également à 100m."
    },
]

const ScheduleSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-blue-500">
        
        {/* Vague Haut (Blanc -> Slate) */}
        <SeparationWave position="top" fillColor="fill-white" className="-mt-1px" />

        <DotPattern />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* Colonne Gauche : Comment venir (7 cols) */}
                <div className="lg:col-span-7 space-y-8">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                            Comment venir ?
                        </h2>
                        <p className="text-slate-100 text-lg mb-8">
                            Notre centre est facilement accessible, que vous veniez en voiture ou en transports en commun.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {howToCome.map((element) => (
                            <div key={element.title} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                        <element.icon className="w-6 h-6 text-blue-600" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{element.title}</h3>
                                        {element.paragraph && (
                                            <p className="text-slate-600 leading-relaxed">{element.paragraph}</p>
                                        )}
                                        {element.list && (
                                            <ul className="space-y-2">
                                                {element.list.map((item, idx) => (
                                                    <li key={idx} className="text-slate-600">
                                                        <strong className="text-slate-900">{item.strong}</strong> {item.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Colonne Droite : Horaires (5 cols) */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <OpeningHours />
                    </div>
                </div>
            </div>
        </div>

        {/* Vague Bas (Slate -> Blanc) */}
        <SeparationWave position="bottom" fillColor="fill-white" flip className="translate-y-px" />
    </section>
  )
}

export default ScheduleSection