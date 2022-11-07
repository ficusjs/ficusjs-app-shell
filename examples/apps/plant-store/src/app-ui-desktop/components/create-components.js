import { createAside } from './aside.js'
import { createFooter } from './footer.js'
import { createHeader } from './header.js'
import { createNav } from './nav.js'
import { createPage } from '../../util/page.js'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('fas-desktop-aside', createAside(helpers))
  createCustomElement('fas-desktop-footer', createFooter(helpers))
  createCustomElement('fas-desktop-header', createHeader(helpers))
  createCustomElement('fas-desktop-nav', createNav(helpers))
  createCustomElement('fas-page', createPage(helpers))
}
