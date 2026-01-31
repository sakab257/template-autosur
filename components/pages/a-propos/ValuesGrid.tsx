'use client'

import { motion } from "framer-motion";
import { ShieldCheck, Clock, HeartHandshake, Zap } from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Intégrité Totale",
        description: "Un diagnostic honnête et impartial. Nous ne vendons pas de réparations, notre seul intérêt est votre sécurité.",
    },
    {
        icon: Clock,
        title: "Respect du Temps",
        description: "Nous savons que votre temps est précieux. Nos créneaux sont respectés à la minute près.",
    },
    {
        icon: HeartHandshake,
        title: "Pédagogie",
        description: "Le jargon technique peut être flou. Nous prenons le temps de vous expliquer chaque défaut constaté.",
    },
    {
        icon: Zap,
        title: "Modernité",
        description: "Des bancs de freinage connectés et des outils de diagnostic dernière génération pour une précision absolue.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
} as const;

export default function ValuesGrid() {
    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {values.map((value, index) => {
                const Icon = value.icon;
                return (
                    <motion.div
                        key={value.title}
                        variants={itemVariants}
                        className="group flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/20 transition-colors duration-300"
                    >
                        <div className="shrink-0">
                            {/* Icône : Fond blanc pour contraster avec le bleu, icône bleue */}
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
                                <Icon className="w-8 h-8 text-blue-600" strokeWidth={2.5} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-blue-100 leading-relaxed text-sm lg:text-base opacity-90">
                                {value.description}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}