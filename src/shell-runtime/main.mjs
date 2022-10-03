// @ts-nocheck
import './stores/index.mjs'
import './i18n.mjs'

import { getAppState } from './util/shell-runtime.mjs'
import { eventBus } from './event-bus/index.mjs'
import { storeNames } from './stores/constants.mjs'
import { router } from './router.mjs'
import { startPath } from './util/start-path.mjs'

const appConfigStore = getAppState(storeNames.APP_CONFIG)
eventBus.subscribe('appConfigLoaded', startPath => {
  const moduleUrl = appConfigStore.getModuleUrlByLocation(startPath)
  moduleUrl
    ? appConfigStore.loadModule(moduleUrl).then(() => router.start(startPath))
    : router.start(startPath)
})
if (window.ficusAppShell && window.ficusAppShell.configUrl) {
  appConfigStore.loadAppConfigIfNotLoaded(window.ficusAppShell.configUrl)
    .then(() => eventBus.publish('appConfigLoaded', startPath()))
}
