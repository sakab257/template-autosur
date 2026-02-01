"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const hours = [
    { day: "Lundi", hours: "08:00 - 12:00 / 14:00 - 18:30" },
    { day: "Mardi", hours: "08:00 - 12:00 / 14:00 - 18:30" },
    { day: "Mercredi", hours: "08:00 - 12:00 / 14:00 - 18:30" },
    { day: "Jeudi", hours: "08:00 - 12:00 / 14:00 - 18:30" },
    { day: "Vendredi", hours: "08:00 - 12:00 / 14:00 - 18:30" },
    { day: "Samedi", hours: "08:00 - 12:00" },
    { day: "Dimanche", hours: "Fermé", closed: true },
];

export default function OpeningHours() {
    const today = new Date().getDay();
    const dayMapping = [6, 0, 1, 2, 3, 4, 5]; // Dimanche(0) -> index 6

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 lg:p-8 shadow-md border border-slate-100"
        >
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Clock size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900">Horaires d&apos;ouverture</h3>
                    <p className="text-sm text-slate-500 font-medium">Ouvert 6j/7 sans interruption</p>
                </div>
            </div>

            <div className="space-y-3">
                {hours.map((item, index) => {
                    const isToday = dayMapping[today] === index;
                    return (
                        <div
                            key={item.day}
                            className={`flex justify-between items-center py-3 px-4 rounded-xl transition-all ${
                                isToday
                                    ? "bg-blue-600 text-white shadow-md scale-[1.02]"
                                    : "hover:bg-slate-50 text-slate-600"
                            }`}
                        >
                            <span className="font-bold flex flex-col items-center gap-2">
                                {item.day}
                                {isToday && (
                                    <span className="text-[10px] bg-white text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
                                        {`Aujourd'hui`}
                                    </span>
                                )}
                            </span>
                            <span className={`font-semibold ${
                                !isToday && item.closed ? "text-red-500 opacity-80" : ""
                            }`}>
                                {item.hours}
                            </span>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}