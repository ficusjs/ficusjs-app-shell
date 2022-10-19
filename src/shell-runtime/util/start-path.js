import { getAppState, getRouter } from '../util/shell-runtime.js'
import { storeNames } from '../stores/constants.js'

export function startPath () {
  const appConfigStore = getAppState(storeNames.APP_CONFIG)
  if (appConfigStore.state.appConfig.loaded) {
    const router = getRouter()
    const dataStartPath = appConfigStore.getState('appConfig.data.startPath')
    if (router.hasRoute(router.location.pathname)) {
      return router.location.pathname
    } else if (router.location.pathname === '/' && router.location.pathname !== dataStartPath) {
      return dataStartPath
    } else {
      return router.location.pathname
    }
  }
  return '/'
}
