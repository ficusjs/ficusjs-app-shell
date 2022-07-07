// @ts-nocheck
export function getHomeRoute (helpers) {
  return {
    path: '/module-2',
    action () {
      return import('../pages/home.mjs')
        .then(({ createHomePage }) => createHomePage(helpers))
        .then(() => 'module-two-home-page')
    }
  }
}
