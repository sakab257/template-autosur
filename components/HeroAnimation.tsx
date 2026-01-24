// components/HeroAnimation.tsx
"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react'; // 1. On importe l'icône de chargement

// Import du Player
const Player = dynamic(
    () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
    { ssr: false }
);

const HeroAnimation = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/animations/voiture-autosur.json')
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error("Erreur chargement animation:", err));
    }, []);

    // 2. Si les données ne sont pas encore là, on affiche le Loader
    if (!animationData) {
        return (
        // On met une hauteur minimale (min-h-[300px]) pour réserver l'espace
        // et éviter que le site ne "saute" quand l'animation arrive.
        <div className="w-full h-full min-h-75 flex items-center justify-center bg-transparent rounded-2xl animate-pulse">
            <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
        </div>
        );
    }

    return (
        <div className="w-full max-w-125 mx-auto">
        <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '100%', width: '100%' }}
        />
        </div>
    );
};

export default HeroAnimation;