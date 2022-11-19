import { storeNames } from '../util/constants.mjs'

export function createBasketStore ({ createAppState }) {
  createAppState(storeNames.BASKET, {
    initialState: {
      basketContents: []
    },
    addToBasket (plant) {
      this.state.basketContents = [...this.state.basketContents, plant]
    },
    removeFromBasket (plantId) {
      const index = this.state.basketContents.map(plant => plant.id).lastIndexOf(plantId)
      this.state.basketContents = [...this.state.basketContents.slice(0, index), ...this.state.basketContents.slice(index + 1)]
    },
    getBasketContentInfo () {
      const basketContentInfo = {}
      this.state.basketContents.forEach(plant => {
        if (!basketContentInfo[plant.id]) {
          basketContentInfo[plant.id] = {
            count: 1,
            info: plant
          }
        } else {
          basketContentInfo[plant.id].count += 1
        }
      })
      return Object.keys(basketContentInfo).map(key => basketContentInfo[key])
    },
    getBasketTotal () {
      const items = this.state.basketContents
      return items.length
        ? items.reduce((acc, item) => {
            return Number(acc) + Number(item.price)
          }, 0)
        : 0
    }
  })
}
