import { createFooter } from './footer.mjs'
import { createHeader } from './header.mjs'
import { createNav } from './nav.mjs'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('example-mobile-footer', createFooter(helpers))
  createCustomElement('example-mobile-header', createHeader(helpers))
  createCustomElement('example-mobile-nav', createNav(helpers))
}
