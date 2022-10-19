// @ts-nocheck
export function getCheckoutRoute (helpers) {
  return {
    path: '/checkout',
    action () {
      return import('../pages/checkout.js')
        .then(({ createCheckoutPage }) => createCheckoutPage(helpers))
        .then(() => 'checkout-page')
    }
  }
}
