import { getHomeRoute } from './home.js'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getHomeRoute(helpers)
  ])
}
