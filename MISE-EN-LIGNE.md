# Guide de mise en ligne - Autosur

## 1. Personnaliser les informations du centre

Avant de déployer, il faut remplacer les **données fictives** par les vraies informations du centre.

### Fichiers à modifier

#### `components/seo/JsonLd.tsx`
Remplacer les valeurs suivantes par les vraies :
- **Adresse** : `1 Avenue de la France, 75001 Paris` (apparaît 2 fois)
- **Téléphone** : `+33-1-23-45-67-89` (apparaît 2 fois)
- **Coordonnées GPS** : `latitude: 48.8566, longitude: 2.3522`
- **Horaires d'ouverture** : vérifier les horaires lundi-vendredi (08h-18h) et samedi (08h-12h)
- **Note Google** : `ratingValue: "4.9"` et `ratingCount: "200"` → mettre les vraies valeurs

#### `components/navigation/footer.tsx`
- **Adresse** : `1 Avenue de la France, 75001 Paris`
- **Téléphone** : `01 23 45 67 89` (+ le lien `tel:+33123456789`)
- **Email** : `contact@autosur.fr` (+ le lien `mailto:contact@autosur.fr`)

#### `app/layout.tsx`
- **`SITE_URL`** (ligne 8) : vérifier que `https://www.autosur.sakab.fr` est le bon domaine final
- **Titre et description** : adapter si le centre n'est pas à Paris

#### `app/sitemap.ts`
- **`SITE_URL`** (ligne 3) : doit correspondre au domaine final

#### `app/robots.ts`
- **URL du sitemap** (ligne 13) : doit correspondre au domaine final

---

## 2. Créer l'image Open Graph

Créer une image `public/og-image.png` :
- **Dimensions** : 1200 x 630 pixels
- **Contenu suggéré** : logo Autosur + nom du centre + adresse + "Contrôle Technique"
- **Format** : PNG ou JPG

Cette image apparaît quand quelqu'un partage le site sur Facebook, LinkedIn, Twitter, WhatsApp, etc.

> Outils gratuits pour la créer : Canva, Figma, ou tout éditeur d'image.

---

## 3. Déployer le site

### Option A : Vercel (recommandé pour Next.js)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Puis dans le dashboard Vercel :
1. Aller dans **Settings > Domains**
2. Ajouter le domaine `autosur.sakab.fr`
3. Configurer les DNS chez le registrar (voir étape 4)

### Option B : VPS / Serveur dédié

```bash
# Build de production
pnpm build

# Lancer le serveur
pnpm start
```

Le site tourne par défaut sur le port `3000`. Configurer un reverse proxy (Nginx/Caddy) devant :

```nginx
server {
    listen 80;
    server_name autosur.sakab.fr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Puis activer HTTPS avec Certbot :
```bash
sudo certbot --nginx -d autosur.sakab.fr
```

---

## 4. Configurer le DNS

Chez le registrar du domaine, ajouter :

| Type | Nom | Valeur |
|------|-----|--------|
| A | `autosur` | IP du serveur |
| CNAME | `www.autosur` | `autosur.sakab.fr` |

Si Vercel : suivre les instructions de leur dashboard pour les DNS.

---

## 5. Configurer les variables d'environnement

Pour le formulaire de recrutement, configurer sur le serveur de production :

```env
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=465
SMTP_USER=votre-email@domaine.fr
SMTP_PASS=votre-mot-de-passe
SMTP_FROM=votre-email@domaine.fr
SMTP_TO=email-destinataire@domaine.fr
```

---

## 6. Google Search Console (référencement)

C'est l'étape la plus importante pour le référencement.

1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Cliquer **Ajouter une propriété**
3. Choisir **Préfixe d'URL** → entrer `https://www.autosur.sakab.fr`
4. **Vérifier la propriété** via l'une des méthodes proposées :
   - Fichier HTML (télécharger et mettre dans `public/`)
   - Balise HTML (ajouter dans `app/layout.tsx` via `metadata.verification`)
   - DNS (ajouter un enregistrement TXT)
5. Une fois vérifié, aller dans **Sitemaps** et soumettre : `https://www.autosur.sakab.fr/sitemap.xml`

### Vérification via metadata (méthode recommandée)

Si Google donne un code comme `google1234567890abcdef`, ajouter dans `app/layout.tsx` :

```ts
export const metadata: Metadata = {
  // ... metadata existantes
  verification: {
    google: "google1234567890abcdef",
  },
};
```

---

## 7. Google Business Profile (fiche Google Maps)

Pour apparaître sur Google Maps et dans les résultats locaux :

1. Aller sur [business.google.com](https://business.google.com)
2. Créer ou revendiquer la fiche du centre
3. Remplir : nom, adresse, téléphone, horaires, catégorie ("Centre de contrôle technique")
4. Ajouter le lien du site web : `https://www.autosur.sakab.fr`
5. Ajouter des photos du centre
6. Valider la fiche (courrier postal ou téléphone)

---

## 8. Google Analytics (suivi du trafic)

1. Aller sur [analytics.google.com](https://analytics.google.com)
2. Créer une propriété GA4
3. Récupérer l'ID de mesure (ex: `G-XXXXXXXXXX`)
4. L'intégrer dans le site. Deux options :

### Option simple : via le tag dans layout.tsx

Ajouter dans `app/layout.tsx`, dans la balise `<head>` (ou via `metadata.other`) :

```tsx
<html lang="fr">
  <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `,
      }}
    />
  </head>
  <body>...</body>
</html>
```

---

## 9. Checklist finale avant mise en ligne

- [ ] Informations du centre mises à jour (adresse, téléphone, email, horaires)
- [ ] Image Open Graph créée (`public/og-image.png`, 1200x630px)
- [ ] Variables d'environnement configurées (SMTP)
- [ ] Domaine configuré et HTTPS activé
- [ ] `pnpm build` passe sans erreur
- [ ] Google Search Console configuré + sitemap soumis
- [ ] Google Business Profile créé/revendiqué
- [ ] Google Analytics configuré
- [ ] Tester le site sur mobile
- [ ] Tester le partage sur les réseaux sociaux (vérifier l'image OG)
- [ ] Vérifier les pages sur [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Vérifier les données structurées sur [Rich Results Test](https://search.google.com/test/rich-results)

---

## Outils utiles pour le suivi SEO

| Outil | URL | Usage |
|-------|-----|-------|
| Google Search Console | search.google.com/search-console | Suivi indexation et requêtes |
| PageSpeed Insights | pagespeed.web.dev | Performance et Core Web Vitals |
| Rich Results Test | search.google.com/test/rich-results | Vérifier les données structurées |
| Mobile-Friendly Test | search.google.com/test/mobile-friendly | Test compatibilité mobile |
| Metatags.io | metatags.io | Prévisualiser les balises Open Graph |
