import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

const SITE_URL = "https://www.autosur.sakab.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Contrôle Technique Autosur | Centre agréé à Paris",
    template: "%s | Autosur",
  },
  description:
    "Centre de contrôle technique automobile agréé à Paris. Prenez rendez-vous en ligne, tarifs compétitifs, sans rendez-vous possible. Contrôle technique auto rapide et fiable.",
  keywords: [
    "contrôle technique",
    "contrôle technique Paris",
    "contrôle technique automobile",
    "CT auto",
    "centre agréé",
    "Autosur",
    "contrôle technique pas cher",
    "rendez-vous contrôle technique",
    "contre-visite",
  ],
  authors: [{ name: "Autosur" }],
  creator: "SAKAB",
  publisher: "Autosur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Autosur - Contrôle Technique",
    title: "Contrôle Technique Autosur | Centre agréé à Paris",
    description:
      "Centre de contrôle technique automobile agréé à Paris. Prenez rendez-vous en ligne, tarifs compétitifs. Contrôle technique auto rapide et fiable.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Autosur - Centre de Contrôle Technique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrôle Technique Autosur | Centre agréé à Paris",
    description:
      "Centre de contrôle technique automobile agréé à Paris. Prenez rendez-vous en ligne, tarifs compétitifs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} antialiased`}>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
