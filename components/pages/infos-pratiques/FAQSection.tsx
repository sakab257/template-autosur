import { HelpCircle } from 'lucide-react'
import FAQAccordion from './FAQAccordion'
import SeparationWave from '@/components/ui/SeparationWave'

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Titre et Intro */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                            <HelpCircle size={32} strokeWidth={2} />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                            Questions <br/> Fréquentes
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Vous avez des interrogations ? Voici les réponses aux questions que l'on nous pose le plus souvent.
                        </p>
                    </div>
                </div>

                {/* Accordéon */}
                <div className="lg:w-2/3">
                    <FAQAccordion />
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQSection