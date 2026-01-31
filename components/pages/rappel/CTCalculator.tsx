"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, AlertTriangle, CheckCircle, Car, History, Clock } from "lucide-react";

type VehicleType = "neuf" | "occasion";

export default function CTCalculator() {
    const [vehicleType, setVehicleType] = useState<VehicleType>("neuf");
    const [inputDate, setInputDate] = useState("");
    const [result, setResult] = useState<{
        nextCT: Date;
        daysRemaining: number;
        status: "safe" | "soon" | "overdue";
    } | null>(null);

    const calculateNextCT = () => {
        if (!inputDate) return;

        const date = new Date(inputDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let nextCT: Date = new Date(date);

        if (vehicleType === "neuf") {
            // Règle : 4 ans après la 1ère mise en circulation
            nextCT.setFullYear(nextCT.getFullYear() + 4);
        } else {
            // Règle : 2 ans après le dernier contrôle
            nextCT.setFullYear(nextCT.getFullYear() + 2);
        }

        const diffTime = nextCT.getTime() - today.getTime();
        const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Définition du statut pour l'affichage (Bleu vs Rouge)
        let status: "safe" | "soon" | "overdue" = "safe";
        if (daysRemaining < 0) status = "overdue";
        else if (daysRemaining <= 60) status = "soon"; // Moins de 2 mois = Urgent (Rouge)

        setResult({
            nextCT,
            daysRemaining,
            status,
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl shadow-blue-900/20 border border-white/50 relative overflow-hidden"
        >
            {/* Décoration d'arrière-plan légère */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0 opacity-50 pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Simulateur de date
                </h3>

                {/* Sélecteur Type de véhicule */}
                <div className="bg-slate-100 p-1.5 rounded-xl flex mb-6">
                    <button
                        onClick={() => { setVehicleType("neuf"); setResult(null); }}
                        className={`cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                            vehicleType === "neuf"
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                        }`}
                    >
                        <Car size={16} />
                        Véhicule Neuf
                    </button>
                    <button
                        onClick={() => { setVehicleType("occasion"); setResult(null); }}
                        className={`cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                            vehicleType === "occasion"
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                        }`}
                    >
                        <History size={16} />
                        Déjà Contrôlé
                    </button>
                </div>

                {/* Input Date */}
                <div className="mb-6">
                    <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">
                        {vehicleType === "neuf" ? "Date de 1ère mise en circulation" : "Date du dernier contrôle"}
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={inputDate}
                        onChange={(e) => setInputDate(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                    />
                </div>

                {/* Bouton Calculer */}
                <button
                    onClick={calculateNextCT}
                    disabled={!inputDate}
                    className="cursor-pointer w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed transition-all"
                >
                    Calculer ma date limite
                </button>

                {/* Résultat Animé */}
                <AnimatePresence mode="wait">
                    {result && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                        >
                            <div className={`p-5 rounded-lg ${
                                result.status === "safe" 
                                    ? "bg-blue-50 border-blue-500" 
                                    : "bg-red-50 border-red-600"
                            }`}>
                                <div className="flex items-start gap-4">
                                    {/* Icône */}
                                    <div className={`p-2 rounded-full shrink-0 ${
                                        result.status === "safe"
                                            ? "bg-blue-100 text-blue-600"
                                            : "bg-red-100 text-red-600"
                                    }`}>
                                        {result.status === "overdue" ? <AlertTriangle size={24} /> : 
                                         result.status === "soon" ? <Clock size={24} /> : 
                                         <CheckCircle size={24} />}
                                    </div>

                                    {/* Texte */}
                                    <div>
                                        <h4 className={`font-bold text-lg leading-tight mb-1 ${
                                            result.status === "safe" ? "text-blue-900" : "text-red-900"
                                        }`}>
                                            {result.status === "overdue" ? "Date limite dépassée !" :
                                             result.status === "soon" ? "Contrôle imminent !" :
                                             "Vous êtes tranquille"}
                                        </h4>
                                        
                                        <p className="text-slate-600 text-sm mb-2">
                                            Date limite : <strong className="text-slate-900">{formatDate(result.nextCT)}</strong>
                                        </p>

                                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                                             result.status === "safe"
                                                ? "bg-blue-200 text-blue-800"
                                                : "bg-red-200 text-red-800"
                                        }`}>
                                            {result.daysRemaining < 0 
                                                ? `${Math.abs(result.daysRemaining)} jours de retard` 
                                                : `${result.daysRemaining} jours restants`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}