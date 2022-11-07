import { storeNames } from '../util/constants.mjs'
import { ExtensionBuilder } from '../util/extension-builder.mjs'

const plant1 = {
  id: '001',
  name: 'Ficus',
  description: 'Ficus plant',
  price: '20',
  image_url: '/assets/img/home-page-hero-image-tile-04.jpg',
  category: 'home-plants',
  metadata: {
    humidity: '50%',
    temperature: '20',
    watering: '3'
  }
}

const plant2 = {
  id: '002',
  name: 'Lemon',
  description: 'Lemon plant',
  price: '40',
  image_url: '/assets/img/home-page-hero-image-tile-05.jpg',
  category: 'home-plants',
  metadata: {
    humidity: '30%',
    temperature: '30',
    watering: '5'
  }
}

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
        addPlant1 () {
          this.store.basket.addToBasket(plant1)
        },
        addPlant2 () {
          this.store.basket.addToBasket(plant2)
        },
        mounted () {
          this.store.layout.setPageTitle(this.pageTitle)
        },
        render () {
          return html`
            <fas-page page-title="${this.pageTitle}">
              <div>
                <button onclick="${this.addPlant1}">
                  Add Plant 1
                </button>
                <button onclick="${this.addPlant2}">
                  Add Plant 2
                </button>
              </div>
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
