import Link from "next/link";

const footerLinks = {
  produkt: [
    { href: "#features", label: "FSP Simulation" },
    { href: "#features", label: "KP Simulation" },
    { href: "#features", label: "Bibliothek" },
    { href: "#features", label: "Audio-Lernen" },
    { href: "#pricing", label: "Preise" },
  ],
  unternehmen: [
    { href: "#", label: "Über uns" },
    { href: "mailto:support@kpmed.de", label: "Kontakt" },
  ],
  rechtliches: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold font-[family-name:var(--font-display)] text-orange-500"
            >
              KP Med
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
              Die intelligente Prüfungsvorbereitung für internationale Ärzte in
              Deutschland.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <span>🔒</span> DSGVO-konform
              </span>
              <span className="flex items-center gap-1">
                <span>🇩🇪</span> Made in Germany
              </span>
            </div>
          </div>

          {/* Produkt */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[family-name:var(--font-display)]">
              Produkt
            </h4>
            <ul className="space-y-3">
              {footerLinks.produkt.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[family-name:var(--font-display)]">
              Unternehmen
            </h4>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[family-name:var(--font-display)]">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 KP Med. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a
                href="mailto:support@kpmed.de"
                className="hover:text-white transition-colors"
              >
                support@kpmed.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
