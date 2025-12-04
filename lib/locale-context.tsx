"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import {
  type Locale,
  defaultLocale,
  getLocaleFromDomain,
  getLocaleConfig,
  type LocaleConfig,
  t as translate,
} from "./i18n"

interface LocaleContextType {
  locale: Locale
  localeConfig: LocaleConfig
  t: (key: string) => string
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | null>(null)

const LOCALE_STORAGE_KEY = "multron_locale"

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
      const detectedLocale = getLocaleFromDomain(window.location.hostname)
      const initialLocale = savedLocale || detectedLocale
      setLocale(initialLocale)
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    }
  }

  const localeConfig = getLocaleConfig(locale)

  const t = (key: string) => translate(key, locale)

  return <LocaleContext.Provider value={{ locale, localeConfig, t, setLocale: handleSetLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
