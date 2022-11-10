export function getForgotPasswordRoute (helpers) {
  return {
    path: '/profile/forgot-password',
    action () {
      return import('../pages/forgot-password.mjs')
        .then(({ createForgotPasswordPage }) => createForgotPasswordPage(helpers))
        .then(() => 'profile-forgot-password-page')
    }
  }
}
