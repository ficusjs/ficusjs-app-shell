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
        if (mql.matches) {
          this._loadDesktopUi()
        } else {
          this._loadMobileUi()
        }
        
        if (config.breakpointReactive) {
          mql.addEventListener('change', this._listener.bind(this))
        }
      }
    }
    
    _listener (e) {
      if (e.matches) {
        this._loadDesktopUi()
      } else {
        this._loadMobileUi()
      }
    }

    _loadDesktopUi () {
      this._performLoad(config.desktopUiTagName, config.desktopUiScriptUrl)
    }

    _loadMobileUi () {
      this._performLoad(config.mobileUiTagName, config.mobileUiScriptUrl)
    }
    
    _performLoad (tagName, scriptUrl) {
      if (this.children.length === 1) {
        this.removeChild(this.children[0])
      }
      this.appendChild(elementFromString(`<${tagName}></${tagName}>`))
      loadResource({ url: scriptUrl, is: 'script', attributes: { type: 'module' } })
        .catch(e => console.error(e))
    }
  }

  class FicusMobileAppShell extends HTMLElement {
    connectedCallback () {
      if (!this.classList.contains(config.mobileUiTagName)) {
        this.classList.add(config.mobileUiTagName)
        this.appendChild(config.mobileHTML)
      }
    }
  }

  class FicusDesktopAppShell extends HTMLElement {
    connectedCallback () {
      if (!this.classList.contains(config.desktopUiTagName)) {
        this.classList.add(config.desktopUiTagName)
        this.appendChild(config.desktopHTML)
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

function createLoader (options) {
  const defaultConfig = {
    // root app tag
    appTagName: 'fas-app',

    // breakpoint at which to switch from mobile to desktop
    desktopMediaQuery: '(min-width: 1280px)',

    // should the breakpoint be reactive on resize?
    breakpointReactive: false,

    // desktop shell ui components
    desktopUiTagName: 'fas-ui-desktop',
    desktopUiScriptUrl: '/app-ui-desktop/main.js',
    desktopHTML: html`<div>
      <fas-desktop-header></fas-desktop-header>
      <main>
        <div id="router-outlet"></div>
        <fas-desktop-aside></fas-desktop-aside>
      </main>
      <fas-desktop-footer></fas-desktop-footer>
    </div>`,

    // mobile shell ui components
    mobileUiTagName: 'fas-ui-mobile',
    mobileUiScriptUrl: '/app-ui-mobile/main.js',
    mobileHTML: html`<div>
      <fas-mobile-header></fas-mobile-header>
      <fas-mobile-nav></fas-mobile-nav>
      <main id="router-outlet"></main>
      <fas-mobile-footer></fas-mobile-footer>
    </div>`
  }
  const config = { ...defaultConfig, ...options }
  createComponents(config)
}

export { createLoader, html }
