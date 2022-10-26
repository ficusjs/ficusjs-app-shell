export function createBasketPage (helpers) {
  const { createCustomElement, html, renderer } = helpers

  createCustomElement('basket-page', {
    renderer,
    render () {
      return html`
        <h1>Basket page</h1>
        <p>This is the basket page.</p>
      `
    }
  })
}
