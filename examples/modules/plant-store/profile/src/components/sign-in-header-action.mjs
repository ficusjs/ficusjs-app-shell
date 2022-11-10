import { ExtensionBuilder } from '../util/extension-builder.mjs'
import { storeNames } from '../util/constants.mjs'

export function createSignInHeaderAction ({ html, getAppState, getRouter, renderer, getI18n }) {
  return ExtensionBuilder
    .newInstance()
    .withStore(getAppState(storeNames.ACCOUNT))
    .withI18n(getI18n())
    .create({
      renderer,
      handleClick () {
        const router = getRouter()
        router.push('/profile/sign-in')
      },
      render () {
        return html`
          <button type="button" class="text-gray-400 hover:text-gray-500" onclick=${this.handleClick}>${this.i18n.t('profile.signIn.buttonText')}</button>
        `
      }
    })
}
