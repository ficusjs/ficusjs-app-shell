// @ts-nocheck
export function getBasketRoute (helpers) {
  return {
    path: '/basket',
    action () {
      return import('../pages/basket.js')
        .then(({ createBasketPage }) => createBasketPage(helpers))
        .then(() => 'basket-page')
    }
  }
}
