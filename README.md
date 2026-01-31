# Template Autosur

Template Next.js moderne pour site vitrine de centre de contrôle technique automobile. Design professionnel avec animations fluides et interface responsive.

## Aperçu

Site one-page marketing comprenant :
- **Hero** avec animation Lottie
- **Services** avec timeline interactive au scroll
- **Tarifs** avec carousel et tableau comparatif
- **Avis clients** avec grille animée

## Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 16.1.4 | Framework React avec App Router |
| React | 19.2.3 | Bibliothèque UI |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 4.x | Styling utility-first |
| Framer Motion | 12.x | Animations avancées |
| Lottie | 3.6.x | Animations vectorielles |
| Lucide React | 0.563.x | Icônes |

## Installation

```bash
# Cloner le repo
git clone <url-du-repo>
cd template_autosur_autosurlike

# Installer les dépendances (pnpm recommandé)
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Scripts disponibles

```bash
pnpm dev      # Serveur de développement
pnpm build    # Build de production
pnpm start    # Serveur de production
pnpm lint     # Linter ESLint
```

## Structure du projet

```
├── app/
│   ├── layout.tsx          # Layout racine (fonts, metadata)
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux + Tailwind
│   └── favicon.ico
│
├── components/
│   ├── HeroAnimation.tsx   # Player Lottie (import dynamique)
│   ├── navigation/
│   │   ├── navbar.tsx      # Barre de navigation responsive
│   │   └── footer.tsx      # Pied de page
│   └── home/
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── TarifsSection.tsx
│       ├── AvisSection.tsx
│       ├── services/
│       │   ├── ServicesScroller.tsx  # Timeline avec scroll animations
│       │   └── AllServices.tsx       # Grille de services
│       ├── tarifs/
│       │   ├── TarifsCarousel.tsx    # Carousel horizontal
│       │   └── TarifsTable.tsx       # Tableau des prix
│       └── avis/
│           ├── AvisCards.tsx         # Cartes d'avis animées
│           └── AvisActions.tsx       # Boutons d'action
│
├── lib/
│   ├── fonts.ts            # Configuration Google Fonts
│   └── links.ts            # Données de navigation
│
├── public/
│   ├── animations/         # Fichiers Lottie JSON
│   └── *.webp              # Logos et images
│
└── Configuration
    ├── next.config.ts
    ├── tsconfig.json
    ├── postcss.config.mjs
    └── eslint.config.mjs
```

## Conventions de code

### Composants

- **Fonctionnels** avec hooks React
- **PascalCase** pour les noms de fichiers et composants
- `"use client"` pour les composants interactifs
- Organisation par feature (home/, navigation/)

### Styling

- **Tailwind CSS** exclusivement (pas de CSS modules)
- **Mobile-first** : styles de base pour mobile, breakpoints pour desktop
- Breakpoints : `sm` (640px), `lg` (1024px), `xl` (1280px)

### Animations

Framer Motion avec le pattern variants :

```tsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

<motion.div
  variants={variants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
/>
```

### Couleurs

| Couleur | Classe Tailwind | Usage |
|---------|-----------------|-------|
| Bleu | `blue-600` | Couleur principale |
| Rouge | `red-600` | CTA, accents |
| Slate | `slate-50` à `slate-900` | Textes, fonds |

## Personnalisation

### Changer les couleurs

Modifier les classes Tailwind dans les composants ou définir des variables CSS dans `globals.css` :

```css
:root {
  --color-primary: #2563eb;
  --color-accent: #dc2626;
}
```

### Changer les polices

Modifier `lib/fonts.ts` :

```ts
import { Poppins, Newsreader } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})
```

### Modifier la navigation

Éditer `lib/links.ts` pour ajouter/modifier les liens :

```ts
export const primaryLinks = [
  { href: "#services", label: "Services", icon: Wrench },
  // ...
]
```

### Remplacer les animations Lottie

1. Exporter votre animation en JSON depuis LottieFiles
2. Placer le fichier dans `public/animations/`
3. Mettre à jour le chemin dans `HeroAnimation.tsx`

## Performance

- **Import dynamique** du player Lottie (SSR désactivé)
- **Images WebP** optimisées
- **Animations au scroll** avec `whileInView` et `viewport={{ once: true }}`
- **Fonts** optimisées via `next/font`

## Accessibilité

- Structure HTML sémantique
- Attributs `aria-label` sur les boutons
- Contraste des couleurs respecté
- Navigation au clavier fonctionnelle
- `scroll-mt-*` pour le scroll avec header fixe

## Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
pnpm i -g vercel

# Déployer
vercel
```

### Build statique

```bash
pnpm build
# Les fichiers sont dans .next/
```

## Licence

MIT

---

Développé avec Next.js et Tailwind CSS.
