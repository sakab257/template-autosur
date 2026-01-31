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
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
        >
            <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                        </div>
                        <span className="text-slate-600">{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
