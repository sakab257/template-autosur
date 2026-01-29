import { Star } from 'lucide-react'

const avis = [
    {
        nom: "Marie Dupont",
        note: 5,
        texte: "Excellent accueil et contrôle technique rapide. L'équipe est professionnelle et les explications claires. Je recommande vivement !",
        date: "Il y a 2 jours",
    },
    {
        nom: "Thomas Bernard",
        note: 5,
        texte: "Très satisfait du service. Prise de rendez-vous facile, pas d'attente, et le technicien a pris le temps de tout m'expliquer.",
        date: "Il y a 5 jours",
    },
    {
        nom: "Sophie Martin",
        note: 5,
        texte: "Centre propre et moderne. Le contrôle a été fait en moins de 30 minutes. Prix correct et personnel très aimable.",
        date: "Il y a 1 semaine",
    },
    {
        nom: "Laurent Petit",
        note: 4,
        texte: "Bon centre de contrôle technique. Seul petit bémol : le parking un peu petit. Sinon, rien à redire sur la prestation.",
        date: "Il y a 2 semaines",
    },
    {
        nom: "Camille Rousseau",
        note: 5,
        texte: "J'y vais depuis 3 ans pour ma voiture et ma moto. Toujours un service impeccable et des conseils utiles pour l'entretien.",
        date: "Il y a 3 semaines",
    },
    {
        nom: "Philippe Moreau",
        note: 5,
        texte: "Contre-visite passée sans problème après les réparations. L'équipe est arrangeante sur les horaires. Merci à eux !",
        date: "Il y a 1 mois",
    },
]

function getInitiales(nom: string): string {
    return nom
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase()
}

function StarRating({ note }: { note: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < note ? 'fill-yellow-400 text-yellow-400' : 'fill-white/20 text-white/20'}`}
                />
            ))}
        </div>
    )
}

export default function AvisCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {avis.map((avis, index) => (
                <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
                >
                    {/* En-tête de la carte : Avatar + Nom + Note + Date */}
                    <div className="flex items-center gap-4 mb-4">
                        {/* Avatar avec initiales */}
                        <div className="w-12 h-12 rounded-full bg-blue-400/50 border border-white/30 flex items-center justify-center text-white font-bold text-sm">
                            {getInitiales(avis.nom)}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-white">{avis.nom}</p>
                                <span className="text-xs text-blue-200">{avis.date}</span>
                            </div>
                            <StarRating note={avis.note} />
                        </div>
                    </div>

                    {/* Texte de l'avis */}
                    <p className="text-blue-100 text-sm leading-relaxed">
                        &quot;{avis.texte}&quot;
                    </p>
                </div>
            ))}
        </div>
    )
}
