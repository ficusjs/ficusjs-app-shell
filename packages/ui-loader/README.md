# Ficus App Shell UI Loader

The app shell UI loader is the minimal UI required for an app. It is loaded as soon as possible, and is responsible for loading the rest of the app.

## Usage

The app shell UI loader loads the initial UI for the app. The initial UI is the minimal UI required for the app to be usable on either mobile or desktop. The initial UI is loaded as soon as possible, and is responsible for loading the rest of the app.

To use the app shell UI loader, add the following to your `index.html`:

```html
<script type="module">
  import { createLoader } from 'https://cdn.skypack.dev/@ficusjs/app-shell-ui-loader'
  createLoader()
</script>
```

## API

### `createLoader(options)`

The `createLoader(options)` function loads the initial UI for the app. The initial UI is the minimal UI required for the app to be usable. The initial UI is loaded as soon as possible, and is responsible for loading the rest of the app.

Options can be passed to the `createLoader(options)` function to configure the loader. The following example shows the default values for each option. When passing options, all properties are optional so you only need to override the values you want to change.

```js
import { createLoader } from 'https://cdn.skypack.dev/@ficusjs/app-shell-ui-loader'
createLoader({
  appTagName: 'fas-app',
  desktopMediaQuery: '(min-width: 1280px)',
  breakpointReactive: false,
  desktopUiTagName: 'fas-ui-desktop',
  desktopUiScriptUrl: '/app-ui-desktop/main.js',
  desktopHTML: `
    <div>
      <fas-desktop-header></fas-desktop-header>
      <fas-desktop-nav></fas-desktop-nav>
      <main>
        <div id="router-outlet"></div>
        <fas-desktop-aside></fas-desktop-aside>
      </main>
      <fas-desktop-footer></fas-desktop-footer>
    </div>
  `,
  mobileUiTagName: 'fas-ui-mobile',
  mobileUiScriptUrl: '/app-ui-mobile/main.js',
  mobileHTML: `
    <div>
      <fas-mobile-header></fas-mobile-header>
      <fas-mobile-nav></fas-mobile-nav>
      <main id="router-outlet"></main>
      <fas-mobile-footer></fas-mobile-footer>
    </div>
  `
})
```

### Options

The `createLoader(options)` function accepts an optional object containing properties for configuring the loader.

The following options can be provided:

| Option               | Type      | Default                           | Description                                                                                                               |
|----------------------|-----------|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `appTagName`         | `string`  | `fas-app`                         | The tag name of the app tag. The app tag is the root tag that uses a media query to load a specific mobile or desktop UI. |
| `desktopMediaQuery`  | `string`  | `(min-width: 1280px)`             | The breakpoint at which to switch from mobile to desktop.                                                                 |
| `breakpointReactive` | `boolean` | `false`                           | Should the breakpoint be reactive on resize?                                                                              |
| `desktopUiTagName`   | `string`  | `fas-ui-desktop`                  | The tag name of the desktop UI component.                                                                                 |
| `desktopUiScriptUrl` | `string`  | `/app-ui-desktop/main.js`         | The path to the desktop UI components bundle.                                                                             |
| `desktopHTML`        | `string`  | [See desktop HTML](#desktop-html) | The HTML of the desktop app shell UI.                                                                                     |
| `mobileUiTagName`    | `string`  | `fas-ui-mobile`                   | The tag name of the mobile UI component.                                                                                  |
| `mobileUiScriptUrl`  | `string`  | `/app-ui-mobile/main.js`          | The path to the mobile UI components bundle.                                                                              |
| `mobileHTML`         | `string`  | [See mobile HTML](#mobile-html)   | The HTML of the mobile app shell UI.                                                                                      |

#### Desktop HTML

The desktop HTML is the HTML that is loaded when the desktop UI is loaded. The desktop HTML is loaded when the desktop media query is matched. It is loaded within the `desktopUiTagName` tag.

```html

The default desktop HTML is:

```html
<div>
  <fas-desktop-header></fas-desktop-header>
  <fas-desktop-nav></fas-desktop-nav>
  <main>
    <div id="router-outlet"></div>
    <fas-desktop-aside></fas-desktop-aside>
  </main>
  <fas-desktop-footer></fas-desktop-footer>
</div>
```

To provide your own desktop HTML, pass it in as the `desktopHTML` option:

```js
{
  desktopHTML: `
    <div>
      <my-desktop-header></my-desktop-header>
      <my-desktop-aside></my-desktop-aside>
      <main id="router-outlet"></main>
      <my-desktop-footer></my-desktop-footer>
    </div>
  `
}
```

#### Mobile HTML

The mobile HTML is the HTML that is loaded when the mobile UI is loaded. The mobile HTML is loaded when the desktop media query is not matched. It is loaded within the `mobileUiTagName` tag.

The default mobile HTML is:

```html
<div>
  <fas-mobile-header></fas-mobile-header>
  <fas-mobile-nav></fas-mobile-nav>
  <main id="router-outlet"></main>
  <fas-mobile-footer></fas-mobile-footer>
</div>
```

To provide your own mobile HTML, pass it in as the `mobileHTML` option:

```js
{
  mobileHTML: `
    <div>
      <my-mobile-header></my-mobile-header>
      <my-mobile-aside></my-mobile-aside>
      <main id="router-outlet"></main>
      <my-mobile-footer></my-mobile-footer>
    </div>
  `
}
```

## Production

It is recommended to inline the app shell UI loader in production. This embeds the app shell UI loader in the HTML, and removes the need for an additional HTTP request.
