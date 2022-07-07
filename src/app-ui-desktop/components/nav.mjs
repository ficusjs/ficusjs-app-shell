export function createNav (helpers) {
  const { html, renderer } = helpers
  return {
    renderer,
    render () {
      return html`<nav>Desktop nav</nav>`
    }
  }
}
