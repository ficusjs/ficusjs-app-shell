export function getAccountRoute (helpers) {
  return {
    path: '/profile/account',
    action () {
      return import('../pages/account.mjs')
        .then(({ createAccountPage }) => createAccountPage(helpers))
        .then(() => 'profile-account-page')
    }
  }
}
