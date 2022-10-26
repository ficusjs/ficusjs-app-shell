// @ts-nocheck
import './stores/index.mjs'
import { getAppState } from '@ficusjs/state/app-state'
import { storeNames } from './stores/constants.mjs'
import { getStartPath } from './util/get-start-path.mjs'

function appConfigLoaded () {
  const hasModuleRoutes = appConfigStore.hasModuleRoutes()
  const hasModuleMessageBundles = appConfigStore.hasModuleMessageBundles()
  const routerImport = hasModuleRoutes ? import('./router.mjs') : Promise.resolve()
  const i18nImport = hasModuleMessageBundles ? import('./i18n.mjs') : Promise.resolve()
  return Promise.all([
    routerImport,
    i18nImport
  ])
    .then(([routerModule, _i18nModule]) => {
      if (routerModule) {
        const router = routerModule.router
        const startPath = getStartPath()
        const moduleUrl = appConfigStore.getModuleUrlByLocation(startPath)
        moduleUrl
          ? appConfigStore.loadModuleByModuleUrl(moduleUrl).then(() => router.start(startPath))
          : router.start(startPath)
      }
    })
}

const appConfigStore = getAppState(storeNames.APP_CONFIG)
const configUrl = (window.ficusShellRuntime && window.ficusShellRuntime.configUrl) || '/app-config.json'

appConfigStore.loadAppConfigIfNotLoaded(configUrl)
  .then(appConfigLoaded)
