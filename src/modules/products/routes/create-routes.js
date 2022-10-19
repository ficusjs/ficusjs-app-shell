import { getProductsRoute } from './products.js'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getProductsRoute(helpers)
  ])
}
