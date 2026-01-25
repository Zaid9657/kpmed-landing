import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            1. Datenschutz auf einen Blick
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-display)]">
            Allgemeine Hinweise
          </h3>
          <p className="text-text-secondary mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
            werden können.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-display)]">
            Datenerfassung auf dieser Website
          </h3>
          <p className="text-text-secondary mb-4">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p className="text-text-secondary mb-4">
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular
            eingeben.
          </p>

          <p className="text-text-secondary mb-4">
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme
            erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
            Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            2. Hosting
          </h2>
          <p className="text-text-secondary mb-4">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-display)]">
            Externes Hosting
          </h3>
          <p className="text-text-secondary mb-4">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
            Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei
            kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
            eine Website generiert werden, handeln.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-display)]">
            Datenschutz
          </h3>
          <p className="text-text-secondary mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr
            ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
            den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-display)]">
            Ihre Rechte
          </h3>
          <p className="text-text-secondary mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
            außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
          </p>

          <p className="text-text-secondary mb-4">
            Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese
            Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
            unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            4. Kontakt
          </h2>
          <p className="text-text-secondary mb-4">
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen
            Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden
            Sie sich bitte an:
          </p>
          <p className="text-text-secondary mb-4">
            E-Mail: support@kpmed.de
          </p>
        </div>
      </div>
    </main>
  );
}
