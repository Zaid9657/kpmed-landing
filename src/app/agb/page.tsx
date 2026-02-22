import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AGB() {
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
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 1 Geltungsbereich
          </h2>
          <p className="text-text-secondary mb-4">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die
            zwischen KP Med und dem Nutzer über die Nutzung der KP Med Plattform
            geschlossen werden.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 2 Vertragsgegenstand
          </h2>
          <p className="text-text-secondary mb-4">
            (1) KP Med bietet eine digitale Lernplattform zur Vorbereitung auf die
            Fachsprachprüfung (FSP) und Kenntnisprüfung (KP) für internationale Ärzte in
            Deutschland an.
          </p>
          <p className="text-text-secondary mb-4">
            (2) Die Plattform umfasst KI-gestützte Simulationen, eine medizinische
            Bibliothek, Audio-Lernmaterialien und weitere Lernwerkzeuge.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 3 Registrierung und Nutzerkonto
          </h2>
          <p className="text-text-secondary mb-4">
            (1) Für die Nutzung der Plattform ist eine Registrierung erforderlich. Der
            Nutzer verpflichtet sich, wahrheitsgemäße Angaben zu machen.
          </p>
          <p className="text-text-secondary mb-4">
            (2) Das Nutzerkonto ist persönlich und nicht übertragbar.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 4 Kostenlose Testphase
          </h2>
          <p className="text-text-secondary mb-4">
            (1) Neue Nutzer erhalten eine kostenlose Testphase von 5 Tagen.
          </p>
          <p className="text-text-secondary mb-4">
            (2) Nach Ablauf der Testphase ist ein kostenpflichtiges Abonnement
            erforderlich, um die Plattform weiter zu nutzen.
          </p>
          <p className="text-text-secondary mb-4">
            (3) Es erfolgt keine automatische Abbuchung nach der Testphase.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 5 Preise und Zahlung
          </h2>
          <p className="text-text-secondary mb-4">
            (1) Die aktuellen Preise sind auf der Website einsehbar.
          </p>
          <p className="text-text-secondary mb-4">
            (2) Die Zahlung erfolgt im Voraus für den gewählten Zeitraum.
          </p>
          <p className="text-text-secondary mb-4">
            (3) Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 6 Widerrufsrecht und Geld-zurück-Garantie
          </h2>
          <p className="text-text-secondary mb-4">
            (1) Verbraucher haben ein gesetzliches Widerrufsrecht von 14 Tagen.
          </p>
          <p className="text-text-secondary mb-4">
            (2) Zusätzlich bieten wir eine 14-tägige Geld-zurück-Garantie für alle
            kostenpflichtigen Abonnements.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 7 Kündigung
          </h2>
          <p className="text-text-secondary mb-4">
            (1) Monatliche Abonnements können jederzeit zum Ende des Abrechnungszeitraums
            gekündigt werden.
          </p>
          <p className="text-text-secondary mb-4">
            (2) Die Kündigung kann über das Nutzerkonto oder per E-Mail an
            support@kpmed.de erfolgen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 8 Haftung
          </h2>
          <p className="text-text-secondary mb-4">
            (1) KP Med haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des
            Körpers oder der Gesundheit.
          </p>
          <p className="text-text-secondary mb-4">
            (2) Die Nutzung der Plattform ersetzt keine professionelle medizinische
            Ausbildung oder Beratung.
          </p>
          <p className="text-text-secondary mb-4">
            (3) Ein Erfolg bei den Prüfungen kann nicht garantiert werden.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 font-[family-name:var(--font-display)]">
            § 9 Schlussbestimmungen
          </h2>
          <p className="text-text-secondary mb-4">
            (1) Es gilt das Recht der Bundesrepublik Deutschland.
          </p>
          <p className="text-text-secondary mb-4">
            (2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die
            Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>

          <p className="text-text-muted mt-8">
            Stand: Januar 2025
          </p>
        </div>
      </div>
    </main>
  );
}
