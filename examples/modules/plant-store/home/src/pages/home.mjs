export function createHomePage (helpers) {
  const { createCustomElement, html, renderer } = helpers
  
  createCustomElement('home-page', {
    renderer,
    render () {
      return html`
        <h1>Home page</h1>
        <p>This is the home page.</p>
      `
    }
  })
}
