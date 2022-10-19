// @ts-nocheck
import './stores/index.js'
import { getAppState } from './util/shell-runtime.js'
import { storeNames } from './stores/constants.js'
import { getStartPath } from './util/get-start-path.js'

function appConfigLoaded () {
  const hasModuleRoutes = appConfigStore.hasModuleRoutes()
  const hasModuleMessageBundles = appConfigStore.hasModuleMessageBundles()
  const routerImport = hasModuleRoutes ? import('./router.js') : Promise.resolve()
  const i18nImport = hasModuleMessageBundles ? import('./i18n.js') : Promise.resolve()
  return Promise.all([
    routerImport,
    i18nImport
  ])
    .then(([routerModule, i18nModule]) => {
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

if (window.ficusShellRuntime && window.ficusShellRuntime.configUrl) {
  appConfigStore.loadAppConfigIfNotLoaded(window.ficusShellRuntime.configUrl)
    .then(appConfigLoaded)
}
