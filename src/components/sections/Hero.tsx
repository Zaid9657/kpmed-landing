"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Star, MapPin } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-[128px] opacity-40" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-100 rounded-full blur-[100px] opacity-50" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 mb-8"
          >
            <span className="text-lg">🎓</span>
            <span className="text-sm font-medium text-text-secondary">
              Über 1.000 Ärzte in 10 Tagen registriert
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 font-[family-name:var(--font-display)]"
          >
            Bestehen Sie Ihre{" "}
            <span className="text-orange-500">FSP & KP</span> Prüfung mit
            Vertrauen
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Die intelligenteste Vorbereitung für internationale Ärzte in
            Deutschland. KI-gestützte Simulationen, umfassende Lernmaterialien
            und detailliertes Feedback.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="#pricing" className="btn-primary text-lg px-8 py-4">
              5 Tage kostenlos testen
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#features"
              className="btn-secondary text-lg px-8 py-4"
            >
              Mehr erfahren
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <Lock size={16} />
              <span>DSGVO-konform</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <MapPin size={16} />
              <span>Made in Germany</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <span>4.9/5 Bewertung</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-3 bg-text-muted rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
