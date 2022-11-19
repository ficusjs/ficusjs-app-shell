import { ExtensionBuilder } from '../util/extension-builder.mjs'

export function createCheckoutItem ({ html, renderer, getI18n }) {
  return ExtensionBuilder
    .newInstance()
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
      render () {
        return html`
          <article>
            <div class="flex">
              <div class="h-16 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                <img src="${this.basketItem.image_url}" alt="" class="h-full w-full object-cover object-center">
              </div>
              <div class="flex">
                <p>${this.basketItem.name}</p>
                <p class="ml-2">${this.basketItem.price}$</p>
                <p class="ml-2">amount: ${this.count}</p>
            </div>
          </article>
          `
      }
    })
}
