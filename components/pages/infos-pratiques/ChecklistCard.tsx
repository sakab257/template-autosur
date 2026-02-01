"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ChecklistCardProps {
    title: string;
    items: string[];
    delay?: number;
}

export default function ChecklistCard({ title, items, delay = 0 }: ChecklistCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            // CHANGEMENT : Fond Glassmorphism (blanc transparent + flou) + Bordure légère
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xs border border-white/20 hover:bg-white/15 transition-colors duration-300"
        >
            {/* Titre en Blanc */}
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        {/* CHANGEMENT : Pastille Blanche avec Check Bleu */}
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                        </div>
                        {/* Texte en bleu très clair (presque blanc) pour la lisibilité */}
                        <span className="text-blue-50 font-medium leading-tight">{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}