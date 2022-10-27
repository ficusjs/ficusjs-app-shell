// @ts-nocheck
import { addMatcherToRoute } from '@ficusjs/router'

export function mapRoutesForModules (data) {
  if (!data || !data.modules) return data
  data.modules = data.modules.map(module => {
    if (module.routes) {
      module.routes = module.routes.map(route => addMatcherToRoute(route))
    }
    return module
  })
  return data
}
