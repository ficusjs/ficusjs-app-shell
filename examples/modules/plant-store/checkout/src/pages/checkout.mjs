import { storeNames } from '../util/constants.mjs'
import { ExtensionBuilder } from '../util/extension-builder.mjs'

export function createCheckoutPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n } = helpers
  createCustomElement(
    'checkout-page',
    ExtensionBuilder
      .newInstance()
      .withStore({ layout: getAppState(storeNames.LAYOUT), basket: getAppState(storeNames.BASKET) })
      .withI18n(getI18n())
      .create({
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('checkout.pageTitle') : 'Checkout'
          },
          basketTotal () {
            return this.store.basket.getBasketTotal()
          }
        },
        mounted () {
          this.store.layout.setPageTitle(this.pageTitle)
        },
        render () {
          return html`
            <fas-page page-title="${this.pageTitle}">
              <div>
                <h3 class="text-2xl mb-8">${this.i18n ? this.i18n.t('checkout.summary') : 'Order Summary'}</h3>
                ${this.store.basket.getBasketContentInfo().map(
                  (item) => html`<checkout-item item-count="${item.count}" .item="${item.info}"></checkout-item>`
                )}
              </div>
              <p>Shipping costs = $15</p>
              <p>Total = $${this.basketTotal + 15}</p>
            </fas-page>
          `
        }
      })
  )
}
