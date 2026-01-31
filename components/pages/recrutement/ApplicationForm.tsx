"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Upload, User, Mail, MessageSquare } from "lucide-react";

export default function ApplicationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        cv: null as File | null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Le nom est requis";
        }

        if (!formData.email.trim()) {
            newErrors.email = "L'email est requis";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "L'email n'est pas valide";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Le message est requis";
        } else if (formData.message.trim().length < 50) {
            newErrors.message = "Le message doit contenir au moins 50 caractères";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Simuler l'envoi
            setIsSubmitted(true);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData({ ...formData, cv: file });
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100 text-center"
            >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Candidature envoyée !
                </h3>
                <p className="text-slate-600 max-w-md mx-auto">
                    Merci pour votre intérêt. Nous avons bien reçu votre candidature
                    et nous vous recontacterons dans les plus brefs délais.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Candidature spontanée</h3>

            <div className="space-y-5">
                {/* Nom */}
                <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                        <User className="w-4 h-4" />
                        Nom complet
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                            errors.name ? "border-red-300 bg-red-50" : "border-slate-200"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                        placeholder="Jean Dupont"
                    />
                    <AnimatePresence>
                        {errors.name && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 text-sm mt-1"
                            >
                                {errors.name}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                        <Mail className="w-4 h-4" />
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email ? "border-red-300 bg-red-50" : "border-slate-200"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                        placeholder="jean.dupont@email.com"
                    />
                    <AnimatePresence>
                        {errors.email && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 text-sm mt-1"
                            >
                                {errors.email}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                        <MessageSquare className="w-4 h-4" />
                        Message de motivation
                    </label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border ${
                            errors.message ? "border-red-300 bg-red-50" : "border-slate-200"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
                        placeholder="Présentez-vous et expliquez vos motivations..."
                    />
                    <AnimatePresence>
                        {errors.message && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 text-sm mt-1"
                            >
                                {errors.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* CV Upload */}
                <div>
                    <label htmlFor="cv" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                        <Upload className="w-4 h-4" />
                        CV (optionnel)
                    </label>
                    <div className="relative">
                        <input
                            type="file"
                            id="cv"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                        />
                        <label
                            htmlFor="cv"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all"
                        >
                            <Upload className="w-5 h-5 text-slate-400" />
                            <span className="text-slate-500">
                                {formData.cv ? formData.cv.name : "Cliquez pour télécharger votre CV"}
                            </span>
                        </label>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Formats acceptés : PDF, DOC, DOCX</p>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all"
                >
                    <Send className="w-5 h-5" />
                    Envoyer ma candidature
                </button>
            </div>
        </form>
    );
}
