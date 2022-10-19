import { createRoutes } from './routes/create-routes.js'

export const module = {
  create (helpers) {
    createRoutes(helpers)
  }
}
