// @ts-nocheck
import * as helpers from '../util/shell-runtime.js'
import { storeNames } from './constants.js'
import { httpGet } from '../util/http.js'
import { use } from '../util/module.js'
import { mapRoutesForModules } from '../util/map-routes-for-modules.js'

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
          that.setState(state => ({ ...state, appConfig: { ...state.appConfig, loaded: true, data: mapRoutesForModules(data) } }))
          resolve()
        })
        .catch(e => reject(e))
    })
  },
  getModuleUrlByLocation (url) {
    const module = this.state.appConfig.data.modules.find(m => m.routes.find(r => r.matcher(url)))
    return module ? module.moduleUrl : undefined
  },
  hasModuleRoutes () {
    const modules = this.state.appConfig.data.modules.filter(m => m.routes && m.routes.length > 0)
    return modules.length > 0
  },
  hasModuleMessageBundles () {
    const modules = this.state.appConfig.data.modules.filter(m => m.messageBundleUrl)
    return modules.length > 0
  },
  loadConfigModules (appConfig) {
    return Promise.all(
      appConfig.modules.filter(m => m.preload).map(module => this.loadModuleByModuleUrl(module.moduleUrl))
    ).then(() => {
      return Promise.resolve(appConfig)
    })
  },
  loadModuleByModuleUrl (url) {
    const that = this
    const modules = that.state.appConfig.data.modules
    const module = modules.find(m => m.moduleUrl === url)
    return that.loadModule(module)
      .then(() => {
        module.loaded = true
        that.setState(state => ({ ...state, appConfig: { ...state.appConfig, data: { ...state.appConfig.data, modules } } }))
      })
  },
  loadModuleByPath (path) {
    const that = this
    const modules = that.state.appConfig.data.modules
    const module = modules.find(m => m.routes.find(r => r.path === path))
    return that.loadModule(module)
      .then(() => {
        module.loaded = true
        that.setState(state => ({ ...state, appConfig: { ...state.appConfig, data: { ...state.appConfig.data, modules } } }))
      })
  },
  loadModuleByUrl (url) {
    const that = this
    const modules = that.state.appConfig.data.modules
    const module = modules.find(m => m.routes.find(r => r.matcher(url)))
    return that.loadModule(module)
      .then(() => {
        module.loaded = true
        that.setState(state => ({ ...state, appConfig: { ...state.appConfig, data: { ...state.appConfig.data, modules } } }))
      })
  },
  loadModule (module) {
    if (module && module.loaded) {
      return Promise.resolve()
    }
    if (!module) {
      return Promise.reject(new Error('Module not found'))
    }
    return import(/* @vite-ignore */module.moduleUrl)
      .then(m => {
        use(m.module, helpers)
      })
  }
})
