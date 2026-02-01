import AvisCards from './avis/AvisCards'
import AvisActions from './avis/AvisActions'
import DotPattern from '@/components/ui/DotPattern'

export default function AvisSection() {
    return (
        <section
            id="avis"
            className="relative min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] scroll-mt-20 lg:scroll-mt-24 bg-blue-500 text-white pb-16"
        >
            {/* --- VAGUE DE SÉPARATION --- */}
            <svg className="w-full h-24 lg:h-40" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                    className="fill-white"
                    d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,213.3C840,245,960,267,1080,240C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
            </svg>

            <DotPattern />

            {/* --- CONTENU --- */}
            <div className="relative container mx-auto px-6 lg:px-16">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                        Ils témoignent de nos services !
                    </h2>
                    <p className="text-lg text-blue-100">
                        Découvrez ce que nos clients disent de nous sur Google !<br />
                        Nous sommes notés <strong className="text-white">4.9/5</strong> avec plus de <strong className="text-white">500 avis</strong> !
                    </p>
                </div>

                <AvisCards />
                <AvisActions />
            </div>
        </section>
    )
}
