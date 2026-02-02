import { Building2, Server, MapPin, Phone, Mail, FileText } from 'lucide-react'

const MentionsContent = () => {
  return (
    <section className="relative py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
            
            <div className="max-w-4xl mx-auto space-y-12">
                
                {/* BLOC 1 : ÉDITEUR DU SITE */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <Building2 size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Éditeur du site</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 text-slate-600">
                        <div className="space-y-2">
                            <p className="font-bold text-slate-900">Raison Sociale</p>
                            <p>AUTOSUR CENTRE TECHNIQUE</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-slate-900">Forme Juridique</p>
                            <p>SARL au capital de 5 000€</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-slate-900">SIRET</p>
                            <p>123 456 789 00012</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-slate-900">Numéro TVA</p>
                            <p>FR 12 123456789</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100 grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                            <p className="text-slate-600">1 Avenue de la France<br/>75001 Paris</p>
                        </div>
                        <div className="space-y-3">
                            <a href="tel:0123456789" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                                <Phone className="w-5 h-5 text-blue-500" />
                                01 23 45 67 89
                            </a>
                            <a href="mailto:contact@autosur.fr" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                                <Mail className="w-5 h-5 text-blue-500" />
                                contact@autosur.fr
                            </a>
                        </div>
                    </div>
                </div>

                {/* BLOC 2 : HÉBERGEMENT */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <Server size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Hébergement</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Ce site est hébergé par la société <strong>Vercel Inc.</strong>
                    </p>
                    <p className="text-slate-600 text-sm">
                        Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA<br/>
                        Site web : <a href="https://vercel.com" target="_blank" className="text-blue-600 hover:underline">https://vercel.com</a>
                    </p>
                </div>

                {/* BLOC 3 : PROPRIÉTÉ INTELLECTUELLE */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <FileText size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Propriété intellectuelle</h2>
                    </div>
                    <div className="space-y-4 text-slate-600 leading-relaxed">
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p>
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default MentionsContent