import { Briefcase, Wrench, UserCheck } from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                            Nos métiers
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {jobs.map((job, index) => {
                            const Icon = job.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                                            <Icon className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">{job.title}</h3>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {job.description}
                                    </p>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 mb-3">
                                            Profil recherché :
                                        </p>
                                        <ul className="space-y-2">
                                            {job.requirements.map((req, i) => (
                                                <li key={i} className="flex items-center gap-2 text-slate-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
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
            </section>
  )
}

export default OurWorkSection