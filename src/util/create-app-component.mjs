/* global HTMLElement */
const appTagName = 'example-app'
const desktopAppShellTagName = 'example-desktop-app-shell'
const mobileAppShellTagName = 'example-mobile-app-shell'

class ExampleApp extends HTMLElement {
  connectedCallback () {
    if (!this.classList.contains(appTagName)) {
      this.classList.add(appTagName)

      // perform a media query on the screen width to determine whether to write out the mobile or desktop app shell component
      const mql = window.matchMedia('(min-width: 1280px)')
      const media = mql.matches ? 'desktop' : 'mobile'

      // append the app shell component
      this.appendChild(elementFromString(`<example-${media}-app-shell></example-${media}-app-shell>`))

      // add a loader for the UI components
      const script = createScript(`/app-ui-${media}/main.mjs`, { type: 'module' })
      document.body.appendChild(script)
    }
  }
}

class ExampleMobileAppShell extends HTMLElement {
  connectedCallback () {
    if (!this.classList.contains(mobileAppShellTagName)) {
      this.classList.add(mobileAppShellTagName)
      this.appendChild(elementFromString('<div><example-mobile-header></example-mobile-header><example-mobile-nav></example-mobile-nav><main id="router-outlet"></main><example-mobile-footer></example-mobile-footer></div>'))
    }
  }
}

class ExampleDesktopAppShell extends HTMLElement {
  connectedCallback () {
    if (!this.classList.contains(desktopAppShellTagName)) {
      this.classList.add(desktopAppShellTagName)
      this.appendChild(elementFromString('<div><example-desktop-header></example-desktop-header><example-desktop-nav></example-desktop-nav><main><div id="router-outlet"></div><example-desktop-aside></example-desktop-aside></main><example-desktop-footer></example-desktop-footer></div>'))
    }
  }
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
  window.customElements.get(appTagName) || window.customElements.define(appTagName, ExampleApp)

  // register the mobile shell component
  window.customElements.get(mobileAppShellTagName) || window.customElements.define(mobileAppShellTagName, ExampleMobileAppShell)

  // register the desktop shell component
  window.customElements.get(desktopAppShellTagName) || window.customElements.define(desktopAppShellTagName, ExampleDesktopAppShell)
}
