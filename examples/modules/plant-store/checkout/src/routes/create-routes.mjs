import { getCheckoutRoute } from './checkout.mjs'

export function createRoutes (helpers) {
  const { getRouter } = helpers
  const router = getRouter()
  router.addRoutes([
    getCheckoutRoute(helpers)
  ])
}
