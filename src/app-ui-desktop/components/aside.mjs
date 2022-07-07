export function createAside (helpers) {
  const { html, renderer } = helpers
  return {
    renderer,
    render () {
      return html`<aside>Desktop aside</aside>`
    }
  }
}
