export function getBasketRoute (helpers) {
  return {
    path: '/basket',
    action () {
      return import('../pages/basket.mjs')
        .then(({ createBasketPage }) => createBasketPage(helpers))
        .then(() => 'basket-page')
    }
  }
}
