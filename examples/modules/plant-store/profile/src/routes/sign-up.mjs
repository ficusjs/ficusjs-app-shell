export function getSignUpRoute (helpers) {
  return {
    path: '/profile/sign-up',
    action () {
      return import('../pages/sign-up.mjs')
        .then(({ createSignUpPage }) => createSignUpPage(helpers))
        .then(() => 'profile-sign-up-page')
    }
  }
}
