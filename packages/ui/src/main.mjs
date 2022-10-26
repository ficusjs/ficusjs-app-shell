// @ts-nocheck
/* global HTMLElement */
import { loadResource } from '@ficusjs/resource-loader'

function html (strings) {
  return elementFromString(strings.raw[0])
}

function elementFromString (html) {
  const div = document.createElement('div')
  div.innerHTML = html.trim()
  return div.firstChild
}

function createComponents (config) {
  class FicusAppShell extends HTMLElement {
    connectedCallback () {
      if (!this.classList.contains(config.appTagName)) {
        this.classList.add(config.appTagName)

        // perform a media query on the screen width to determine whether to write out the mobile or desktop app shell component
        const mql = window.matchMedia(config.desktopMediaQuery)
        let tagName = config.mobileUiTagName
        let scriptUrl = config.mobileUiScriptUrl
        if (mql.matches) {
          tagName = config.desktopUiTagName
          scriptUrl = config.desktopUiScriptUrl
        }

        // append the app shell component
        this.appendChild(elementFromString(`<${tagName}></${tagName}>`))

        // append the script to load the app shell UI components
        loadResource({ url: scriptUrl, is: 'script', attributes: { type: 'module' } })
      }
    }
  }

  class FicusMobileAppShell extends HTMLElement {
    connectedCallback () {
      if (!this.classList.contains(config.mobileUiTagName)) {
        this.classList.add(config.mobileUiTagName)
        this.appendChild(html`<div>
          <fas-mobile-header></fas-mobile-header>
          <fas-mobile-nav></fas-mobile-nav>
          <main id="router-outlet"></main>
          <fas-mobile-footer></fas-mobile-footer>
        </div>`)
      }
    }
  }

  class FicusDesktopAppShell extends HTMLElement {
    connectedCallback () {
      if (!this.classList.contains(config.desktopUiTagName)) {
        this.classList.add(config.desktopUiTagName)
        this.appendChild(html`<div>
          <fas-desktop-header></fas-desktop-header>
          <fas-desktop-nav></fas-desktop-nav>
          <main>
            <div id="router-outlet"></div>
            <fas-desktop-aside></fas-desktop-aside>
          </main>
          <fas-desktop-footer></fas-desktop-footer>
        </div>`)
      }
    }
  }

  // register the root app component
  window.customElements.get(config.appTagName) || window.customElements.define(config.appTagName, FicusAppShell)

  // register the mobile shell component
  window.customElements.get(config.mobileUiTagName) || window.customElements.define(config.mobileUiTagName, FicusMobileAppShell)

  // register the desktop shell component
  window.customElements.get(config.desktopUiTagName) || window.customElements.define(config.desktopUiTagName, FicusDesktopAppShell)
}

export function createAppShellComponents (options) {
  const defaultConfig = {
    // root app tag
    appTagName: 'fas-app',

    // breakpoint at which to switch from mobile to desktop
    desktopMediaQuery: '(min-width: 1280px)',

    // should the breakpoint be reactive on resize?
    reactive: false,

    // desktop shell ui components
    desktopUiTagName: 'fas-ui-desktop',
    desktopUiScriptUrl: '/app-ui-desktop/main.mjs',

    // mobile shell ui components
    mobileUiTagName: 'fas-ui-mobile',
    mobileUiScriptUrl: '/app-ui-mobile/main.mjs'
  }
  const config = { ...defaultConfig, ...options }
  createComponents(config)
}
