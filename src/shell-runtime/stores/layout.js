import { createAppState, createPersist } from '../util/shell-runtime.js'
import { storeNames } from './constants.js'

createAppState(storeNames.LAYOUT, {
  initialState: {
    layout: {
      appbar: true,
      navigation: true
    },
    appTitle: null,
    appVersion: null,
    pageTitle: {
      loading: true,
      title: null,
      subtitle: null
    }
  },
  persist: createPersist(storeNames.LAYOUT, 'local'),
  setPageTitle (title) {
    document.title = title
  }
})
