import { ExtensionBuilder } from '../util/extension-builder.mjs'
import { storeNames } from '../util/constants.mjs'

export function createBasketTotal ({ html, getAppState, renderer, getI18n }) {
  return ExtensionBuilder
    .newInstance()
    .withStore(getAppState(storeNames.BASKET))
    .withI18n(getI18n())
    .create({
      renderer,
      computed: {
        basketTotal () {
          const items = this.store.state.basketContents
          return items.length
            ? items.reduce((acc, item) => {
                return Number(acc) + Number(item.price)
              }, 0)
            : 0
        }
      },
      render () {
        return html`
          <section>
            <div>
              <p>Basket Total: ${this.basketTotal} $</p>
              <p>Shipping Costs: 15 $</p>
            </div>
          </section>
          `
      }
    })
}
