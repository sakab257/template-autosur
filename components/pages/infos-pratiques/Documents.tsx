import ChecklistCard from "@/components/pages/infos-pratiques/ChecklistCard";
import { ClipboardList } from "lucide-react";

const Documents = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <ClipboardList className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                            Documents à apporter
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ChecklistCard
                            title="Documents obligatoires"
                            items={[
                                "Carte grise du véhicule (original)",
                                "Ancien procès-verbal de contrôle technique (si renouvellement)",
                                "Justificatif d'identité du présentateur",
                            ]}
                            delay={0}
                        />
                        <ChecklistCard
                            title="Recommandations"
                            items={[
                                "Carnet d'entretien du véhicule",
                                "Attestation d'assurance valide",
                                "Clé de roue de secours (si applicable)",
                                "Manuel du véhicule (pour les témoins lumineux)",
                            ]}
                            delay={0.1}
                        />
                    </div>
                </div>
            </section>
  )
}

export default Documents