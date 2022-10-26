import { getPrototypeRoute } from './prototype.js'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getPrototypeRoute(helpers)
  ])
}
