import { createCustomElement, html, renderer } from '../util/shell-runtime.mjs'

createCustomElement('ficus-app-shell-page-not-found', {
  renderer,
  render () {
    return html`
      <div>
        <h1>
          Page not found!
        </h1>
      </div>
    `
  }
})
