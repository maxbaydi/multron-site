"use client"

import { useLocale } from "@/lib/locale-context"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  const { t } = useLocale()

  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-balance">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <motion.a
              href={`mailto:${t("footer.contact.email")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base font-medium">{t("footer.contact.email")}</span>
            </motion.a>

            <motion.a
              href={`tel:${t("footer.contact.phone")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base font-medium">{t("footer.contact.phone")}</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              disabled
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-lg font-medium bg-primary text-primary-foreground cursor-default pointer-events-none opacity-50"
            >
              {t("cta.button")}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

