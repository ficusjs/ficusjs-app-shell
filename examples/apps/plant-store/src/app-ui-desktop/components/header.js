export function createHeader (helpers) {
  const { html, renderer } = helpers
  return {
    renderer,
    render () {
      return html`<header>Desktop header</header>`
    }
  }
}
