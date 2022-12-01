import { ExtensionBuilder } from '../util/extension-builder.mjs'
import { storeNames } from '../util/constants.mjs'

export function createBasketItem ({ html, getAppState, renderer, getI18n }) {
  return ExtensionBuilder
    .newInstance()
    .withStore(getAppState(storeNames.BASKET))
    .withI18n(getI18n())
    .create({
      renderer,
      props: {
        item: {
          type: Object
        },
        itemCount: {
          type: Number
        }
      },
      computed: {
        basketItem () {
          return this.props.item
        },
        count () {
          return this.props.itemCount
        }
      },
      removeFromBasket () {
        this.store.removeFromBasket(this.basketItem.id)
      },
      addToBasket () {
        this.store.addToBasket(this.basketItem)
      },
      currency (amount) {
        return this.i18n ? this.i18n.t('basket.currency', { amount }) : 'GBP'
      },
      render () {
        return html`
          <article class="flex">
            <div class="h-64 p-6 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
              <img src="${this.basketItem.image_url}" alt="" class="h-full max-w-full object-cover object-center">
            </div>
            <div class="p-6">
              <p>${this.basketItem.name}</p>
              <p>${this.basketItem.description}</p>
              <p>${this.currency(this.basketItem.price)}</p>
            </div>
            <div class="p-6">
              <button type="button" onclick="${this.addToBasket}" class="inline-block px-3 py-1.5 text-lg bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                +
              </button>
              <span class="text-lg px-4">${this.count}</span>
              <button type="button" onclick="${this.removeFromBasket}" class="inline-block px-3 py-1.5 text-lg bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                -
              </button>
            </div>
          </article>
        `
      }
    })
}
