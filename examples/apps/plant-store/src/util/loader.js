// @ts-nocheck
import { loadResource } from '@ficusjs/resource-loader'

export function loader (type) {
  // load the resources
  return loadResource(
    { url: '/app-shell-runtime/main.js', is: 'script', attributes: { type: 'module' } },
    { url: `/assets/css/${type}.css`, is: 'style' }
  )
}
