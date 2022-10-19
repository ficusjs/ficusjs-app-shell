import { getBasketRoute } from './basket.js'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getBasketRoute(helpers)
  ])
}
