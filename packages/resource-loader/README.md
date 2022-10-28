# Ficus Resource Loader

The Ficus Resource Loader is a library for loading resources from a URL. It loads resources using HTML elements such as `<link>` and `<script>`.

All resources are tracked to ensure they are only loaded once. It also means that resources use the same cache as the browser.

## Usage

```js
import { loadResource } from 'https://cdn.skypack.dev/@ficusjs/resource-loader'

loadResource(
  { url: '/css/label.css', is: 'style' },
  { url: '/js/label.iife.js', is: 'script', cache: false },
  { url: '/js/label.esm.js', is: 'script', attributes: { type: 'module' } }
)
```

## API

### `loadResource(items)`

Loads resources from a URL. The resources are loaded using HTML elements such as `<link>` and `<script>`.

The `items` parameter is one or more objects with the following properties:

- `url` - The URL of the resource to load. This is mandatory.
- `is` - The type of resource to load. Can be `style` or `script`. This is mandatory.
- `cache` - Whether to cache the resource. Defaults to `true`.
- `attributes` - An optional object of attributes to set on the HTML element.

#### Script resources

Script resources are loaded using `<script>` elements. The `attributes` property is used to set attributes on the `<script>` element.

#### Style resources

Style resources are loaded using `<link>` elements. The `attributes` property is used to set attributes on the `<link>` element.

#### Caching

By default, resources are cached by the browser. This means that if a resource is loaded twice, it will only be loaded once. This is useful for loading resources that are used by multiple components.

If you want to load a resource without caching, set the `cache` property to `false`. This will append a query string to the URL to ensure the resource is loaded each time.
