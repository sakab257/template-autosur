import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Controle Technique Autosur",
  description: "Controle Technique Autosur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
