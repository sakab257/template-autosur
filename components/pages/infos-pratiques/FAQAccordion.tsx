"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
    {
        question: "Quand dois-je faire mon contrôle technique ?",
        answer: "Pour un véhicule neuf, le premier contrôle technique doit être effectué dans les 6 mois précédant le 4ème anniversaire de sa mise en circulation. Ensuite, le contrôle doit être renouvelé tous les 2 ans.",
    },
    {
        question: "Combien de temps dure un contrôle technique ?",
        answer: "Un contrôle technique dure en moyenne 30 à 45 minutes. Ce temps peut varier en fonction du type de véhicule et des éventuels points de contrôle supplémentaires.",
    },
    {
        question: "Que se passe-t-il si mon véhicule est refusé ?",
        answer: "Si votre véhicule présente des défaillances critiques, vous disposez de 2 mois pour effectuer les réparations nécessaires et repasser une contre-visite. La contre-visite est incluse dans nos tarifs.",
    },
    {
        question: "Puis-je rouler si mon contrôle technique est expiré ?",
        answer: "Non, circuler avec un contrôle technique expiré est une infraction passible d'une amende de 135€. De plus, votre véhicule peut être immobilisé par les forces de l'ordre.",
    },
    {
        question: "Le contrôle pollution est-il inclus ?",
        answer: "Oui, le contrôle des émissions polluantes fait partie intégrante du contrôle technique. Il est systématiquement réalisé lors de chaque visite.",
    },
    {
        question: "Acceptez-vous tous les types de véhicules ?",
        answer: "Nous contrôlons les véhicules légers (voitures), les utilitaires jusqu'à 3,5 tonnes, les camping-cars, les véhicules de collection et les motos. Contactez-nous pour les véhicules spéciaux.",
    },
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {faqItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-2xl border transition-colors duration-300 ${
                        openIndex === index 
                        ? "border-blue-200 shadow-md" 
                        : "border-slate-100 shadow-sm hover:border-blue-100"
                    }`}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className={`font-bold text-lg pr-4 transition-colors ${
                            openIndex === index ? "text-blue-700" : "text-slate-800"
                        }`}>
                            {item.question}
                        </span>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            openIndex === index ? "bg-blue-100 text-blue-600" : "bg-slate-50 text-slate-400"
                        }`}>
                            <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}