'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'
import SeparationWave from '@/components/ui/SeparationWave'
import DotPattern from '@/components/ui/DotPattern'

interface PageHeroProps {
    /** Icône du badge */
    icon: LucideIcon
    /** Texte du badge */
    badge: string
    /** Titre principal */
    title: ReactNode
    /** Description (optionnel si children est fourni) */
    description?: string
    /** Contenu custom à la place de la description */
    children?: ReactNode
}

const PageHero = ({
    icon: Icon,
    badge,
    title,
    description,
    children,
}: PageHeroProps) => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-blue-500 overflow-hidden">
            <DotPattern />

            <SeparationWave position="bottom" fillColor="fill-white" height="h-16 lg:h-24" flip />

            <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                        <Icon size={14} strokeWidth={3} className="text-blue-200" />
                        {badge}
                    </span>

                    {/* Titre */}
                    <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                        {title}
                    </h1>

                    {/* Description ou contenu custom */}
                    {children ? (
                        children
                    ) : description ? (
                        <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto font-medium">
                            {description}
                        </p>
                    ) : null}
                </motion.div>
            </div>
        </section>
    )
}

export default PageHero
