import { FileText } from 'lucide-react'
import React from 'react'
import FAQAccordion from '@/components/pages/infos-pratiques/FAQAccordion'

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                            Questions fréquentes
                        </h2>
                    </div>
                    <div className="max-w-3xl">
                        <FAQAccordion />
                    </div>
                </div>
            </section>
  )
}

export default FAQSection