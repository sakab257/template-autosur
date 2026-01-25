import Link from 'next/link'
import { MapPin, Phone, Mail, Home, BookUser } from 'lucide-react'
import { secondaryLinks } from '@/lib/links'

const Footer = () => {
    return (
        <footer className="relative w-full bg-blue-500 py-16 px-6 lg:px-16 overflow-hidden">
            {/* Pattern de points en arrière-plan */}
            <div className="absolute top-4 lg:top-0 inset-0 opacity-20">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
            </div>
            {/* Card principale */}
            <div className="relative max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12 z-10">
                {/* Grille principale */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Colonne gauche : Adresse et Contact */}
                    <div className="space-y-8">
                        {/* Adresse */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6" strokeWidth={2.5} />
                                Adresse
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                1 Avenue de la France<br />
                                75001 Paris<br />
                                France
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                                <BookUser className="w-6 h-6" strokeWidth={2.5} />
                                Contact
                            </h3>
                            <div className="space-y-3 text-slate-700">
                                <p className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-blue-900" strokeWidth={2} />
                                    <a href="tel:+33123456789" className="hover:text-blue-900 transition-colors">
                                        01 23 45 67 89
                                    </a>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-900" strokeWidth={2} />
                                    <a href="mailto:contact@autosur.fr" className="hover:text-blue-900 transition-colors">
                                        contact@contact.fr
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite : Liens */}
                    <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-6">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {/* Lien Accueil en premier */}
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-3 text-slate-700 hover:text-blue-900 transition-colors group"
                                >
                                    <Home className="w-5 h-5 text-blue-900" strokeWidth={2} />
                                    <span className="font-medium">Accueil</span>
                                </Link>
                            </li>
                            {/* Tous les secondary links */}
                            {secondaryLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-3 text-slate-700 hover:text-blue-900 transition-colors group"
                                        >
                                            <Icon className="w-5 h-5 text-blue-900" strokeWidth={2} />
                                            <span className="font-medium">{link.name}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                {/* Séparateur */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-slate-600 text-center lg:text-left">
                            © 2026 Autosur | Tous droits réservés. Développé par{' '}
                            <a
                                href="https://sakab.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-900 hover:text-blue-700 transition-colors"
                            >
                                SAKAB
                            </a>
                            .
                        </p>

                        {/* Liens légaux */}
                        <div className="flex items-center gap-6 text-sm text-slate-600">
                            <Link href="/mentions-legales" className="hover:text-blue-900 hover:underline transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="/politique-confidentialite" className="hover:text-blue-900 hover:underline transition-colors">
                                Politique de confidentialité
                            </Link>
                            <Link href="/cookies" className="hover:text-blue-900 hover:underline transition-colors">
                                Paramètres cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
