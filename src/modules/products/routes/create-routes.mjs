import { getProductsRoute } from './products.mjs'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getProductsRoute(helpers)
  ])
}
