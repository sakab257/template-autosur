// components/pages/recrutement/ApplicationForm.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Upload, User, Mail, MessageSquare } from "lucide-react";

export default function ApplicationForm() {
    // ... (Logique inchangée, juste ajustement du style si nécessaire)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        cv: null as File | null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        // ... (Logique de validation inchangée)
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Le nom est requis";
        if (!formData.email.trim()) newErrors.email = "L'email est requis";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "L'email n'est pas valide";
        if (!formData.message.trim()) newErrors.message = "Le message est requis";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) setIsSubmitted(true);
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
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-blue-900/5 border border-slate-100 text-center h-full flex flex-col items-center justify-center"
            >
                <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Candidature envoyée !</h3>
                <p className="text-slate-600 max-w-md mx-auto text-lg">
                    Merci pour votre intérêt. Nous avons bien reçu votre candidature et nous vous recontacterons très vite.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 lg:p-10 shadow-md border border-slate-100">
            <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Candidature spontanée</h3>
                <p className="text-slate-500">Remplissez ce formulaire pour nous transmettre votre profil.</p>
            </div>

            <div className="space-y-5">
                {/* Inputs ... (Style : rounded-xl, border-slate-200, focus:ring-blue-500) */}
                <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <User size={16} /> Nom complet
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3.5 rounded-xl border font-medium ${errors.name ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                        placeholder="Jean Dupont"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <Mail size={16} /> Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3.5 rounded-xl border font-medium ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                        placeholder="jean.dupont@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <MessageSquare size={16} /> Message
                    </label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className={`w-full px-4 py-3.5 rounded-xl border font-medium ${errors.message ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
                        placeholder="Vos motivations en quelques mots..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                </div>

                {/* CV Upload - Stylisé */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <Upload size={16} /> CV <span className="text-gray-400 font-normal">(Optionnel)</span>
                    </label>
                    <div className="relative">
                        <input type="file" id="cv" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
                        <label htmlFor="cv" className="flex flex-col items-center justify-center gap-2 w-full px-4 py-6 rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/50 hover:bg-blue-50 hover:border-blue-400 cursor-pointer transition-all group">
                            <Upload className="w-8 h-8 text-blue-300 group-hover:text-blue-500 transition-colors" />
                            <span className="text-sm font-medium text-slate-600 group-hover:text-blue-700 text-center">
                                {formData.cv ? <span className="text-blue-600 font-bold">{formData.cv.name}</span> : "Cliquez pour déposer votre CV (PDF, DOC, DOCX)"}
                            </span>
                        </label>
                    </div>
                </div>

                <button type="submit" className="cursor-pointer w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <Send className="w-5 h-5" />
                    Envoyer ma candidature
                </button>
            </div>
        </form>
    );
}