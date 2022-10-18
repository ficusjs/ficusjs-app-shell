import { createRoutes } from './routes/create-routes.mjs'

export const module = {
  create (helpers) {
    createRoutes(helpers)
  }
}
