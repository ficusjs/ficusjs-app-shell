import { createAside } from './aside.mjs'
import { createFooter } from './footer.mjs'
import { createHeader } from './header.mjs'
import { createNav } from './nav.mjs'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('example-desktop-aside', createAside(helpers))
  createCustomElement('example-desktop-footer', createFooter(helpers))
  createCustomElement('example-desktop-header', createHeader(helpers))
  createCustomElement('example-desktop-nav', createNav(helpers))
}
