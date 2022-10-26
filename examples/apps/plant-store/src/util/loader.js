// @ts-nocheck
import { loadResource } from '@ficusjs/resource-loader'

export function loader (type) {
  return loadResource(
    { url: '/app-shell-runtime/main.js', is: 'script', attributes: { type: 'module' } },
    { url: `/assets/css/${type}.css`, is: 'style' }
  )
}
