# Plant Store Application

The plant store example is a simple example of a single page application built using the Ficus App Shell. It has a desktop and mobile UI. It contains modules that provide the application functionality.

## Architecture

The plant store application contains the following structure:

- UI loader
- App UI desktop
  - App shell runtime
  - Desktop styles
- App UI mobile
  - App shell runtime
  - Mobile styles
- Modules
  - Home
  - Basket
  - Checkout
  - Products

### UI loader

The UI loader is responsible for providing the HTML for the initial UI. The initial UI is the HTML structure required for the app to be usable on either mobile or desktop. It uses a media query to determine which UI to load; desktop or mobile.

The initial UI is the HTML structure but not the content. The content is loaded by the app UI bundle. The HTML structure can be rendered with placeholders until the content is loaded. This provides the shape of the UI before the content is loaded.

The UI loader is loaded as soon as possible (typically embedded in the `index.html`).

### App UI desktop

The app UI desktop is the desktop UI for the app. It provides the components, content and functionality for the desktop UI.

The app UI desktop is responsible for loading the app shell runtime and the desktop styles.

### App UI mobile

The app UI mobile is the mobile UI for the app. It provides the components, content and functionality for the mobile UI.

The app UI mobile is responsible for loading the app shell runtime and the mobile styles.

### App shell runtime

The app shell runtime is the runtime for the app shell. It provides functionality for modules. This includes:

- Web component creation and extension
- Application state management - data stores and finite state machines
- Internationalization
- Pub/sub event bus
- Router for multiple pages

### Desktop styles

The desktop styles are the styles for the desktop UI.

### Mobile styles

The mobile styles are the styles for the mobile UI.

### Modules

The modules are the functionality for the app. They provide the content for the app.

## Building

TODO

## Running

TODO

## Testing

TODO

## Deploying

TODO
