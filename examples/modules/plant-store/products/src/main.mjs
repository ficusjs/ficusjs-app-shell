import { createRoutes } from './routes/create-routes.mjs'
import { createMessages } from './messages/create-messages.mjs'

export const module = {
  async create (helpers) {
    createRoutes(helpers)
    await createMessages(helpers)
  }
}
