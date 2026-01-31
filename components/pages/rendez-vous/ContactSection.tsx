import { Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 max-w-2xl mx-auto text-center">
                        <h2 className="text-xl font-bold text-slate-900 mb-2">
                            Besoin d&apos;aide pour réserver ?
                        </h2>
                        <p className="text-slate-600 mb-4">
                            Vous pouvez également nous appeler pour prendre rendez-vous par téléphone.
                        </p>
                        <Link
                            href="tel:+33123456789"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            01 23 45 67 89
                        </Link>
                    </div>
                </div>
            </section>
  )
}

export default ContactSection