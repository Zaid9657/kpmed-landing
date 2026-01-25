"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const plans = [
  {
    name: "Kostenlose Testphase",
    price: "0€",
    period: "5 Tage",
    description: "Starten Sie ohne Risiko",
    features: [
      "Unbegrenzte Simulationen",
      "Zugang zur kompletten Bibliothek",
      "Detailliertes Feedback",
      "Alle Funktionen inklusive",
    ],
    cta: "Kostenlos starten",
    highlighted: true,
    badge: "Beliebt",
  },
  {
    name: "Monatlich",
    price: "100€",
    period: "pro Monat",
    description: "Flexibel und monatlich kündbar",
    features: [
      "Alles aus dem Free Trial",
      "Jederzeit kündbar",
      "E-Mail Support",
      "Regelmäßige Updates",
    ],
    cta: "Abo wählen",
    highlighted: false,
  },
  {
    name: "3 Monate",
    price: "200€",
    period: "einmalig",
    description: "Beste Wahl für ernsthafte Vorbereitung",
    features: [
      "Alles inklusive",
      "Spare 100€",
      "Prioritäts-Support",
      "14-Tage Geld-zurück-Garantie",
    ],
    cta: "Beste Wahl",
    highlighted: false,
    badge: "Spare 100€",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-cream">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Preise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 font-[family-name:var(--font-display)]">
            Transparente Preise. Keine versteckten Kosten.
          </h2>
          <p className="text-lg text-text-secondary">
            Starten Sie mit 5 Tagen kostenlos – keine Kreditkarte erforderlich.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl scale-105 z-10"
                  : "bg-white shadow-lg"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold ${
                    plan.highlighted
                      ? "bg-white text-orange-600"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-xl font-semibold mb-2 font-[family-name:var(--font-display)] ${
                    plan.highlighted ? "text-white" : ""
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-white/80" : "text-text-muted"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="text-center mb-8">
                <span
                  className={`text-5xl font-bold font-[family-name:var(--font-display)] ${
                    plan.highlighted ? "text-white" : ""
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/80" : "text-text-muted"
                  }`}
                >
                  {" "}
                  / {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-white/20" : "bg-green-100"
                      }`}
                    >
                      <Check
                        size={12}
                        className={
                          plan.highlighted ? "text-white" : "text-green-600"
                        }
                      />
                    </div>
                    <span
                      className={
                        plan.highlighted ? "text-white/90" : "text-text-secondary"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-white text-orange-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {plan.cta}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          {...fadeInUp}
          className="text-center text-text-muted text-sm mt-12"
        >
          <Star size={14} className="inline mr-1 text-orange-500" />
          14-Tage Geld-zurück-Garantie für alle Abonnements
        </motion.p>
      </div>
    </section>
  );
}
