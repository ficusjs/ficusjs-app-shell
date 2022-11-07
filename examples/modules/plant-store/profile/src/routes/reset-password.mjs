export function getResetPasswordRoute (helpers) {
  return {
    path: '/profile/reset-password',
    action () {
      return import('../pages/reset-password.mjs')
        .then(({ createResetPasswordPage }) => createResetPasswordPage(helpers))
        .then(() => 'profile-reset-password-page')
    }
  }
}
