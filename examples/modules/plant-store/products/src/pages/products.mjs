import { storeNames } from '../util/constants.mjs'
import { ExtensionBuilder } from '../util/extension-builder.mjs'

export function createProductsPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n } = helpers
  createCustomElement(
    'products-page',
    ExtensionBuilder
      .newInstance()
      .withStore({
        layout: getAppState(storeNames.LAYOUT),
        categories: getAppState(storeNames.CATEGORIES)
      })
      .withI18n(getI18n())
      .create({
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('products.pageTitle') : 'Products'
          }
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
                </article>
              </div>
            </fas-page>
          `
        }
      })
  )
}
