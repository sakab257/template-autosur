import { Star, ExternalLink } from 'lucide-react'

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/VOTRE_ETABLISSEMENT"

export default function AvisActions() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-fit justify-center inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 active:scale-95"
            >
                Voir tous les avis
                <ExternalLink className="w-4 h-4" />
            </a>
            <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-fit justify-center inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
                Laisser un avis
                <Star className="w-4 h-4" />
            </a>
        </div>
    )
}
