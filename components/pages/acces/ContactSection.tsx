import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const contactInfo = [
    {href:"tel:+33123456789", icon: Phone, type:"Téléphone", string:"01 23 45 67 89"},
    {href:"mailto:contact@contact.fr", icon: Phone, type:"Mail", string:"contact@contact.fr"},
]

const ContactSection = () => {
  return (
     <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
                        Nous contacter
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                        {contactInfo.map((element) => (
                            <Link 
                                key={element.href} 
                                href={element.href}
                                className="flex items-center gap-4 bg-slate-50 rounded-2xl p-6 hover:bg-blue-50 hover:border-blue-200 border border-slate-100 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <element.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">{element.type}</p>
                                    <p className="text-xl font-bold text-slate-900">{element.string}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
  )
}

export default ContactSection