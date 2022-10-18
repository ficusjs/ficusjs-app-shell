import { getHomeRoute } from './home.mjs'

export function createRoutes (helpers) {
  const router = helpers.getRouter()
  router.addRoutes([
    getHomeRoute(helpers)
  ])
}
