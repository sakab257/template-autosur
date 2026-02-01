import { Mail, Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const contactInfo = [
    {
        href: "tel:+33123456789", 
        icon: Phone, 
        label: "Par téléphone", 
        value: "01 23 45 67 89",
        desc: "Du lundi au samedi"
    },
    {
        href: "mailto:contact@autosur.fr", 
        icon: Mail, 
        label: "Par email", 
        value: "contact@autosur.fr",
        desc: "Réponse sous 24h"
    },
]

const ContactSection = () => {
  return (
     <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                    Besoin d'aide ?
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                    Contactez-nous
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {contactInfo.map((element) => (
                    <Link 
                        key={element.href} 
                        href={element.href}
                        className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-md hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                                <element.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-slate-500 font-medium mb-1">{element.label}</p>
                                <p className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{element.value}</p>
                                <p className="text-sm text-slate-400">{element.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ContactSection