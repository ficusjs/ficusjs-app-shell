// @ts-nocheck
import { getI18n } from '@ficusjs/i18n'

export function addI18nMessages (data) {
  if (!data || !data.modules) return
  const i18n = getI18n()
  if (data.messages) {
    for (const lang in data.messages) {
      i18n.add(data.messages[lang], lang)
    }
  }
  data.modules.forEach(module => {
    if (module.messages) {
      for (const lang in module.messages) {
        const moduleMessages = {
          [module.id]: module.messages[lang]
        }
        i18n.add(moduleMessages, lang)
      }
    }
  })
}
