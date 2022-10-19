import { createRoutes } from './routes/create-routes.js'
import { createMessages } from './messages/create-messages.js'

export const module = {
  async create (helpers) {
    createRoutes(helpers)
    await createMessages(helpers)
  }
}
