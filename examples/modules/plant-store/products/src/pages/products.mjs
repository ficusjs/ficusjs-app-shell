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

export function createProductsPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n, getEventBus } = helpers
  createCustomElement(
    'products-page',
    ExtensionBuilder
      .newInstance()
      .withStore({
        layout: getAppState(storeNames.LAYOUT),
        categories: getAppState(storeNames.CATEGORIES)
      })
      .withI18n(getI18n())
      .withEventBus(getEventBus())
      .create({
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('products.pageTitle') : 'Products'
          }
        },
        addItemToBasket (item) {
          this.eventBus.publish('add-item-to-basket', item)
        },
        removeItemFromBasket (item) {
          this.eventBus.publish('remove-item-from-basket', item.id)
        },
        mounted () {
          this.store.layout.setPageTitle(this.pageTitle)
          this.store.categories.loadCategoriesIfNotLoaded()
        },
        render () {
          return html`
            <fas-page page-title="${this.pageTitle}">
              <div class="flex">
                <article class="block text-center w-1/2">
                  <h2>Categories</h2>
                  <p>Browse product by category</p>
                  ${this.store.categories.getCategories().map(category => html`
                    <div>
                      <span>${category.title}</span>
                    </div>
                  `)}
                </article>
                <article class="block text-center w-1/2">
                  <h2>Products</h2>
                  <p>Browse all products</p>
                  <button type="button" onclick="${() => this.addItemToBasket(plant1)}">
                    Add Plant 1
                  </button>
                  <button type="button" onclick="${() => this.addItemToBasket(plant2)}">
                    Add Plant 2
                  </button>
                  <br>
                  <button type="button" onclick="${() => this.removeItemFromBasket(plant1)}">
                    Remove Plant 1
                  </button>
                  <button type="button" onclick="${() => this.removeItemFromBasket(plant2)}">
                    Remove Plant 2
                  </button>
                </article>
              </div>
            </fas-page>
          `
        }
      })
  )
}
