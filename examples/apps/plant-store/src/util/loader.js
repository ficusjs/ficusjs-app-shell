// @ts-nocheck
import { loadResource } from '@ficusjs/resource-loader'

export function loader (type) {
  return loadResource(
    { url: `/assets/css/${type}.css`, is: 'style' },
    { url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap', is: 'style', attributes: { rel: 'stylesheet' } }
  )
}
