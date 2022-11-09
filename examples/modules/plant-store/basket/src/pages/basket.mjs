import { storeNames } from '../util/constants.mjs'
import { ExtensionBuilder } from '../util/extension-builder.mjs'

export function createBasketPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n } = helpers
  createCustomElement(
    'basket-page',
    ExtensionBuilder
      .newInstance()
      .withStore({ layout: getAppState(storeNames.LAYOUT), basket: getAppState(storeNames.BASKET) })
      .withI18n(getI18n())
      .create({
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('basket.pageTitle') : 'Basket'
          }
        },
        mounted () {
          this.store.layout.setPageTitle(this.pageTitle)
        },
        render () {
          return html`
            <fas-page page-title="${this.pageTitle}">
              <div>
                ${this.store.basket.state.basketContents.map(
                  (item) => html` <basket-item .item="${item}"></basket-item>`
                )}
              </div>
              <basket-total></basket-total>
            </fas-page>
          `
        }
      })
  )
}
