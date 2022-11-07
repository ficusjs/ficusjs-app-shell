import { createFooter } from './footer.js'
import { createHeader } from './header.js'
import { createNav } from './nav.js'
import { createPage } from '../../util/page.js'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('fas-mobile-footer', createFooter(helpers))
  createCustomElement('fas-mobile-header', createHeader(helpers))
  createCustomElement('fas-mobile-nav', createNav(helpers))
  createCustomElement('fas-page', createPage(helpers))
}
