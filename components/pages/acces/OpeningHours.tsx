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
    const dayMapping = [6, 0, 1, 2, 3, 4, 5]; // Convert JS day to our array index

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Horaires d&apos;ouverture</h3>
            </div>
            <div className="space-y-3">
                {hours.map((item, index) => {
                    const isToday = dayMapping[today] === index;
                    return (
                        <div
                            key={item.day}
                            className={`flex justify-between items-center py-3 px-4 rounded-xl transition-colors ${
                                isToday
                                    ? "bg-blue-50 border border-blue-200"
                                    : "hover:bg-slate-50"
                            }`}
                        >
                            <span className={`font-medium ${isToday ? "text-blue-700" : "text-slate-700"}`}>
                                {item.day}
                                {isToday && (
                                    <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                                        Aujourd&apos;hui
                                    </span>
                                )}
                            </span>
                            <span
                                className={
                                    item.closed
                                        ? "text-red-500 font-medium"
                                        : isToday
                                        ? "text-blue-700 font-semibold"
                                        : "text-slate-600"
                                }
                            >
                                {item.hours}
                            </span>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
