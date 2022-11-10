export function getSearchRoute (helpers) {
  return {
    path: '/products/search',
    action () {
      return import('../pages/search.mjs')
        .then(({ createSearchPage }) => createSearchPage(helpers))
        .then(() => 'product-search-page')
    }
  }
}
