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
      render () {
        return html`
          <article>
            <div class="flex">
              <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                <img src="${this.basketItem.image_url}" alt="" class="h-full w-full object-cover object-center">
              </div>
              <div>
                <p>${this.basketItem.name}</p>
                <p>${this.basketItem.description}</p>
                <p>${this.basketItem.price}$</p>
              </div>
              <div class="ml-2">
                <button onclick="${this.addToBasket}">
                  Add Amount
                </button>
                <p class="text-2xl">${this.count}</p>
                <button onclick="${this.removeFromBasket}">
                  Decrease Amount
                </button>
              </div>
            </div>
          </article>
          `
      }
    })
}
