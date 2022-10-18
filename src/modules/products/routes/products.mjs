// @ts-nocheck
export function getProductsRoute (helpers) {
  return {
    path: '/products',
    action () {
      return import('../pages/products.mjs')
        .then(({ createProductsPage }) => createProductsPage(helpers))
        .then(() => 'products-page')
    }
  }
}
