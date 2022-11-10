import { createSignInHeaderAction } from './sign-in-header-action.mjs'
import { createAccountHeaderAction } from './account-header-action.mjs'

export function createComponents (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('profile-sign-in-header-action', createSignInHeaderAction(helpers))
  createCustomElement('profile-account-header-action', createAccountHeaderAction(helpers))
}
