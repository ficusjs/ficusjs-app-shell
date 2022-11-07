import { storeNames } from '../util/constants.mjs'

export function createSignInPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n, withStore, withI18n } = helpers
  createCustomElement(
    'profile-sign-in-page',
    withStore(getAppState(storeNames.LAYOUT),
      withI18n(getI18n(), {
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('profile.signIn.pageTitle') : 'Profile sign-in'
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
