import { withBreakpointRender } from '@ficusjs/component-extensions/with-breakpoint-render'
import { breakpointConfig } from './breakpoint-config.js'

export function createPage ({ html, renderer }) {
  return withBreakpointRender(breakpointConfig, {
    renderer,
    props: {
      pageTitle: {
        type: String
      }
    },
    render () {
      return html`
        <div class="pt-8 pb-80">
          <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <section>
              <h1 class="font text-xl pb-8 text-gray-900">${this.props.pageTitle}</h1>
              ${this.slots.default}
            </section>
          </div>
        </div>
      `
    }
  })
}
