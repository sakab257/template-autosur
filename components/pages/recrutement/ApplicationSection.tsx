import ApplicationForm from "@/components/pages/recrutement/ApplicationForm";

const list = [
    "Envoi de candidature",
    "Étude de votre dossier",
    "Entretien téléphonique",
    "Entretien en personne",
]

const ApplicationSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
                                Postulez maintenant
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Aucune offre ne correspond à votre profil ? Envoyez-nous une candidature
                                spontanée ! Nous étudions toutes les candidatures avec attention.
                            </p>
                            <div className="bg-blue-50 rounded-xl p-6">
                                <h4 className="font-bold text-blue-900 mb-2">Processus de recrutement</h4>
                                <ol className="space-y-2 text-blue-800">
                                    {list.map((text, index) => (
                                        <li key={text} className="flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">{index + 1}</span>
                                            {text}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <ApplicationForm />
                    </div>
                </div>
            </section>
  )
}

export default ApplicationSection