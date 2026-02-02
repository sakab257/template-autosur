import { Phone, CalendarX } from 'lucide-react'
import Link from 'next/link'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

const ContactSection = () => {
  return (
    // J'utilise bg-blue-600 pour garder la cohérence avec le Hero, mais 500 marche aussi
    <section className="relative py-16 lg:py-24 bg-blue-500 overflow-hidden">
        
        {/* Vague de séparation haut (Blanc -> Bleu) */}
        {/* On suppose que la section du dessus est blanche */}
        <SeparationWave position="top" fillColor="fill-white" />

        <DotPattern className='translate-y-3' />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                
                {/* Titre en BLANC */}
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-6">
                    Vous préférez réserver par téléphone ?
                </h2>
                
                {/* Paragraphe en BLEU PÂLE */}
                <p className="text-blue-100 mb-8 text-lg font-medium">
                    Notre équipe est disponible du lundi au samedi pour trouver le créneau qui vous convient.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Bouton Principal : Fond BLANC, Texte BLEU */}
                    <Link
                        href="tel:+33123456789"
                        className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all"
                    >
                        <Phone className="w-5 h-5 fill-current" />
                        01 23 45 67 89
                    </Link>
                    
                    {/* Bouton Secondaire : Transparent, Bordure BLANCHE, Texte BLANC */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 active:scale-95 transition-all"
                    >
                        <CalendarX className="w-5 h-5" />
                        Signaler un problème
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection