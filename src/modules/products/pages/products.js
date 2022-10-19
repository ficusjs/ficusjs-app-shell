import { storeNames } from '../../shared/constants.js'

export function createProductsPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n, withStore, withI18n } = helpers
  createCustomElement(
    'products-page',
    withStore(getAppState(storeNames.LAYOUT),
      withI18n(getI18n(), {
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('products.pageTitle') : 'Products'
          }
        },
        mounted () {
          this.store.setPageTitle(this.pageTitle)
        },
        render () {
          return html`
            <section>
              <h1>${this.pageTitle}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisl eget lacus maximus tincidunt. Mauris at viverra neque. Aenean vulputate orci id convallis gravida.</p>
            </section>
          `
        }
      })
    )
  )
}
