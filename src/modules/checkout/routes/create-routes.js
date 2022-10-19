import { getCheckoutRoute } from './checkout.js'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getCheckoutRoute(helpers)
  ])
}
