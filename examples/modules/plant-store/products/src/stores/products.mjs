import { storeNames } from '../util/constants.mjs'
import { httpGet } from '../util/http.mjs'
export function createProductsStore ({ createAppState }) {
  createAppState(storeNames.PRODUCTS, {
    initialState: {
      products: {
        loaded: false,
        data: null
      },
      error: null
    },
    loadProductsIfNotLoaded () {
      return !this.state.products.loaded ? this.loadProducts() : Promise.resolve()
    },
    loadProducts () {
      return httpGet('/api/products.json', {
        'Content-type': 'application/json'
      })
        .then(res => this.setState(state => ({ ...state, products: { ...state.products, loaded: true, data: res.data } })))
    },
    getProducts () {
      return this.state.products.data || []
    }
  })
}
