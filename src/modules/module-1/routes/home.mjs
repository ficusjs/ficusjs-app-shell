// @ts-nocheck
export function getHomeRoute (helpers) {
  return {
    path: '/module-1',
    action () {
      return import('../pages/home.mjs')
        .then(({ createHomePage }) => createHomePage(helpers))
        .then(() => 'module-one-home-page')
    }
  }
}
