import { Poppins, Newsreader } from "next/font/google";

export const poppins = Poppins({
    weight: ['100','200','300','400','500','600','700'],
    subsets: ["latin"],
});

export const newsreader = Newsreader({
    weight: ['200','400','700'],
    subsets: ["latin"],
});