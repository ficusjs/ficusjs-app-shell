import { ExtensionBuilder } from '../util/extension-builder.mjs'
import { storeNames } from '../util/constants.mjs'

export function createBasketTotal ({ html, getAppState, renderer, getI18n, getRouter }) {
  return ExtensionBuilder
    .newInstance()
    .withStore({
      basket: getAppState(storeNames.BASKET),
      appConfig: getAppState(storeNames.APP_CONFIG)
    })
    .withI18n(getI18n())
    .create({
      renderer,
      computed: {
        basketTotal () {
          return this.store.basket.getBasketTotal()
        }
      },
      handleClick () {
        const router = getRouter()
        this.store.appConfig.loadModuleByPath('/checkout').then(() => router.push('/checkout'))
      },
      render () {
        return html`
          <section>
            <div class="my-8">
              <p>Basket Total: ${this.basketTotal} $</p>
            </div>
            <button onclick="${() => this.handleClick()}">Go To Checkout</button>
          </section>
          `
      }
    })
}
