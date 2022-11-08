import { storeNames } from '../util/constants.mjs'
import { ExtensionBuilder } from '../util/extension-builder.mjs'

export function createForgotPasswordPage (helpers) {
  const { createCustomElement, html, renderer, getAppState, getI18n } = helpers
  createCustomElement(
    'profile-forgot-password-page',
    ExtensionBuilder
      .newInstance()
      .withStore(getAppState(storeNames.LAYOUT))
      .withI18n(getI18n())
      .create({
        renderer,
        computed: {
          pageTitle () {
            return this.i18n ? this.i18n.t('profile.forgotPassword.pageTitle') : 'Profile forgot your password'
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
}
