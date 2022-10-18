import { getBasketRoute } from './basket.mjs'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getBasketRoute(helpers)
  ])
}
