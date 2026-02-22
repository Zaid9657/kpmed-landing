"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-coral-500" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 font-[family-name:var(--font-display)]">
            Bereit für Ihre Prüfung?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Schließen Sie sich über 1.000 Ärzten an, die mit MedMeister lernen.
          </p>

          <Link
            href="#pricing"
            className="btn-white text-lg px-10 py-5 inline-flex"
          >
            5 Tage kostenlos testen
            <ArrowRight size={20} />
          </Link>

          <p className="mt-6 text-white/70 text-sm">
            Keine Kreditkarte erforderlich. Jederzeit kündbar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
