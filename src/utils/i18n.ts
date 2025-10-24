import type { PortfolioConfig } from "../types/config";

export async function getTranslations(locale: string):Promise<PortfolioConfig> {
  const translations = await import(`../config/${locale}.json`)
  return translations
}