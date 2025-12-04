"use client"

import { useEffect } from "react"
import { useLocale } from "@/lib/locale-context"

export function FontProvider() {
  const { locale } = useLocale()

  useEffect(() => {
    const root = document.documentElement
    if (locale === "zh") {
      root.style.setProperty("--font-sans", "var(--font-noto-sans-sc), 'Noto Sans SC', sans-serif")
    } else {
      root.style.setProperty("--font-sans", "var(--font-noto-sans), 'Noto Sans', sans-serif")
    }
  }, [locale])

  return null
}

