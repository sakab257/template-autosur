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
        <div className="space-y-3">
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                    >
                        <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                        <ChevronDown
                            className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300 ${
                                openIndex === index ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="px-5 pb-5 text-slate-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
