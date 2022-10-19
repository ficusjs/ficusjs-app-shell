# FicusJS App Shell

FicusJS application shell for micro front-ends.

## Configuration

The application shell is configured using `window.ficusShellRuntime` variables. The following variables are available:

| Variable               | Description                                                     | Default                                                                                                                                                                               |
|------------------------|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `configUrl`            | The application shell configuration URL                         | `/app-config.json`                                                                                                                                                                    |
| `appTag`               | The root application tag                                        | `fas-app`                                                                                                                                                                             |
| `routerOutletSelector` | The router outlet selector                                      | `#router-outlet`                                                                                                                                                                      |
| `breakpointConfig`     | The breakpoint configuration                                    | `{ reactive: true, breakpoints: { 576: { method: 'sm' }, 768: { method: 'md' }, 992: { method: 'lg' }, 1280: { method: 'xl' }, 1440: { method: 'xxl' }, 1920: { method: 'xxxl' } } }` |
| `desktopMediaQuery`    | The media query used as a breakpoint between mobile and desktop | `(min-width: 1280px)`                                                                                                                                                                 |

To set the configuration, add the following to your `index.html`:

```html
<script>
  window.ficusShellRuntime = {
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
</script>
```
