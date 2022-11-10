import { httpGet } from '../util/http.mjs'

export async function createMessages (helpers) {
  const { getI18n } = helpers
  const i18n = getI18n()
  const messages = await httpGet('/modules/profile/messages.json', {
    'Content-type': 'application/json'
  })
  for (const lang in messages) {
    const moduleMessages = {
      profile: messages[lang]
    }
    i18n.add(moduleMessages, lang)
  }
}
