// @ts-nocheck
import { createRouter } from '@ficusjs/router'
import { getAppState } from './util/shell-runtime.mjs'
import { storeNames } from './stores/constants.mjs'

function getRouterOutletSelector () {
  return window.ficusAppShell && window.ficusAppShell.routerOutletSelector
    ? window.ficusAppShell.routerOutletSelector
    : '#router-outlet'
}

export const router = createRouter([], getRouterOutletSelector(), {
  autoStart: false,
  resolveRoute (context, params) {
    const appConfigStore = getAppState(storeNames.APP_CONFIG)
    const dataStartPath = appConfigStore.getState('appConfig.data.startPath')
    if (context.location.pathname === '/' && context.location.pathname !== dataStartPath) {
      return { redirect: dataStartPath }
    }
    if (typeof context.route.action === 'function') {
      return context.route.action(context, params)
    }
    return undefined
  },
  errorHandler (error, context) {
    console.error(error)
    console.info(context)
    return error.status === 404
      ? 'ficus-app-shell-page-not-found'
      : 'ficus-app-shell-page-error'
  },
  mode: 'hash'
})
