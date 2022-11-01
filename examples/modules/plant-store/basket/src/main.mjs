import { createRoutes } from "./routes/create-routes.mjs";
import { createMessages } from "./messages/create-messages.mjs";
import { createBasketStore } from "./store/basket";

export const module = {
  async create(helpers) {
    createRoutes(helpers);
    await createMessages(helpers);
    createBasketStore(helpers);
  },
};
