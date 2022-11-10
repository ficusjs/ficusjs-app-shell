export function getCategoriesRoute (helpers) {
  return {
    path: '/products/categories',
    action () {
      return import('../pages/categories.mjs')
        .then(({ createCategoriesPage }) => createCategoriesPage(helpers))
        .then(() => 'product-categories-page')
    }
  }
}
