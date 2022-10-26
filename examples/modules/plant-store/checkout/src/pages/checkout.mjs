export function createCheckoutPage (helpers) {
  const { createCustomElement, html, renderer } = helpers

  createCustomElement('checkout-page', {
    renderer,
    render () {
      return html`
        <h1>Checkout page</h1>
        <p>This is the checkout page.</p>
      `
    }
  })
}
