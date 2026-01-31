"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Calendar, AlertTriangle, CheckCircle, Clock } from "lucide-react";

type VehicleType = "neuf" | "occasion";

export default function CTCalculator() {
    const [vehicleType, setVehicleType] = useState<VehicleType>("neuf");
    const [inputDate, setInputDate] = useState("");
    const [result, setResult] = useState<{
        nextCT: Date;
        daysRemaining: number;
        isOverdue: boolean;
    } | null>(null);

    const calculateNextCT = () => {
        if (!inputDate) return;

        const date = new Date(inputDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let nextCT: Date;

        if (vehicleType === "neuf") {
            // Premier CT à 4 ans
            nextCT = new Date(date);
            nextCT.setFullYear(nextCT.getFullYear() + 4);

            // Si déjà passé, calculer le prochain (tous les 2 ans après)
            while (nextCT < today) {
                nextCT.setFullYear(nextCT.getFullYear() + 2);
            }
        } else {
            // Véhicule occasion : CT tous les 2 ans depuis le dernier
            nextCT = new Date(date);
            nextCT.setFullYear(nextCT.getFullYear() + 2);

            // Si déjà passé, calculer le prochain
            while (nextCT < today) {
                nextCT.setFullYear(nextCT.getFullYear() + 2);
            }
        }

        const diffTime = nextCT.getTime() - today.getTime();
        const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        setResult({
            nextCT,
            daysRemaining,
            isOverdue: daysRemaining < 0,
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

    const getStatusColor = (days: number) => {
        if (days < 0) return "red";
        if (days <= 30) return "orange";
        if (days <= 90) return "yellow";
        return "green";
    };

    return (
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Calculateur de date</h2>
                    <p className="text-slate-500 text-sm">Calculez la date de votre prochain CT</p>
                </div>
            </div>

            {/* Type de véhicule */}
            <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-3 block">
                    Type de véhicule
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setVehicleType("neuf")}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                            vehicleType === "neuf"
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-slate-200 hover:border-slate-300"
                        }`}
                    >
                        <span className="font-semibold block">Véhicule neuf</span>
                        <span className="text-xs text-slate-500">Jamais contrôlé</span>
                    </button>
                    <button
                        onClick={() => setVehicleType("occasion")}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                            vehicleType === "occasion"
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-slate-200 hover:border-slate-300"
                        }`}
                    >
                        <span className="font-semibold block">Véhicule occasion</span>
                        <span className="text-xs text-slate-500">Déjà contrôlé</span>
                    </button>
                </div>
            </div>

            {/* Date input */}
            <div className="mb-6">
                <label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                    <Calendar className="w-4 h-4" />
                    {vehicleType === "neuf"
                        ? "Date de première mise en circulation"
                        : "Date du dernier contrôle technique"}
                </label>
                <input
                    type="date"
                    id="date"
                    value={inputDate}
                    onChange={(e) => setInputDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
            </div>

            {/* Calculate button */}
            <button
                onClick={calculateNextCT}
                disabled={!inputDate}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all"
            >
                Calculer la date
            </button>

            {/* Result */}
            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`mt-6 p-6 rounded-xl ${
                            getStatusColor(result.daysRemaining) === "red"
                                ? "bg-red-50 border border-red-200"
                                : getStatusColor(result.daysRemaining) === "orange"
                                ? "bg-orange-50 border border-orange-200"
                                : getStatusColor(result.daysRemaining) === "yellow"
                                ? "bg-yellow-50 border border-yellow-200"
                                : "bg-green-50 border border-green-200"
                        }`}
                    >
                        <div className="flex items-start gap-4">
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                    getStatusColor(result.daysRemaining) === "red"
                                        ? "bg-red-100"
                                        : getStatusColor(result.daysRemaining) === "orange"
                                        ? "bg-orange-100"
                                        : getStatusColor(result.daysRemaining) === "yellow"
                                        ? "bg-yellow-100"
                                        : "bg-green-100"
                                }`}
                            >
                                {result.daysRemaining < 0 ? (
                                    <AlertTriangle
                                        className={`w-6 h-6 ${
                                            getStatusColor(result.daysRemaining) === "red"
                                                ? "text-red-600"
                                                : "text-orange-600"
                                        }`}
                                    />
                                ) : result.daysRemaining <= 90 ? (
                                    <Clock
                                        className={`w-6 h-6 ${
                                            getStatusColor(result.daysRemaining) === "orange"
                                                ? "text-orange-600"
                                                : "text-yellow-600"
                                        }`}
                                    />
                                ) : (
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                )}
                            </div>
                            <div>
                                <h3
                                    className={`font-bold text-lg ${
                                        getStatusColor(result.daysRemaining) === "red"
                                            ? "text-red-900"
                                            : getStatusColor(result.daysRemaining) === "orange"
                                            ? "text-orange-900"
                                            : getStatusColor(result.daysRemaining) === "yellow"
                                            ? "text-yellow-900"
                                            : "text-green-900"
                                    }`}
                                >
                                    {result.daysRemaining < 0
                                        ? "Contrôle technique dépassé !"
                                        : result.daysRemaining <= 30
                                        ? "Contrôle technique imminent"
                                        : result.daysRemaining <= 90
                                        ? "Pensez à prendre rendez-vous"
                                        : "Vous êtes en règle"}
                                </h3>
                                <p className="text-slate-600 mt-1">
                                    Prochain CT : <strong>{formatDate(result.nextCT)}</strong>
                                </p>
                                <p
                                    className={`text-lg font-bold mt-2 ${
                                        getStatusColor(result.daysRemaining) === "red"
                                            ? "text-red-600"
                                            : getStatusColor(result.daysRemaining) === "orange"
                                            ? "text-orange-600"
                                            : getStatusColor(result.daysRemaining) === "yellow"
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                    }`}
                                >
                                    {result.daysRemaining < 0
                                        ? `${Math.abs(result.daysRemaining)} jours de retard`
                                        : `${result.daysRemaining} jours restants`}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
