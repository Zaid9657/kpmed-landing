import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MedMeister - FSP & KP Prüfungsvorbereitung für Ärzte",
  description:
    "Bereiten Sie sich mit KI-gestützten Simulationen auf die Fachsprachprüfung (FSP) und Kenntnisprüfung (KP) vor. Über 1.000 Ärzte vertrauen MedMeister.",
  keywords:
    "FSP, KP, Fachsprachprüfung, Kenntnisprüfung, Ärzte Deutschland, medizinische Prüfung, Approbation",
  openGraph: {
    title: "MedMeister - FSP & KP Prüfungsvorbereitung",
    description:
      "Die intelligenteste Vorbereitung für internationale Ärzte in Deutschland.",
    url: "https://kpmed.de",
    siteName: "MedMeister",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
