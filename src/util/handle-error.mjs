// @ts-nocheck
import { eventNames } from './event-names.mjs'
import { getAppTag } from './get-app-tag.mjs'

function elementFromString (html) {
  const div = document.createElement('div')
  div.innerHTML = html.trim()
  return div.firstChild
}

export function handleError (getEvents) {
  const events = getEvents()
  events.subscribe(eventNames.FICUS_APP_SHELL_ERROR, e => {
    const page = document.querySelector(getAppTag())
    if (page) {
      page.style.display = 'none'
    }
    let errorPage = document.querySelector('fas-page-error')
    if (!errorPage) {
      errorPage = elementFromString(`<fas-page-error logger-error="${e.message}" style="display:none"></fas-page-error>`)
      document.body.appendChild(errorPage)
    }
    let notFoundPage = document.querySelector('fas-page-not-found')
    if (!notFoundPage) {
      notFoundPage = document.createElement('fas-offline')
      notFoundPage.style.display = 'none'
      document.body.appendChild(notFoundPage)
    }
    if (e.status && e.status === 404) {
      notFoundPage.style.display = 'block'
      errorPage.style.display = 'none'
    } else {
      notFoundPage.style.display = 'none'
      errorPage.style.display = 'block'
    }
  })
}
