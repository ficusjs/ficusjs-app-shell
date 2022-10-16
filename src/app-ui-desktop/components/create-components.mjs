import { createAside } from './aside.mjs'
import { createFooter } from './footer.mjs'
import { createHeader } from './header.mjs'
import { createNav } from './nav.mjs'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('fas-desktop-aside', createAside(helpers))
  createCustomElement('fas-desktop-footer', createFooter(helpers))
  createCustomElement('fas-desktop-header', createHeader(helpers))
  createCustomElement('fas-desktop-nav', createNav(helpers))
}
