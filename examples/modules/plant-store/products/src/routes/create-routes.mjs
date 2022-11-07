import { getProductsRoute } from './products.mjs'
import { getSearchRoute } from './search.mjs'

export function createRoutes (helpers) {
  const { getRouter } = helpers
  const router = getRouter()
  router.addRoutes([
    getProductsRoute(helpers),
    getSearchRoute(helpers)
  ])
}
