/* global HTMLElement */
const appShellTagName = 'fas-app-shell'
const desktopAppShellTagName = 'fas-desktop-app-shell'
const mobileAppShellTagName = 'fas-mobile-app-shell'

class FicusAppShell extends HTMLElement {
  connectedCallback () {
    if (!this.classList.contains(appShellTagName)) {
      this.classList.add(appShellTagName)

      // perform a media query on the screen width to determine whether to write out the mobile or desktop app shell component
      const mql = window.matchMedia(getDesktopMediaQuery())
      const media = mql.matches ? 'desktop' : 'mobile'

      // append the app shell component
      this.appendChild(elementFromString(`<fas-${media}-app-shell></fas-${media}-app-shell>`))

      // add a loader for the UI components
      const script = createScript(`/app-ui-${media}/main.mjs`, { type: 'module' })
      document.body.appendChild(script)
    }
  }
}

class FicusMobileAppShell extends HTMLElement {
  connectedCallback () {
    if (!this.classList.contains(mobileAppShellTagName)) {
      this.classList.add(mobileAppShellTagName)
      this.appendChild(elementFromString('<div><fas-mobile-header></fas-mobile-header><fas-mobile-nav></fas-mobile-nav><main id="router-outlet"></main><fas-mobile-footer></fas-mobile-footer></div>'))
    }
  }
}

class FicusDesktopAppShell extends HTMLElement {
  connectedCallback () {
    if (!this.classList.contains(desktopAppShellTagName)) {
      this.classList.add(desktopAppShellTagName)
      this.appendChild(elementFromString('<div><fas-desktop-header></fas-desktop-header><fas-desktop-nav></fas-desktop-nav><main><div id="router-outlet"></div><fas-desktop-aside></fas-desktop-aside></main><fas-desktop-footer></fas-desktop-footer></div>'))
    }
  }
}

function getDesktopMediaQuery () {
  return window.ficusAppShell && window.ficusAppShell.desktopMediaQuery
    ? window.ficusAppShell.desktopMediaQuery
    : '(min-width: 1280px)'
}

function elementFromString (html) {
  const div = document.createElement('div')
  div.innerHTML = html.trim()
  return div.firstChild
}

function createScript (url, attributes = null) {
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', url)
  setAttributes(script, attributes)
  return script
}

function setAttributes (element, attributes) {
  if (attributes) {
    Object.keys(attributes).forEach(k => {
      element.setAttribute(k, attributes[k])
    })
  }
}

export function createAppComponent () {
  // register the root app component
  window.customElements.get(appShellTagName) || window.customElements.define(appShellTagName, FicusAppShell)

  // register the mobile shell component
  window.customElements.get(mobileAppShellTagName) || window.customElements.define(mobileAppShellTagName, FicusMobileAppShell)

  // register the desktop shell component
  window.customElements.get(desktopAppShellTagName) || window.customElements.define(desktopAppShellTagName, FicusDesktopAppShell)
}
