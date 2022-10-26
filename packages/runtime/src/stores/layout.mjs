import { createAppState, createPersist } from '../util/shell-runtime.mjs'
import { storeNames } from './constants.mjs'

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
