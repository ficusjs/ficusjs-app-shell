import { createRoutes } from './routes/create-routes.mjs'
import { createMessages } from './messages/create-messages.mjs'
import { createBasketStore } from './store/basket.mjs'
import { createComponents } from './components/create-components.mjs'

export const module = {
  async create (helpers) {
    createRoutes(helpers)
    createBasketStore(helpers)
    createComponents(helpers)
    await createMessages(helpers)
  }
}
