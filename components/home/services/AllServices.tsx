'use client'

import { Car, Truck, Motorbike, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6, // Légèrement ralenti pour plus de fluidité
            ease: "easeOut" as const
        }
    }
}

const AllServices = () => {
  return (
    <div className='relative w-full mt-12 overflow-hidden'>
        <SeparationWave position="top" fillColor="fill-white" height="h-20 lg:h-25" />

        <DotPattern />

        <div className='w-full bg-blue-500 py-32 px-6 lg:px-16'>
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
            <motion.div
                className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            // CORRECTION MAJEURE ICI :
                            // 1. Suppression de 'transition-all' (la cause du bug)
                            // 2. Suppression de 'hover:scale-102' (géré par Framer maintenant)
                            // 3. Ajout de transition-colors et transition-shadow pour garder l'effet visuel sur le reste
                            className="flex gap-6 group bg-blue-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-colors duration-300"
                            
                            // On gère le scale avec Framer pour éviter le conflit CSS
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="shrink-0 flex items-center">
                                <div className="w-20 h-20 bg-blue-200 rounded-xl flex items-center justify-center transition-all duration-300">
                                    <Icon className="w-10 h-10 text-black group-hover:text-blue-700 transition-colors duration-300" strokeWidth={2.5} />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-around">
                                <h3 className="text-xl font-bold text-black group-hover:text-blue-700 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-700 group-hover:text-blue-700 transition-colors duration-300 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>

        <SeparationWave position="bottom" fillColor="fill-white" flip />
    </div>
  )
}

export default AllServices