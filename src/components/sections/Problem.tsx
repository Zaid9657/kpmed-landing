"use client";

import { motion } from "framer-motion";
import { X, ArrowDown } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const painPoints = [
  "Hohe Durchfallquoten bei FSP und KP (bis zu 50%)",
  "Teure Präsenzkurse ohne Erfolgsgarantie",
  "Fehlende realistische Übungsmöglichkeiten",
  "Unsicherheit über den Prüfungsablauf",
  "Mangel an strukturiertem Lernmaterial auf Deutsch",
];

export default function Problem() {
  return (
    <section className="section bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 font-[family-name:var(--font-display)] leading-tight">
              Die Prüfungen sind anspruchsvoll.{" "}
              <span className="text-text-secondary">
                Die Vorbereitung muss es nicht sein.
              </span>
            </h2>

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X size={14} className="text-red-500" />
                  </div>
                  <p className="text-text-secondary text-lg">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-soft-gray to-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-red-500 font-[family-name:var(--font-display)]">
                  ~50%
                </div>
                <p className="mt-4 text-xl text-text-secondary">
                  Durchfallquote bei den Prüfungen
                </p>
                <p className="mt-2 text-text-muted">
                  ohne strukturierte Vorbereitung
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Transition Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl text-text-secondary font-medium italic">
            Es gibt einen besseren Weg...
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-4"
          >
            <ArrowDown size={24} className="mx-auto text-orange-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
