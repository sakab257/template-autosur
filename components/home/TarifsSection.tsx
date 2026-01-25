export default function TarifsSection() {
  return (
    <section
      id="tarifs"
      className="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] scroll-mt-20 lg:scroll-mt-24 bg-white"
    >
      {/* --- VAGUE DE SÉPARATION (CSS PURE) --- */}
      {/* Forme ondulée en haut pour la transition douce */}
      <svg className="w-full h-20 lg:h-32" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path 
          className="fill-blue-500" 
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-black text-black my-10 text-center">
          Nos Tarifs Transparents
        </h2>
        {/* Tableau de prix à venir */}
      </div>
    </section>
  );
}
