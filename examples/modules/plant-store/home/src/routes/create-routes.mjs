import { getHomeRoute } from './home.mjs'

export function createRoutes (helpers) {
  const { getRouter } = helpers
  const router = getRouter()
  router.addRoutes([
    getHomeRoute(helpers)
  ])
}
