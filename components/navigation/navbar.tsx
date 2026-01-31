"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ChevronRight, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { links, secondaryLinks } from "@/lib/links";
import { motion, AnimatePresence, Variants } from "framer-motion";
// 1. IMPORT DU HOOK
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    // 2. RÉCUPÉRATION DU CHEMIN ACTUEL
    const pathname = usePathname();

    // Fonction utilitaire pour gérer les ancres
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false);

        // Extraire l'ancre du href (supporte "#section" et "/#section")
        const anchorMatch = href.match(/#(.+)$/);

        if (anchorMatch && pathname === "/") {
            e.preventDefault();
            const targetId = anchorMatch[1];
            const targetElement = document.getElementById(targetId);

            // Nettoyer l'URL immédiatement (enlever toute ancre existante)
            window.history.replaceState(null, "", "/");

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    // --- ANIMATIONS (Inchangées) ---
    const menuVars: Variants = {
        initial: { opacity: 0, y: -15 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3, ease: "circOut", staggerChildren: 0.07, delayChildren: 0.1 }
        },
        exit: { 
            opacity: 0, 
            filter: "blur(10px)", 
            transition: { duration: 0.2, ease: "linear", when: "beforeChildren" } 
        }
    };

    const itemVars: Variants = {
        initial: { opacity: 0, x: -15 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
    };

    const dropdownVars: Variants = {
        initial: { opacity: 0, y: 10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
        exit: { opacity: 0, y: 10, transition: { duration: 0.15 } }
    };

    return (
        <>
            {/* MOBILE HEADER */}
            <div className='fixed top-0 left-0 w-full h-20 bg-white flex items-center justify-between px-6 lg:hidden z-50 border-b border-gray-100 shadow-lg'>
                <Link href={pathname === "/" ? "#hero" : "/#hero"} onClick={(e) => handleLinkClick(e, "#hero")}>
                    <Image src={'/autosur_logo_color.webp'} alt="Logo Autosur" width={130} height={50} className="object-contain" />
                </Link>
                
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none cursor-pointer text-blue-900 hover:text-red-500 transition-colors">
                    <motion.div initial={false} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
                    </motion.div>
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white z-40 flex flex-col px-6 py-8 lg:hidden overflow-y-auto">
                        <motion.div variants={itemVars} className="w-full max-w-150 mb-8 mx-auto">
                            <Link href="/rendez-vous" onClick={() => setIsOpen(false)} className="group flex items-center justify-center gap-3 w-full bg-red-600 text-white font-extrabold text-lg py-4 rounded-lg shadow-md hover:bg-red-500 transition-all active:scale-[0.98]">
                                <CalendarCheck size={24} strokeWidth={3} />
                                PRENDRE RENDEZ-VOUS
                            </Link>
                        </motion.div>

                        <div className="flex flex-col gap-4 w-full">
                            {links.map((link) => {
                                // LOGIQUE INTELLIGENTE MOBILE
                                // Si lien est une ancre (#...) et qu'on n'est pas sur '/', on ajoute '/' devant.
                                const activeHref = link.href.startsWith("#") && pathname !== "/" 
                                    ? "/" + link.href 
                                    : link.href;

                                return (
                                    <motion.div key={link.name} variants={itemVars} className="w-full border-b border-gray-100 pb-2">
                                        <Link
                                            href={activeHref}
                                            className="flex items-center justify-between text-2xl font-bold text-slate-800 uppercase tracking-tight group"
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                        >
                                            <span className="group-hover:text-blue-700 transition-colors">{link.name}</span>
                                            <ChevronRight className="text-blue-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Liens secondaires... (inchangé) */}
                        <div className="mt-8 flex flex-col gap-3">
                             <div className="w-12 h-1 bg-red-500 mb-2"></div>
                                {secondaryLinks.map((link) => (
                                <motion.div key={link.name} variants={itemVars}>
                                    <Link href={link.href} className="text-sm font-medium text-gray-500 hover:text-blue-900 transition-colors flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                        <link.icon size={16} /> 
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* DESKTOP HEADER */}
            <div className='hidden lg:flex fixed top-0 left-0 w-full h-24 bg-white z-50 shadow-md items-center justify-between px-8 xl:px-16 transition-all'>
                <div className="shrink-0">
                    <Link href={pathname === "/" ? "#hero" : "/#hero"} onClick={(e) => handleLinkClick(e, "#hero")}>
                        <Image src={'/autosur_logo_color.webp'} alt="Logo Autosur" width={180} height={60} className="object-contain hover:opacity-90 transition-opacity" />
                    </Link>
                </div>

                <div className="flex items-center gap-8 xl:gap-12">
                    {links.map((link) => {
                         // LOGIQUE INTELLIGENTE DESKTOP
                         const activeHref = link.href.startsWith("#") && pathname !== "/" 
                            ? "/" + link.href 
                            : link.href;

                        return (
                            <Link
                                key={link.name}
                                href={activeHref}
                                className="text-blue-800 font-bold uppercase tracking-tight hover:text-red-600 transition-colors relative group py-2"
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )
                    })}

                    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <button className="flex items-center gap-1 text-blue-800 font-bold uppercase tracking-tight hover:text-red-600 transition-colors py-2 cursor-pointer">
                            PLUS
                            <motion.div animate={{ rotate: isHovered ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isHovered && (
                                <motion.div variants={dropdownVars} initial="initial" animate="animate" exit="exit" className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-2">
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                                    <div className="relative bg-white z-10 flex flex-col">
                                        {secondaryLinks.map((link) => (
                                            <Link key={link.name} href={link.href} className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors">
                                                <link.icon size={18} className="text-red-600" />
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="shrink-0">
                    <Link href="/rendez-vous" className="group flex items-center gap-2 bg-red-600 text-white font-extrabold text-sm px-6 py-3 rounded -skew-x-12 hover:skew-0 hover:bg-red-700 hover:scale-105 transition-all shadow-md">
                        <span className="skew-x-12 group-hover:skew-x-0 flex items-center gap-2 transition-transform">
                            <CalendarCheck size={20} strokeWidth={2.5} />
                            PRENDRE RDV
                        </span>
                    </Link>
                </div>
            </div>
            
            {/* Espaceur : 5rem (h-20) mobile, 6rem (h-24) desktop */}
            <div className="h-20 lg:h-24"></div>
        </>
    )
}

export default Navbar