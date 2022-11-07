export function getSignInRoute (helpers) {
  return {
    path: '/profile/sign-in',
    action () {
      return import('../pages/sign-in.mjs')
        .then(({ createSignInPage }) => createSignInPage(helpers))
        .then(() => 'profile-sign-in-page')
    }
  }
}
