import { storeNames } from '../util/constants.mjs'
import { ExtensionBuilder } from '../util/extension-builder.mjs'

export function createCategoriesPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n } = helpers
  createCustomElement(
    'product-categories-page',
    ExtensionBuilder
      .newInstance()
      .withStore({
        layout: getAppState(storeNames.LAYOUT),
        categories: getAppState(storeNames.CATEGORIES)
      })
      .withI18n(getI18n)
      .create({
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('products.categories.pageTitle') : 'Categories'
          }
        },
        mounted () {
          this.store.layout.setPageTitle(this.pageTitle)
          this.store.categories.loadCategoriesIfNotLoaded()
        },
        render () {
          return html`
            <fas-page page-title="${this.pageTitle}">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisl eget lacus maximus tincidunt. Mauris at viverra neque. Aenean vulputate orci id convallis gravida.</p>
            </fas-page>
          `
        }
      })
  )
}
