export function createHeader (helpers) {
  const { html, renderer } = helpers
  return {
    renderer,
    render () {
      return html`<header>
        <img src="/assets/img/logo.svg" alt="" style="height: 32px;">
      </header>`
    }
  }
}
