"use client";

import { motion } from "framer-motion";
import { Quote, Lock, Shield, CreditCard } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const stats = [
  { value: "1.000+", label: "Registrierte Ärzte in 10 Tagen" },
  { value: "444+", label: "Medizinische Themen" },
  { value: "98h+", label: "Audio-Lernmaterial" },
  { value: "24/7", label: "Verfügbarkeit" },
];

const testimonials = [
  {
    quote:
      "KP Med hat mir geholfen, meine FSP beim ersten Versuch zu bestehen. Die Simulationen waren unglaublich realistisch.",
    author: "Dr. Ahmed M.",
    role: "Internist aus Ägypten",
  },
  {
    quote:
      "Endlich eine Plattform, die versteht, was wir brauchen. Das Feedback nach jeder Übung ist Gold wert.",
    author: "Dr. Maria S.",
    role: "Chirurgin aus Rumänien",
  },
  {
    quote:
      "Die Audio-Bibliothek nutze ich jeden Tag auf dem Weg zur Arbeit. Perfekte Ergänzung zum aktiven Lernen.",
    author: "Dr. Yusuf K.",
    role: "Allgemeinmediziner aus der Türkei",
  },
];

const trustBadges = [
  { icon: Lock, label: "Sichere Datenverarbeitung" },
  { icon: Shield, label: "DSGVO-konform" },
  { icon: CreditCard, label: "Sichere Zahlung" },
];

export default function SocialProof() {
  return (
    <section className="section relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100/50 to-cream" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Statistics */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-600 font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <p className="mt-2 text-text-secondary text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 font-[family-name:var(--font-display)]">
            Was unsere Nutzer sagen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg relative"
              >
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-orange-100"
                />
                <p className="text-text-secondary text-lg leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          {...fadeInUp}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-text-secondary"
            >
              <badge.icon size={20} className="text-green-600" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
