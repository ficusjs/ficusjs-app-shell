import { httpGet } from '../../shared/http.js'

export async function createMessages (helpers) {
  const { getI18n } = helpers
  const i18n = getI18n()
  const messages = await httpGet('/modules/prototype/messages.json', {
    'Content-type': 'application/json'
  })
  for (const lang in messages) {
    const moduleMessages = {
      home: messages[lang]
    }
    i18n.add(moduleMessages, lang)
  }
}
