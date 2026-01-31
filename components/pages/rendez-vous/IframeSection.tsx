// URL de l'iframe à configurer
const BOOKING_IFRAME_URL = "https://www.autosur.fr/"; // Remplacer par l'URL réelle de l'agenda

const IframeSection = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-inner min-h-150 lg:min-h-200">
                        <iframe
                            src={BOOKING_IFRAME_URL}
                            className="w-full h-150 lg:h-200 border-0"
                            title="Réservation de rendez-vous"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
  )
}

export default IframeSection