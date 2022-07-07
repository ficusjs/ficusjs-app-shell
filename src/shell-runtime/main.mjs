// @ts-nocheck
import './stores/index.mjs'
import './components/index.mjs'
import './pages/index.mjs'
import './i18n.mjs'

import { getAppState } from './util/shell-runtime.mjs'
import { eventBus } from './event-bus.mjs'
import { storeNames } from './stores/constants.mjs'
import { router } from './router.mjs'
import { startPath } from './util/start-path.mjs'

// add service worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js').then(function(registration) {
//     console.log('ServiceWorker registration successful with scope: ', registration.scope)
//   }).catch(function(err) {
//     console.log('ServiceWorker registration failed: ', err)
//   })
// }

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
