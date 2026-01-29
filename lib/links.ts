import { Calendar, Car, Euro, MessageSquare, Info, MapPin, Briefcase, FileText } from "lucide-react";

// Les liens principaux visibles directement sur Desktop
export const links = [
    { name: "Services", href: "/#services", icon: Car },
    { name: "Tarifs", href: "/#tarifs", icon: Euro },
    { name: "Avis Clients", href: "/#avis", icon: MessageSquare },
];

// Les liens cachés dans le menu "Plus" ou "Infos"
export const secondaryLinks = [
    { name: "Qui sommes nous ?", href: "/a-propos", icon: Info },
    { name: "Mon prochain contrôle", href: "/rappel", icon: Calendar },
    { name: "Tout sur le CT", href: "/infos-pratiques", icon: FileText },
    { name: "Accès & Plan", href: "/acces", icon: MapPin },
    { name: "Recrutement", href: "/recrutement", icon: Briefcase },
];