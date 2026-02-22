import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-cream py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-semibold mb-8 font-[family-name:var(--font-display)]">
          Impressum
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="text-text-secondary mb-4">
            KP Med<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            Kontakt
          </h2>
          <p className="text-text-secondary mb-4">
            E-Mail: support@kpmed.de
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-text-secondary mb-4">
            [Name des Verantwortlichen]<br />
            [Adresse]
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            Haftungsausschluss
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-display)]">
            Haftung für Inhalte
          </h3>
          <p className="text-text-secondary mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
            fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-display)]">
            Haftung für Links
          </h3>
          <p className="text-text-secondary mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-display)]">
            Urheberrecht
          </h3>
          <p className="text-text-secondary mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </main>
  );
}
