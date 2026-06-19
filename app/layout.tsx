import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const bebasNeue = Bebas_Neue({ 
  weight: '400', 
  subsets: ["latin"],
  variable: '--font-valorant' 
});

const rajdhani = Rajdhani({ 
  weight: ['400', '600', '700'], 
  subsets: ["latin"],
  variable: '--font-sans' 
});

export const metadata: Metadata = {
  title: "VLRNT_DEV | Portfolio",
  description: "CV Interactif de Développeur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${bebasNeue.variable} ${rajdhani.variable} antialiased pt-16`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}