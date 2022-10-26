import { getProductsRoute } from './products.mjs'

export function createRoutes (helpers) {
  const { getRouter } = helpers
  const router = getRouter()
  router.addRoutes([
    getProductsRoute(helpers)
  ])
}
