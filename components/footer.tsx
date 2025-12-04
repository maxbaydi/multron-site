"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { useTheme } from "next-themes"
import { locales } from "@/lib/i18n"

export function Footer() {
  const { t } = useLocale()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const footerLinks = {
    products: [
      { label: "categories.power", href: "#categories" },
      { label: "categories.connectors", href: "#categories" },
      { label: "categories.lighting", href: "#categories" },
      { label: "categories.cables", href: "#categories" },
    ],
    company: [
      { label: "footer.about", href: "#about" },
      { label: "footer.products", href: "/products" },
    ],
  }

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative h-6 w-auto">
                <Image
                  src={mounted && resolvedTheme === "dark" ? "/logo/logo_white-on-black-bg.png" : "/logo/logo_black-on-white-bg.png"}
                  alt="MULTRON"
                  width={120}
                  height={24}
                  className="object-contain h-full w-auto"
                  priority
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">{t("footer.description")}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <a
                  href={`mailto:${t("footer.contact.email")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <a
                  href={`tel:${t("footer.contact.phone")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.contact.phone")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MULTRON. {t("footer.rights")}
          </p>

          {/* Domain badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {locales.map((loc) => {
              const domainCode = loc.domain.split(".").pop()?.toUpperCase() || ""
              
              return (
                <a
                  key={loc.code}
                  href={`https://${loc.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-foreground/20 transition-all"
                  title={loc.domain}
                >
                  {domainCode}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
