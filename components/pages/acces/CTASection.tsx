import { ArrowRight, CalendarCheck } from 'lucide-react'
import Link from 'next/link'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-blue-500 overflow-hidden">
        
        {/* Vague Haut (Blanc -> Bleu) */}
        <SeparationWave position="top" fillColor="fill-white" className="-mt-px" />
        
        {/* Pattern */}
        <DotPattern className='translate-y-3'/>

        <div className="container mx-auto px-6 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
                Venez nous rendre visite
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                Réservez votre créneau et venez profiter d&apos;un contrôle technique
                rapide dans notre centre moderne et accessible.
            </p>
            <Link
                href="/rendez-vous"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-extrabold text-lg px-10 py-5 rounded-2xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-md shadow-blue-900/20"
            >
                <CalendarCheck className="w-6 h-6" />
                Prendre rendez-vous
            </Link>
        </div>
    </section>
  )
}

export default CTASection