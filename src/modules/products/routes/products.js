// @ts-nocheck
export function getProductsRoute (helpers) {
  return {
    path: '/products',
    action () {
      return import('../pages/products.js')
        .then(({ createProductsPage }) => createProductsPage(helpers))
        .then(() => 'products-page')
    }
  }
}
