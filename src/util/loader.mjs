// @ts-nocheck
import { loadExternal } from './load-external.mjs'

export function loader () {
  window.ficusAppShell = window.ficusAppShell || {
    // add app config URL
    configUrl: '/app-config.json',

    // set the app tag so the shell knows the root component
    appTag: 'example-app',

    // set the router outlet selector
    rootOutletSelector: '#router-outlet',

    // add breakpoint configuration
    breakpointConfig: {
      reactive: true,
      breakpoints: {
        576: { method: 'sm' },
        768: { method: 'md' },
        992: { method: 'lg' },
        1280: { method: 'xl' },
        1440: { method: 'xxl' },
        1920: { method: 'xxxl' }
      }
    }
  }

  // load the app shell
  loadExternal(
    { url: '/shell-runtime/main.mjs', is: 'script', attributes: { type: 'module' } }
  )
}
