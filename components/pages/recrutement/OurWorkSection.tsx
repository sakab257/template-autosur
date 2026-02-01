'use client'

import { Briefcase, Wrench, UserCheck, CheckCircle2 } from "lucide-react";
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

const jobs = [
    {
        icon: Wrench,
        title: "Contrôleur Technique",
        description: "Vous réalisez les contrôles techniques des véhicules selon la réglementation en vigueur. Titulaire du diplôme de contrôleur technique automobile, vous avez idéalement une première expérience dans le domaine.",
        requirements: ["Diplôme de contrôleur technique", "Agrément préfectoral", "Rigueur et sens du détail"],
    },
    {
        icon: UserCheck,
        title: "Agent d'accueil",
        description: "Vous accueillez les clients, gérez les rendez-vous et assurez le suivi administratif. Votre sens du service client et votre organisation font de vous un élément clé de notre équipe.",
        requirements: ["Excellent relationnel", "Maîtrise des outils informatiques", "Organisation"],
    },
];

const OurWorkSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-blue-500 overflow-hidden">
        
        {/* Vague Haut (Blanc -> Bleu) */}
        <SeparationWave position="top" fillColor="fill-white" className="-mt-px" />
        
        {/* Pattern */}
        <DotPattern opacity="opacity-10" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
                    <Briefcase size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                    Nos métiers
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                    Découvrez les profils qui composent notre force au quotidien.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {jobs.map((job, index) => {
                    const Icon = job.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center gap-5 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-md">
                                    <Icon className="w-7 h-7" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                            </div>
                            
                            <p className="text-blue-50 mb-8 leading-relaxed">
                                {job.description}
                            </p>
                            
                            <div className="bg-blue-900/30 rounded-xl p-5 border border-blue-400/30">
                                <p className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-4">
                                    Profil recherché
                                </p>
                                <ul className="space-y-3">
                                    {job.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Vague Bas (Bleu -> Blanc) */}
        <SeparationWave position="bottom" flip fillColor="fill-white" />
    </section>
  )
}

export default OurWorkSection