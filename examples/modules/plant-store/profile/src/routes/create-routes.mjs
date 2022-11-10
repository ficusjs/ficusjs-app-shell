import { getSignInRoute } from './sign-in.mjs'
import { getSignUpRoute } from './sign-up.mjs'
import { getForgotPasswordRoute } from './forgot-password.mjs'
import { getResetPasswordRoute } from './reset-password.mjs'
import { getAccountRoute } from './account.mjs'

export function createRoutes (helpers) {
  const { getRouter } = helpers
  const router = getRouter()
  router.addRoutes([
    getSignInRoute(helpers),
    getSignUpRoute(helpers),
    getForgotPasswordRoute(helpers),
    getResetPasswordRoute(helpers),
    getAccountRoute(helpers)
  ])
}
