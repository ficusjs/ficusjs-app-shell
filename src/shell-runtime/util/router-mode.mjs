import { getAppState } from '@ficusjs/state'
import { storeNames } from '../stores/constants.mjs'

export function routerMode () {
  const appConfigStore = getAppState(storeNames.APP_CONFIG)
  if (appConfigStore.state.appConfig.loaded) {
    const dataRouterMode = appConfigStore.getState('appConfig.data.routerMode')
    if (dataRouterMode) {
      return dataRouterMode
    }
  }
  return 'hash'
}
