export function createProductsPage (helpers) {
  const { createCustomElement, html, renderer } = helpers

  createCustomElement('products-page', {
    renderer,
    render () {
      return html`
        <h1>Products page</h1>
        <p>This is the products page.</p>
      `
    }
  })
}
