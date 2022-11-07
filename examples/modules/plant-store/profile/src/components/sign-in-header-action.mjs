import { ExtensionBuilder } from '../util/extension-builder.mjs'
import { storeNames } from '../util/constants.mjs'

export function createSignInHeaderAction ({ html, getAppState, getRouter, renderer }) {
  return ExtensionBuilder
    .newInstance()
    .withStore(getAppState(storeNames.ACCOUNT))
    .create({
      renderer,
      handleClick () {
        const router = getRouter()
        router.push('/profile/sign-in')
      },
      render () {
        return html`
          <button type="button" class="text-gray-400 hover:text-gray-500" onclick=${this.handleClick}>Sign In</button>
        `
      }
    })
}
