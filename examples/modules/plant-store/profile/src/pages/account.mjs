import { storeNames } from '../util/constants.mjs'

export function createAccountPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n, withStore, withI18n } = helpers
  createCustomElement(
    'profile-account-page',
    withStore(getAppState(storeNames.LAYOUT),
      withI18n(getI18n(), {
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('profile.account.pageTitle') : 'Profile account'
          }
        },
        mounted () {
          this.store.setPageTitle(this.pageTitle)
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
  )
}
