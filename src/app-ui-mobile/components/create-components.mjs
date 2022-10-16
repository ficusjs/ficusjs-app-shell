import { createFooter } from './footer.mjs'
import { createHeader } from './header.mjs'
import { createNav } from './nav.mjs'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('fas-mobile-footer', createFooter(helpers))
  createCustomElement('fas-mobile-header', createHeader(helpers))
  createCustomElement('fas-mobile-nav', createNav(helpers))
}
