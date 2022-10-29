// @ts-nocheck
import './stores/index.mjs'
import './i18n.mjs'
import { storeNames } from './stores/constants.mjs'
import { getStartPath } from './util/get-start-path.mjs'
import { router } from './router.mjs'
import {
  addXStateService,
  assign,
  createAppState,
  createCustomElement,
  createMachine,
  createPersist,
  createXStateService,
  getAppState,
  getEventBus,
  getI18n,
  getRouter,
  getXStateService,
  html,
  renderer,
  withI18n,
  withLocalState,
  withStore,
  withXStateService
} from './util/shell-runtime.mjs'

function start (options) {
  const defaultConfig = {
    appTag: 'fas-app',
    breakpointConfig: {
      reactive: true,
      breakpoints: {
        576: { method: 'renderSm' },
        768: { method: 'renderMd' },
        992: { method: 'renderLg' },
        1280: { method: 'renderXl' },
        1440: { method: 'renderXxl' },
        1920: { method: 'renderXxxl' }
      }
    },
    configUrl: '/app-config.json',
    routerOutletSelector: '#router-outlet',
    routerMode: 'hash'
  }
  const runtimeConfig = { ...defaultConfig, ...options }
  window._ficusAppShellRuntime_ = window._ficusAppShellRuntime_ || runtimeConfig
  const appConfigStore = getAppState(storeNames.APP_CONFIG)
  appConfigStore.loadAppConfigIfNotLoaded(runtimeConfig.configUrl)
    .then(() => {
      const startPath = getStartPath()
      const moduleUrl = appConfigStore.getModuleUrlByLocation(startPath)
      moduleUrl
        ? appConfigStore.loadModuleByModuleUrl(moduleUrl).then(() => router.start(startPath))
        : router.start(startPath)
    })
}

export {
  addXStateService,
  assign,
  createAppState,
  createCustomElement,
  createMachine,
  createPersist,
  createXStateService,
  getAppState,
  getEventBus,
  getI18n,
  getRouter,
  getXStateService,
  html,
  renderer,
  start,
  withI18n,
  withLocalState,
  withStore,
  withXStateService
}
