export default function MapEmbed() {
    return (
        <div className="relative w-full h-100 lg:h-125 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white ring-1 ring-white">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1635000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du centre de contrôle technique"
                className="filter contrast-[1.05] grayscale-[0.1]"
            />
        </div>
    );
}