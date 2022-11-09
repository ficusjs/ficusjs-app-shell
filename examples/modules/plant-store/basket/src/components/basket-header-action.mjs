import { ExtensionBuilder } from '../util/extension-builder.mjs'
import { storeNames } from '../util/constants.mjs'

export function createBasketHeaderAction ({ html, getAppState, getRouter, renderer, getEventBus }) {
  return ExtensionBuilder
    .newInstance()
    .withStore(getAppState(storeNames.BASKET))
    .withEventBus(getEventBus())
    .create({
      renderer,
      computed: {
        basketContent () {
          return this.store.state.basketContents.length
        }
      },
      handleClick () {
        const router = getRouter()
        router.push('/basket')
      },
      created () {
        this.eventBus.subscribe('add-item-to-basket', item => {
          this.store.addToBasket(item)
        })
        this.eventBus.subscribe('remove-item-from-basket', itemId => {
          this.store.removeFromBasket(itemId)
        })
      },
      render () {
        return html`
          <button class="flex items-center" onclick="${this.handleClick}">
            <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
            </svg>
            <span
              class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">${this.basketContent}</span>
            <span class="sr-only">items in cart, view bag</span>
          </button>
          `
      }
    })
}
