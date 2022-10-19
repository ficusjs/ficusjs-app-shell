// @ts-nocheck
export function getHomeRoute (helpers) {
  return {
    path: '/',
    action () {
      return import('../pages/home.js')
        .then(({ createHomePage }) => createHomePage(helpers))
        .then(() => 'home-page')
    }
  }
}
