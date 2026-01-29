const tarifsList = [
    { categorie: "Véhicule Particulier", prix: "75 €", ancienPrix: "79 €", promo: true },
    { categorie: "Utilitaire Léger", prix: "86 €", ancienPrix: "90 €", promo: true },
    { categorie: "4x4 / Grand Utilitaire", prix: "91 €", ancienPrix: "95 €", promo: true },
    { categorie: "Véhicule Hybride", prix: "86 €", ancienPrix: "90 €", promo: true },
    { categorie: "Véhicule GAZ-GPL", prix: "106 €", ancienPrix: "110 €", promo: true },
    { categorie: "Véhicule Hors Gabarit", prix: "106 €", ancienPrix: "110 €", promo: true },
    { categorie: "Contre-Visite", prix: "30 €" },
    { categorie: "Contre-Visite Externe", prix: "40 €" },
    { categorie: "Complémentaire Pollution", prix: "40 €" },
]

export default function TarifsTable() {
    return (
        <div id="tarifs-table" className="mt-16 max-w-2xl mx-auto scroll-mt-24">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Récapitulatif des tarifs
            </h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="text-left py-4 px-6 font-semibold">Catégorie</th>
                            <th className="text-right py-4 px-6 font-semibold">Tarif TTC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarifsList.map((tarif, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray-100 last:border-b-0 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                            >
                                <td className="py-4 px-6">
                                    <span className="text-gray-800">{tarif.categorie}</span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <span className={`font-bold ${tarif.promo ? 'text-blue-500' : 'text-gray-900'}`}>
                                            {tarif.prix}
                                        </span>
                                        {tarif.ancienPrix && (
                                            <span className="text-sm text-gray-400 line-through">
                                                {tarif.ancienPrix}
                                            </span>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
                * Tarifs en vigueur au 1er janvier 2025. Sous réserve de modifications.
            </p>
        </div>
    )
}
