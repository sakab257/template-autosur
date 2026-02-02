import { ArrowRight, CalendarCheck } from 'lucide-react'
import Link from 'next/link'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

interface PageCTAProps {
    /** Titre principal */
    title: string
    /** Description */
    description: string
    /** Texte du bouton principal */
    primaryButtonText?: string
    /** Lien du bouton principal */
    primaryButtonHref?: string
    /** Texte du bouton secondaire (optionnel) */
    secondaryButtonText?: string
    /** Lien du bouton secondaire */
    secondaryButtonHref?: string
}

const PageCTA = ({
    title,
    description,
    primaryButtonText = 'Prendre rendez-vous',
    primaryButtonHref = '/rendez-vous',
    secondaryButtonText,
    secondaryButtonHref,
}: PageCTAProps) => {
    return (
        <section className="relative py-24 lg:py-32 bg-blue-500 overflow-hidden">
            <SeparationWave position="top" fillColor="fill-white" />

            <DotPattern className="lg:translate-y-2" />

            <div className="container mx-auto px-6 lg:px-16 text-center relative z-20">
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
                    {title}
                </h2>
                <p className="text-lg lg:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={primaryButtonHref}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-xl"
                    >
                        <CalendarCheck className="w-5 h-5" strokeWidth={2.5} />
                        {primaryButtonText}
                    </Link>

                    {secondaryButtonText && secondaryButtonHref && (
                        <Link
                            href={secondaryButtonHref}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 active:scale-95 transition-all"
                        >
                            {secondaryButtonText}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PageCTA
