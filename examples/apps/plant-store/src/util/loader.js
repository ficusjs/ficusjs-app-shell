// @ts-nocheck
import { loadExternal } from './load-external.js'

export function loader (type) {
  window.ficusShellRuntime = window.ficusShellRuntime || {
    // add app config URL
    configUrl: '/app-config.json',

    // set the app tag so the shell knows the root component
    appTag: 'fas-app',

    // set the router outlet selector
    routerOutletSelector: '#router-outlet',

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
    },

    // set the desktop media query
    desktopMediaQuery: '(min-width: 1280px)'
  }

  // load the app shell
  return loadExternal(
    { url: '/shell-runtime/main.js', is: 'script', attributes: { type: 'module' } },
    { url: `/assets/css/${type}.css`, is: 'style' }
  )
}
