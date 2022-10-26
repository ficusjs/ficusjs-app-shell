export function getHomeRoute (helpers) {
  return {
    path: '/',
    action () {
      return import('../pages/home.mjs')
        .then(({ createHomePage }) => createHomePage(helpers))
        .then(() => 'home-page')
    }
  }
}