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
