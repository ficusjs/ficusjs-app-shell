import { ExtensionBuilder } from 'https://cdn.skypack.dev/ficusjs@5'
import { storeNames } from '../util/constants.mjs'

export function createBasketItem ({ html, withStore, getAppState, renderer, getI18n }) {
  return ExtensionBuilder
    .newInstance()
    .withStore(getAppState(storeNames.BASKET))
    .withI18n(getI18n())
    .create({
      renderer,
      props: {
        item: {
          type: Object,
        }
      },
      computed: {
        basketItem () {
          return this.props.item
        }
      },
      removeFromBasket() {
        this.store.removeFromBasket(this.basketItem.id);
      },
      render() {
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
              <div>
                <button onclick="${this.removeFromBasket}">
                  Remove From The Basket
                </button>
              </div>
            </div>
          </article>
          `;
      },
    })
}