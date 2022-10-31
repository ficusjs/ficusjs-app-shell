import { storeNames } from '../util/constants.mjs'

export function createBasketPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n, withStore, withI18n } = helpers
  createCustomElement(
    'basket-page',
    withStore(getAppState(storeNames.LAYOUT),
      withI18n(getI18n(), {
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('basket.pageTitle') : 'Basket'
          }
        },
        mounted () {
          this.store.setPageTitle(this.pageTitle)
        },
        render () {
          return html`
            <section>
              <h1>${this.pageTitle}</h1>
              <button type="button" class="btn-primary">Button</button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisl eget lacus maximus tincidunt. Mauris at viverra neque. Aenean vulputate orci id convallis gravida.</p>
            </section>
          `
        }
      })
    )
  )
}
