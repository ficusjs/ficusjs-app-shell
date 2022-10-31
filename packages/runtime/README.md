# Ficus App Shell Runtime

The app shell runtime is the runtime for the app shell. It is responsible for loading the app configuration, and then loading modules that provide the functionality of the app.

The runtime is loaded once and provides the following functionality to modules:

- Loading the app configuration
- Loading modules
- Providing features to modules
  - Application state
  - Routing
  - Event handling
  - Component creation
  - Component rendering
  - Internationalization

## Usage

The app shell runtime is loaded by the app UI components; desktop or mobile.

## API

### `start(options)`

The `start(options)` function loads the app configuration, starts the router, and then loads modules that provide the functionality of the app.

Options can be passed to the `start(options)` function to configure the runtime. The following example shows the default values for each option. When passing options, all properties are optional, so you only need to override the values you want to change.

```js
import { start } from 'https://cdn.skypack.dev/@ficusjs/app-shell-runtime'

start({
  // the app tag name
  appTag: 'fas-app',
  
  // breakpoints for the app
  breakpointConfig: {
    reactive: true,
    breakpoints: {
      576: { method: 'renderSm' },
      768: { method: 'renderMd' },
      992: { method: 'renderLg' },
      1280: { method: 'renderXl' },
      1440: { method: 'renderXxl' },
      1920: { method: 'renderXxxl' }
    }
  },
  
  // the app configuration URL
  configUrl: '/app-config.json',
  
  // the router outlet selector
  routerOutletSelector: '#router-outlet',
  
  // the router mode - 'hash' or 'history'
  routerMode: 'hash'
})
```

### Helpers

The following helpers are available to modules:

```js
import {
  addXStateService,
  assign,
  createAppState,
  createCustomElement,
  createMachine,
  createPersist,
  createXStateService,
  getAppState,
  getEventBus,
  getI18n,
  getRouter,
  getXStateService,
  html,
  interpret,
  renderer,
  withI18n,
  withLocalState,
  withStore,
  withWorkerStore,
  withXStateService,
  XStateServiceStatus
} from 'https://cdn.skypack.dev/@ficusjs/app-shell-runtime'

// it is recommended to import the helpers as a constant
import * as helpers from 'https://cdn.skypack.dev/@ficusjs/app-shell-runtime'
```

## Application state

The app shell runtime provides two application state stores.

- `ficus.app.shell.appConfig` - The application state store that contains methods for loading and working with modules.
- `ficus.app.shell.layout` - The application state store that is specific to layouts.

```js
// get the app config application state object
const appConfigStore = getAppState('ficus.app.shell.appConfig')

// get the layout application state object
const layoutStore = getAppState('ficus.app.shell.layout')
```
