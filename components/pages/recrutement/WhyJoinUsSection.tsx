import BenefitsGrid from "@/components/pages/recrutement/BenefitsGrid";

const WhyJoinUsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                            Pourquoi nous rejoindre ?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Nous offrons un environnement de travail stimulant avec de nombreux avantages.
                        </p>
                    </div>
                    <BenefitsGrid />
                </div>
            </section>
  )
}

export default WhyJoinUsSection