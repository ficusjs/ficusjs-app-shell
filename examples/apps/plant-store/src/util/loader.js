// @ts-nocheck
import { loadResource } from '@ficusjs/resource-loader'

export function loader (type) {
  // load the resources
  return loadResource(
    { url: '/app-shell-runtime/main.js', is: 'script', attributes: { type: 'module' } },
    { url: `/assets/css/${type}.css`, is: 'style' },
    { url: 'https://fonts.googleapis.com', attributes: { rel: 'preconnect' } },
    { url: 'https://fonts.gstatic.com', attributes: { rel: 'preconnect' } },
    { url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap', is: 'style', attributes: { rel: 'stylesheet' } }
  )
}
