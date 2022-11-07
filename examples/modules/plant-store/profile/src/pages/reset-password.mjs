import { storeNames } from '../util/constants.mjs'

export function createResetPasswordPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n, withStore, withI18n } = helpers
  createCustomElement(
    'profile-reset-password-page',
    withStore(getAppState(storeNames.LAYOUT),
      withI18n(getI18n(), {
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('profile.resetPassword.pageTitle') : 'Profile reset your password'
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
