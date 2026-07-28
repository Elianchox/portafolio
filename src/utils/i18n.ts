import type { PortfolioConfig } from "../types/config";

export interface LocaleConfig {
  code: string;
  label: string;
  flag: string;
}

export const locales: LocaleConfig[] = [
  { code: "es", label: "Español", flag: "https://flagcdn.com/16x12/es.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/16x12/gb.png" },
];

export const defaultLocale = "es";

export function getOtherLocales(currentLocale: string): LocaleConfig[] {
  return locales.filter(l => l.code !== currentLocale);
}

export async function getTranslations(locale: string): Promise<PortfolioConfig> {
  const translations = await import(`../config/${locale}.json`)
  return translations
}