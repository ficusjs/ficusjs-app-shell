// @ts-nocheck
import { createRouter } from '@ficusjs/router'
import { storeNames } from './stores/constants.mjs'
import { getAppState, getEventBus } from './util/shell-runtime.mjs'
import { eventNames } from './util/event-names.mjs'

function getRouterOutletSelector () {
  return window.ficusAppShell && window.ficusAppShell.routerOutletSelector
    ? window.ficusAppShell.routerOutletSelector
    : '#router-outlet'
}

function getModuleUrlByLocation (pathname) {
  const appConfigStore = getAppState(storeNames.APP_CONFIG)
  return appConfigStore.getModuleUrlByLocation(pathname)
}

function loadModule (moduleUrl) {
  const appConfigStore = getAppState(storeNames.APP_CONFIG)
  return appConfigStore.loadModule(moduleUrl)
}

export const router = createRouter([], getRouterOutletSelector(), {
  autoStart: false,
  context: { eventBus: getEventBus() },
  resolveRoute (context, params) {
    const appConfigStore = getAppState(storeNames.APP_CONFIG)
    const dataStartPath = appConfigStore.getState('appConfig.data.startPath')
    if (context.location.pathname === '/' && context.location.pathname !== dataStartPath) {
      return { redirect: dataStartPath }
    }
    if (context.route && typeof context.route.action === 'function') {
      return context.route.action(context, params)
    }
    if (!context.route) {
      const moduleUrl = getModuleUrlByLocation(context.location.pathname)
      return moduleUrl
        ? loadModule(moduleUrl).then(() => {
            console.log(context)
            return {}
          })
        : undefined
    }
  },
  errorHandler (error, routeContext) {
    const moduleUrl = getModuleUrlByLocation(routeContext.location.pathname)
    if (moduleUrl) {
      loadModule(moduleUrl).then(() => {
        console.log(routeContext)
        return {}
      })
    } else {
      routeContext.context.eventBus.publish(eventNames.FICUS_APP_SHELL_ERROR, error)
    }
  },
  mode: 'hash'
})
