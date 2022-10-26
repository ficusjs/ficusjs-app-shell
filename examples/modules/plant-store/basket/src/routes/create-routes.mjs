import { getBasketRoute } from './basket.mjs'

export function createRoutes (helpers) {
  const { getRouter } = helpers
  const router = getRouter()
  router.addRoutes([
    getBasketRoute(helpers)
  ])
}
