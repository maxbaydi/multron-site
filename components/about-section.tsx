"use client"

import { useLocale } from "@/lib/locale-context"
import { Shield, Cpu, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const { t } = useLocale()

  const features = [
    {
      icon: Shield,
      title: t("features.safety"),
      description: t("features.safety.desc"),
    },
    {
      icon: Cpu,
      title: t("features.technology"),
      description: t("features.technology.desc"),
    },
    {
      icon: CheckCircle,
      title: t("features.reliability"),
      description: t("features.reliability.desc"),
    },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-secondary relative">
              <Image
                src="/multron_manufacturing.png"
                alt="MULTRON Manufacturing"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
              {t("about.tag")}
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-balance">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">{t("about.description")}</p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
