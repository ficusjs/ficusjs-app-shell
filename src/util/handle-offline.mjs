// @ts-nocheck
import { eventNames } from './event-names.mjs'

function showOffline () {
  const page = document.querySelector(window.ficusAppShellAppTag)
  if (page) {
    page.style.display = 'none'
  }
  let offlinePage = document.querySelector('example-offline')
  if (!offlinePage) {
    offlinePage = document.createElement('example-offline')
    document.body.appendChild(offlinePage)
  }
  offlinePage.style.display = 'block'
}

function showOnline () {
  const offlinePage = document.querySelector('example-offline')
  if (offlinePage) {
    offlinePage.style.display = 'none'
  }
  const page = document.querySelector('example-app')
  if (page) {
    page.style.display = 'block'
  }
}

export function handleOffline (getEvents) {
  const events = getEvents()
  events.subscribe(eventNames.FICUS_APP_SHELL_IS_OFFLINE, () => {
    showOffline()
  })
  window.addEventListener('offline', () => {
    showOffline()
    events.publish(eventNames.FICUS_APP_SHELL_OFFLINE)
  })
  window.addEventListener('online', () => {
    showOnline()
    events.publish(eventNames.FICUS_APP_SHELL_ONLINE)
  })
  if (!navigator.onLine) {
    showOffline()
  }
}
