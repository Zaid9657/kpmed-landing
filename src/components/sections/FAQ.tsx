"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const faqs = [
  {
    question: "Was ist der Unterschied zwischen FSP und KP?",
    answer:
      "Die Fachsprachprüfung (FSP) testet Ihre medizinische Kommunikationsfähigkeit auf Deutsch. Die Kenntnisprüfung (KP) prüft Ihr medizinisches Fachwissen. MedMeister bereitet Sie auf beide Prüfungen vor.",
  },
  {
    question: "Wie realistisch sind die Simulationen?",
    answer:
      "Unsere KI-Simulationen wurden von erfahrenen Ärzten entwickelt und basieren auf echten Prüfungsszenarien. Die Spracherkennung versteht medizinisches Deutsch und reagiert natürlich auf Ihre Antworten.",
  },
  {
    question: "Kann ich MedMeister auf dem Handy nutzen?",
    answer:
      "Ja! MedMeister funktioniert auf allen Geräten – Smartphone, Tablet und Computer. Üben Sie wo und wann Sie möchten.",
  },
  {
    question: "Was passiert nach der kostenlosen Testphase?",
    answer:
      "Nach 5 Tagen können Sie ein Abonnement wählen. Es gibt keine automatische Abbuchung – Sie entscheiden selbst, ob Sie weitermachen möchten.",
  },
  {
    question: "Gibt es eine Geld-zurück-Garantie?",
    answer:
      "Ja, wir bieten eine 14-tägige Geld-zurück-Garantie für alle Abonnements.",
  },
  {
    question: "In welchen Bundesländern ist MedMeister geeignet?",
    answer:
      "MedMeister bereitet auf die Prüfungen in allen deutschen Bundesländern vor. Die Grundstruktur von FSP und KP ist bundesweit ähnlich.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-text-primary group-hover:text-orange-600 transition-colors pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={24}
            className={`transition-colors ${
              isOpen ? "text-orange-500" : "text-text-muted"
            }`}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-warm-white">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-display)]">
            Häufig gestellte Fragen
          </h2>
        </motion.div>

        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact prompt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary mt-12"
        >
          Haben Sie weitere Fragen?{" "}
          <a
            href="mailto:support@kpmed.de"
            className="text-orange-600 font-medium hover:underline"
          >
            Kontaktieren Sie uns
          </a>
        </motion.p>
      </div>
    </section>
  );
}
