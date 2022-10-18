import { getCheckoutRoute } from './checkout.mjs'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getCheckoutRoute(helpers)
  ])
}
