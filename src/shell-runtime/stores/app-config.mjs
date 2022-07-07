import * as helpers from '../util/shell-runtime.mjs'
import { storeNames } from './constants.mjs'
import { httpGet } from '../util/http.mjs'
import { use } from '../util/module.mjs'

helpers.createAppState(storeNames.APP_CONFIG, {
  initialState: {
    appConfig: {
      loaded: false,
      data: null,
      modules: null
    },
    error: null
  },
  loadAppConfigIfNotLoaded (url) {
    return !this.state.appConfig.loaded ? this.loadAppConfig(url) : Promise.resolve()
  },
  loadAppConfig (url) {
    const that = this
    return new Promise((resolve, reject) => {
      httpGet(url, {
        'Content-type': 'application/json'
      })
        .then(data => that.loadConfigModules(data))
        .then(data => {
          that.setState(state => ({ ...state, appConfig: { ...state.appConfig, loaded: true, data } }))
          resolve()
        })
        .catch(e => reject(e))
    })
  },
  getModuleUrlByLocation (url) {
    const module = this.state.appConfig.data.modules.find(m => m.routes.includes(url))
    return module ? module.moduleUrl : undefined
  },
  loadConfigModules (appConfig) {
    return Promise.all(
      appConfig.modules.map(module => this.loadModule(module.moduleUrl))
    ).then(() => {
      return Promise.resolve(appConfig)
    })
  },
  loadModule (url) {
    return import(/* @vite-ignore */url)
      .then(m => {
        use(m.module, helpers)
      })
  }
})
