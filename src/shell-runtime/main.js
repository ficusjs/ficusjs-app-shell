// @ts-nocheck
import './stores/index.js'

import { getAppState } from './util/shell-runtime.js'
import { eventBus } from './event-bus/index.js'
import { storeNames } from './stores/constants.js'
import { startPath } from './util/start-path.js'

function loadDependencies (hasModuleRoutes, hasModuleMessageBundles) {
  const routerImport = hasModuleRoutes ? import('./router.js') : Promise.resolve()
  const i18nImport = hasModuleMessageBundles ? import('./i18n.js') : Promise.resolve()
  return Promise.all([
    routerImport,
    i18nImport
  ])
    .then(([routerModule, i18nModule]) => {
      if (routerModule) {
        eventBus.subscribe('appConfigLoaded', startPath => appConfigLoaded(routerModule.router, startPath))
      }
    })
}

function appConfigLoaded (router, startPath) {
  const moduleUrl = appConfigStore.getModuleUrlByLocation(startPath)
  moduleUrl
    ? appConfigStore.loadModuleByModuleUrl(moduleUrl).then(() => router.start(startPath))
    : router.start(startPath)
}

const appConfigStore = getAppState(storeNames.APP_CONFIG)

if (window.ficusShellRuntime && window.ficusShellRuntime.configUrl) {
  appConfigStore.loadAppConfigIfNotLoaded(window.ficusShellRuntime.configUrl)
    .then(() => loadDependencies(appConfigStore.hasModuleRoutes(), appConfigStore.hasModuleMessageBundles()))
    .then(() => eventBus.publish('appConfigLoaded', startPath()))
}
