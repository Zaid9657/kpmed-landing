"use client";

import { motion } from "framer-motion";
import { Bot, BookOpen, BarChart3 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const differentiators = [
  {
    icon: Bot,
    title: "KI-Gestützt",
    description: "Realistische Simulationen mit intelligenter Spracherkennung",
  },
  {
    icon: BookOpen,
    title: "Umfassend",
    description: "257+ medizinische Themen in strukturierter Bibliothek",
  },
  {
    icon: BarChart3,
    title: "Detailliert",
    description: "Sofortiges Feedback nach jeder Übung",
  },
];

export default function Solution() {
  return (
    <section className="section bg-cream">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Ihre Lösung
          </span>

          {/* Logo/Name */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 font-[family-name:var(--font-display)]">
            <span className="text-orange-500">MedMeister</span> – Ihre digitale
            Prüfungsvorbereitung
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Wir haben MedMeister entwickelt, um internationalen Ärzten die
            bestmögliche Vorbereitung zu bieten. Mit modernster KI-Technologie
            simulieren wir echte Prüfungssituationen – jederzeit und überall
            verfügbar.
          </p>
        </motion.div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-display)]">
                {item.title}
              </h3>
              <p className="text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
