import { createFooter } from './footer.js'
import { createHeader } from './header.js'
import { createNav } from './nav.js'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('fas-mobile-footer', createFooter(helpers))
  createCustomElement('fas-mobile-header', createHeader(helpers))
  createCustomElement('fas-mobile-nav', createNav(helpers))
}
