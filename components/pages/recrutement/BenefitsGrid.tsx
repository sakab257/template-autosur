"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Heart, GraduationCap, Clock, Euro } from "lucide-react";

const benefits = [
    {
        icon: Users,
        title: "Équipe soudée",
        description: "Rejoignez une équipe conviviale où l'entraide et le respect sont des valeurs clés.",
    },
    {
        icon: TrendingUp,
        title: "Évolution possible",
        description: "Des opportunités de progression et de développement de compétences au sein du groupe.",
    },
    {
        icon: GraduationCap,
        title: "Formation continue",
        description: "Nous investissons dans la formation de nos équipes pour rester à la pointe du métier.",
    },
    {
        icon: Heart,
        title: "Bien-être au travail",
        description: "Un environnement de travail agréable avec des équipements modernes.",
    },
    {
        icon: Clock,
        title: "Horaires stables",
        description: "Des horaires fixes et un équilibre vie professionnelle / vie personnelle respecté.",
    },
    {
        icon: Euro,
        title: "Rémunération attractive",
        description: "Un salaire compétitif avec primes et avantages selon profil et expérience.",
    },
];

export default function BenefitsGrid() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                    <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                    </motion.div>
                );
            })}
        </div>
    );
}
