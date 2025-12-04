"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Plug, Lightbulb, Cable, Shield, Wifi, Factory, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const iconMap: Record<string, any> = {
  zap: Zap,
  plug: Plug,
  lightbulb: Lightbulb,
  cable: Cable,
  shield: Shield,
  wifi: Wifi,
  factory: Factory,
  smartphone: Smartphone,
}

export function CategoriesSection() {
  const { locale, t } = useLocale()

  return (
    <section id="categories" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-3"
            >
              {t("categories.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              {t("categories.subtitle")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href="/products">
                {t("categories.viewAll")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-4 lg:gap-6">
          {/* First row - left aligned */}
          <div className="flex justify-start gap-4 lg:gap-6">
            {categories.slice(0, 4).map((category, index) => {
              const Icon = iconMap[category.icon] || Zap
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0"
                >
                  <button className="group w-full h-full flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category.name[locale] || category.name.en}
                    </h3>
                  </button>
                </motion.div>
              )
            })}
          </div>
          {/* Second row - right aligned */}
          <div className="flex justify-end gap-4 lg:gap-6">
            {categories.slice(4, 8).map((category, index) => {
              const Icon = iconMap[category.icon] || Zap
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index + 4) * 0.05 }}
                  viewport={{ once: true }}
                  className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0"
                >
                  <button className="group w-full h-full flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category.name[locale] || category.name.en}
                    </h3>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
