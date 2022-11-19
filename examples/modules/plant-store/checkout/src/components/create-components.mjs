import { createCheckoutItem } from './checkout-item.mjs'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('checkout-item', createCheckoutItem(helpers))
}
