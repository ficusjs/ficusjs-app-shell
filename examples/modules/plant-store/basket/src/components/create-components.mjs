import { createBasketItem } from './basket-item.mjs'
import { createBasketTotal } from './basket-total.mjs'
import { createBasketHeaderAction } from './basket-header-action.mjs'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('basket-item', createBasketItem(helpers))
  createCustomElement('basket-total', createBasketTotal(helpers))
  createCustomElement('basket-header-action', createBasketHeaderAction(helpers))
}
