import { storeNames } from '../../shared/store-names.mjs'

export function createHomePage (helpers) {
  const { createCustomElement, html, renderer, getAppState, withStore } = helpers
  createCustomElement(
    'module-one-home-page',
    withStore(getAppState(storeNames.LAYOUT), {
      renderer,
      computed: {
        pageTitle () {
          return 'Module one'
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
}
