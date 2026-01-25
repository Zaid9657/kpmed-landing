"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Building2,
  BookOpen,
  Headphones,
  Check,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const features = [
  {
    icon: MessageSquare,
    iconLabel: "🗣️",
    title: "FSP Simulation",
    subtitle: "Fachsprachprüfung perfekt vorbereitet",
    description:
      "Üben Sie Anamnesegespräche, Arztbriefe und Patientenvorstellungen in realistischen KI-Simulationen. Unsere Spracherkennung versteht medizinisches Deutsch und gibt Ihnen sofortiges Feedback zu Ihrer Kommunikation.",
    features: [
      "Anamnese mit KI-Patienten",
      "Arztbrief-Übungen",
      "Patientenvorstellung vor virtuellem Prüfer",
      "Fachbegriffe-Training",
    ],
  },
  {
    icon: Building2,
    iconLabel: "🏥",
    title: "KP Simulation",
    subtitle: "Kenntnisprüfung souverän meistern",
    description:
      "Bereiten Sie sich auf die mündlich-praktische Prüfung vor. Präsentieren Sie Fälle, beantworten Sie Prüferfragen und erhalten Sie detaillierte Bewertungen Ihrer medizinischen Kenntnisse.",
    features: [
      "Fallpräsentation üben",
      "Differentialdiagnosen diskutieren",
      "Therapieplanung erklären",
      "Notfallmanagement trainieren",
    ],
  },
  {
    icon: BookOpen,
    iconLabel: "📖",
    title: "Bibliothek 444",
    subtitle: "257+ medizinische Themen",
    description:
      "Strukturiertes Wissen für alle prüfungsrelevanten Bereiche. Von Innerer Medizin über Chirurgie bis zur Notfallmedizin – alles auf Deutsch mit Prüfungsfokus aufbereitet.",
    features: [
      "Innere Medizin (Kardiologie, Pneumologie, Gastroenterologie...)",
      "Chirurgie",
      "Notfallmedizin",
      "EKG-Interpretation mit Diagrammen",
    ],
  },
  {
    icon: Headphones,
    iconLabel: "🎧",
    title: "Audio-Bibliothek",
    subtitle: "98+ Stunden Lernmaterial",
    description:
      "Lernen Sie unterwegs – im Auto, beim Sport oder in der Pause. Professionell eingesprochene medizinische Inhalte auf Deutsch.",
    features: [
      "Passive Wissensvermittlung",
      "Perfekt für den Arbeitsweg",
      "Verstärkt das Gelernte",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="section bg-warm-white">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Funktionen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 font-[family-name:var(--font-display)]">
            Alles was Sie für Ihren Erfolg brauchen
          </h2>
          <p className="text-lg text-text-secondary">
            Umfassende Werkzeuge für Ihre Prüfungsvorbereitung
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                    {feature.iconLabel}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold mb-2 font-[family-name:var(--font-display)]">
                  {feature.title}
                </h3>
                <p className="text-lg text-orange-600 font-medium mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-green-600" />
                      </div>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Card */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  {/* Mock interface preview */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-soft-gray to-cream rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                        <feature.icon size={36} className="text-white" />
                      </div>
                      <p className="text-text-secondary font-medium">
                        {feature.title}
                      </p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-40" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
