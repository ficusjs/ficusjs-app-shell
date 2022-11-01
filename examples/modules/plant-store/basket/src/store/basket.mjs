import { storeNames } from "../util/constants.mjs";

export function createBasketStore({ createAppState }) {
  createAppState(storeNames.BASKET, {
    initialState: {
      basketContents: [],
    },
    addToBasket(plant) {
      this.state.basketContents.push(plant);
    },
    removeFromBasket(plantId) {
      const plantRemoved = this.state.basketContents.filter(
        (plant) => plant.id !== plantId
      );
      this.setState(() => ({ basketContents: plantRemoved }));
    },
  });
}
