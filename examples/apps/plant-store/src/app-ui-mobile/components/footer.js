export function createFooter (helpers) {
  const { html, renderer } = helpers
  return {
    renderer,
    render () {
      return html`<footer>Mobile footer</footer>`
    }
  }
}
