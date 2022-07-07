import { createCustomElement, html, renderer } from '../util/shell-runtime.mjs'

createCustomElement('ficus-app-shell-page-error', {
  renderer,
  render () {
    return html`
      <div>
        <h1>
          Error!
        </h1>
      </div>
    `
  }
})
