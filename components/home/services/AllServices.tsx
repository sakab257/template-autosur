import { Car, Truck, Motorbike, Leaf } from 'lucide-react'

const services = [
    {
        icon: Car,
        title: "Contrôle pour les particuliers",
        description: "Contrôlez la sécurité et la conformité de votre voiture avec notre service professionnel."
    },
    {
        icon: Truck,
        title: "Contrôle technique professionnels",
        description: "Nous offrons des services de contrôle technique et de voiturier adaptés aux besoins des professionnels et des flottes automobiles."
    },
    {
        icon: Motorbike,
        title: "Contrôle des véhicules de Catégorie L",
        description: "Assurez-vous que votre moto, quad, ou autre véhicule de catégorie L est conforme aux normes de sécurité grâce à nos inspections rigoureuses."
    },
    {
        icon: Leaf,
        title: "Contre visite et contrôle pollution",
        description: "En cas de défaut lors du contrôle initial, nous effectuons la contre-visite de votre véhicule et vérifions sa conformité environnementale."
    }
]

const AllServices = () => {
  return (
    <div className='relative w-full mt-12 overflow-hidden'>
        {/* --- VAGUE DE SÉPARATION (CSS PURE) --- */}
        {/* Forme ondulée en haut pour la transition douce */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-20 lg:h-25" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>

        {/* Pattern de points avec double fondu (Haut et Bas) */}
<div className="absolute inset-0 opacity-20">
    <svg width="100%" height="100%">
        <defs>
            {/* 1. Le pattern de points (inchangé) */}
            <pattern id="dot-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>

            {/* 2. Le dégradé "Sandwich" : Transparent -> Visible -> Transparent */}
            <linearGradient id="fade-both-ways" x1="0%" y1="0%" x2="0%" y2="100%">
                {/* 0% (Tout en haut) : Invisible */}
                <stop offset="0%" stopColor="black" />
                
                {/* 15% : Le fondu d'entrée est terminé, les points sont visibles */}
                <stop offset="15%" stopColor="white" />
                
                {/* 85% : Les points sont toujours visibles, le fondu de sortie commence */}
                <stop offset="85%" stopColor="white" />
                
                {/* 100% (Tout en bas) : Invisible */}
                <stop offset="100%" stopColor="black" />
            </linearGradient>

            {/* 3. Le masque qui applique ce dégradé */}
            <mask id="dual-mask" maskContentUnits="objectBoundingBox">
                <rect x="0" y="0" width="1" height="1" fill="url(#fade-both-ways)" />
            </mask>
        </defs>

        {/* 4. Application du masque */}
        <rect width="100%" height="100%" fill="url(#dot-pattern)" mask="url(#dual-mask)" />
    </svg>
</div>

        <div className='w-full bg-blue-500 py-20 px-6 lg:px-16'>
            {/* En-tête de section */}
            <div className="max-w-4xl mx-auto text-center my-16">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
                    Découvrez nos services de <strong>contrôles techniques</strong> pour voitures et motos.
                </h2>
                <p className="text-lg text-gray-100 leading-relaxed">
                    Notre équipe d'experts qualifiés assure des contrôles rigoureux et précis pour garantir la <strong>sécurité</strong> et la <strong>conformité</strong> de votre véhicule !
                </p>
            </div>

            {/* Grille de services */}
            <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                        <div
                            key={index}
                            className="flex gap-6 group bg-blue-50 rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300"
                        >
                            {/* Conteneur de l'icône */}
                            <div className="shrink-0 flex items-center">
                                <div className="w-20 h-20 bg-blue-200 rounded-xl flex items-center justify-center transition-all duration-300">
                                    <Icon className="w-10 h-10 text-black group-hover:text-blue-700 transition-colors duration-300" strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="flex-1 flex flex-col justify-around">
                                {/* Titre */}
                                <h3 className="text-xl font-bold text-black group-hover:text-blue-700 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-700 group-hover:text-blue-700 transition-colors duration-300 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default AllServices