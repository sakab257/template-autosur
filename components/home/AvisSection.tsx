export default function AvisSection() {
  return (
    <section
      id="avis"
      className="relative min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] scroll-mt-20 lg:scroll-mt-24 bg-blue-500 text-white"
    >
      <svg className="w-full h-24 lg:h-40" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path 
          className="fill-white" 
          d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,213.3C840,245,960,267,1080,240C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/* Pattern de points en arrière-plan avec fondu */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%">
              <defs>
                  {/* 1. Votre pattern de points existant (inchangé) */}
                  <pattern id="dot-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="white" />
                  </pattern>

                  {/* 2. NOUVEAU : Le dégradé linéaire pour le masque */}
                  {/* y1="0%" à y2="100%" assure une direction verticale (haut vers bas) */}
                  <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      {/* Point de départ (Haut) : Noir -> sera transparent dans le masque */}
                      <stop offset="0%" stopColor="black" />
                      {/* Point d'arrivée (Bas) : Blanc -> sera visible dans le masque */}
                      <stop offset="100%" stopColor="white" />
                  </linearGradient>

                  {/* 3. NOUVEAU : Le masque qui utilise le dégradé */}
                  {/* maskContentUnits="objectBoundingBox" permet d'utiliser des coordonnées de 0 à 1 */}
                  <mask id="dot-mask" maskContentUnits="objectBoundingBox">
                      <rect x="0" y="0" width="1" height="1" fill="url(#fade-gradient)" />
                  </mask>
              </defs>

              {/* 4. MODIFICATION : On applique le masque sur le rectangle principal */}
              {/* Ajout de mask="url(#dot-mask)" */}
              <rect width="100%" height="100%" fill="url(#dot-pattern)" mask="url(#dot-mask)" />
          </svg>
      </div>
      <div className="container mx-auto mt-12 px-8">
        <h2 className="text-3xl lg:text-4xl font-black mb-4 text-center">
          Ils témoignent de nos services !
        </h2>
        <p className="text-center">
          Découvrez ce que nos clients disent de nous sur Google !<br />
          Nous sommes notés <strong>4.9/5</strong> avec plus de <strong>500 avis</strong> !
        </p>
        {/* Slider d'avis à venir */}
      </div>
    </section>
  );
}
