import { createProductsHeaderAction } from './products-header-action.mjs'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('products-header-action', createProductsHeaderAction(helpers))
}