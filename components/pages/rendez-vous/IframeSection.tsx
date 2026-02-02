'use client'

import { CheckCircle2, MessageSquare, Clock, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

// L'URL fournie pour l'iframe
const BOOKING_IFRAME_URL = "https://ivry.automsa.fr/reservation/iframe/fAwX9xZmBp";

const benefits = [
    {
        icon: Clock,
        title: "Rapide & Gratuit",
        desc: "Réservez en moins de 2 minutes, sans frais de dossier."
    },
    {
        icon: MessageSquare,
        title: "Confirmation SMS",
        desc: "Recevez instantanément votre confirmation et un rappel la veille."
    },
    {
        icon: ShieldCheck,
        title: "Paiement Sécurisé",
        desc: "Réglez sur place en carte bancaire, espèce ou chèque, selon votre préférence."
    },
]

const IframeSection = () => {
  return (
    <section className="relative py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                
                {/* COLONNE GAUCHE : Arguments & Infos (Desktop) */}
                {/* On le met à gauche pour guider l'œil avant l'action, ou à droite selon préférence. Ici Gauche pour l'intro. */}
                <div className="w-full lg:w-1/3 space-y-8 lg:sticky lg:top-32">
                    
                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                        <h3 className="text-xl font-black text-blue-900 mb-6">
                            Pourquoi réserver en ligne ?
                        </h3>
                        <div className="space-y-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                                        <benefit.icon size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-500 rounded-3xl p-8 text-white relative overflow-hidden">
                        {/* Déco */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                        
                        <h3 className="text-lg font-bold mb-2 relative z-10">Un empêchement ?</h3>
                        <p className="text-slate-100 text-sm mb-4 relative z-10">
                            Vous pouvez modifier ou annuler votre rendez-vous gratuitement jusqu'à 24h avant via le lien reçu par SMS.
                        </p>
                    </div>

                </div>

                {/* COLONNE DROITE : L'Agenda (Iframe) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full lg:w-2/3"
                >
                    <div className="bg-white rounded-3xl shadow-lg border border-blue-500/10 overflow-hidden min-h-150 lg:min-h-187.5">
                        <iframe
                            src={BOOKING_IFRAME_URL}
                            className="w-full h-200 lg:h-212.5 border-0"
                            title="Réservation de rendez-vous Autosur"
                            loading="lazy"
                            allow="geolocation" // Parfois utile pour les widgets de localisation
                        />
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-4">
                        Module de réservation sécurisé par Autosur
                    </p>
                </motion.div>

            </div>
        </div>
    </section>
  )
}

export default IframeSection