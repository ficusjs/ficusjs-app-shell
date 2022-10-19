export function createFooter (helpers) {
  const { html, renderer } = helpers
  return {
    renderer,
    render () {
      return html`<footer>Desktop footer</footer>`
    }
  }
}
