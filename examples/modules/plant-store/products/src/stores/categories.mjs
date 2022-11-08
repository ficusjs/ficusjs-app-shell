import { storeNames } from '../util/constants.mjs'
import { httpGet } from '../util/http.mjs'

export function createCategoriesStore ({ createAppState }) {
  createAppState(storeNames.CATEGORIES, {
    initialState: {
      categories: {
        loaded: false,
        data: null
      },
      error: null
    },
    loadCategoriesIfNotLoaded () {
      return !this.state.categories.loaded ? this.loadCategories() : Promise.resolve()
    },
    loadCategories () {
      return httpGet('/api/categories.json', {
        'Content-type': 'application/json'
      })
        .then(res => this.setState(state => ({ ...state, categories: { ...state.categories, loaded: true, data: res.data } })))
    },
    getCategories () {
      return this.state.categories.data || []
    }
  })
}
