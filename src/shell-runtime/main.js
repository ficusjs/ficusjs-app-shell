// @ts-nocheck
import './stores/index.js'

import { getAppState } from './util/shell-runtime.js'
import { eventBus } from './event-bus/index.js'
import { storeNames } from './stores/constants.js'
import { startPath } from './util/start-path.js'

function loadDependencies () {
  return Promise.all([
    import('./router.js'),
    import('./i18n.js')
  ])
    .then(([{ router }]) => {
      eventBus.subscribe('appConfigLoaded', startPath => appConfigLoaded(router, startPath))
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
    .then(loadDependencies)
    .then(() => eventBus.publish('appConfigLoaded', startPath()))
}
