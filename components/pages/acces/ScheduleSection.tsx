import { Bus, Car, ParkingCircle } from "lucide-react"
import OpeningHours from "@/components/pages/acces/OpeningHours"

const howToCome = [
    {icon: Car, title: "En voiture", paragraph: "Depuis le périphérique, prendre la sortie Porte de Versailles. Suivre les indications vers le centre-ville. Notre centre se situe à 500m sur votre droite après le feu."},
    {icon: Bus, title: "En transport", list: [
        {strong: "Métro :", text: "Ligne 12, arrêt Convention (5 min à pied)"},
        {strong: "Bus :", text: "Lignes 39, 80, arrêt Centre Technique"},
        {strong: "Tramway :", text: "T3a, arrêt Porte de Versailles (10 min à pied)"},
    ]},
    {icon: ParkingCircle, title: "Parking", paragraph: "Parking gratuit sur place avec 20 places disponibles. Un parking public payant se trouve également à 100m."},
]

const ScheduleSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Comment venir */}
                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
                                Comment venir ?
                            </h2>
                                {howToCome.map((element) => (
                                    <div key={element.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                                <element.icon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900">{element.title}</h3>
                                        </div>
                                        {element.paragraph && (
                                            <p className="text-slate-600 leading-relaxed">{element.paragraph}</p>
                                        )}
                                        {element.list && (
                                            <p className="text-slate-600 leading-relaxed">
                                                {element.list.map((item) => (
                                                    <span key={item.strong}>
                                                        <strong>{item.strong}</strong> {item.text} <br />
                                                    </span>
                                                ))}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            

                            
                        </div>

                        {/* Horaires */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
                                Horaires
                            </h2>
                            <OpeningHours />
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default ScheduleSection