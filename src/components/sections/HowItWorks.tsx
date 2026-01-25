"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: "Registrieren",
    description: "Erstellen Sie Ihr kostenloses Konto in weniger als 2 Minuten.",
  },
  {
    number: "02",
    icon: Target,
    title: "Üben",
    description:
      "Starten Sie mit FSP oder KP Simulationen. Üben Sie so oft Sie möchten.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Bestehen",
    description: "Gehen Sie selbstbewusst in Ihre Prüfung – bestens vorbereitet.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-cream">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
            So funktioniert&apos;s
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-display)]">
            In 3 Schritten zur Prüfungsvorbereitung
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto border-4 border-orange-100">
                    <step.icon size={32} className="text-orange-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 font-[family-name:var(--font-display)]">
                  {step.title}
                </h3>
                <p className="text-text-secondary max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow to next step - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-8 mb-4">
                    <ArrowRight
                      size={24}
                      className="mx-auto text-orange-300 rotate-90"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="#pricing" className="btn-primary text-lg px-8 py-4">
            Jetzt kostenlos starten
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
