import { ArrowRight, CalendarCheck } from "lucide-react"
import Link from "next/link"

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-blue-500 overflow-hidden">
        {/* --- VAGUE DE SÉPARATION --- */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>

        {/* Pattern de fond */}
        <div className="absolute inset-0 opacity-10 pointer-events-none lg:translate-y-2">
            <svg width="100%" height="100%">
                <defs>
                    <pattern id="cta-dot-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" fill="white" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-dot-pattern)" />
            </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-16 text-center relative z-20">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
                Prêt à rouler l'esprit tranquille ?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                Rejoignez les milliers d'automobilistes qui nous font confiance chaque année.
                Simple, rapide, agréé.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/rendez-vous"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                    <CalendarCheck className="w-5 h-5" strokeWidth={2.5} />
                    Prendre rendez-vous
                </Link>
                <Link
                    href="/tarifs"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 active:scale-95 transition-all"
                >
                    Voir nos tarifs
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CTASection;