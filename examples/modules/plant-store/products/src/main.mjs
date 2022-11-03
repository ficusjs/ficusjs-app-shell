import { createRoutes } from './routes/create-routes.mjs'
import { createMessages } from './messages/create-messages.mjs'
import { createComponents } from './components/create-components.mjs'

export const module = {
  async create (helpers) {
    createRoutes(helpers)
    createComponents(helpers)
    await createMessages(helpers)
  }
}
