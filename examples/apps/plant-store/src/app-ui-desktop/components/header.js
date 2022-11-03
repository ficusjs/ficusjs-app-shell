import { storeNames } from '../../util/store-names.js'
import { unsafeHTML } from '../../util/unsafe-html.js'

export function createHeader (helpers) {
  const { html, renderer, withStore, getAppState } = helpers
  return withStore(getAppState(storeNames.APP_CONFIG),{
    renderer,
    computed: {
      items () {
        const modules = this.store.getState('appConfig.data.modules')
        if (!modules) return []
        const headerModules = modules.reduce((prev, curr) => [...prev, (curr.layout?.desktop?.header)], []).filter(x => x != null)
        const headerModules1 = headerModules.map((module) => {
          const moduleKeys = Object.keys(module)
          return moduleKeys.map((key) => {
            return module[key]
          })
        })
        return headerModules1.flat().sort((a, b) => a.order - b.order)
      }
    },
    getPlaceholder (item) {
      switch (item.placeholder.type) {
        case 'text':
          return `<span>${item.placeholder.text}</span>`
        case 'icon':
          return `<span class="h-6 w-6">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>`
        default:
          return ''
      }
    },
    getItem(item) {
      return `<${item.component}>${this.getPlaceholder(item)}</${item.component}>`
    },
    render () {
      return html`
        <header class="bg-white relative z-40">
          <nav aria-label="Top" class="mx-auto max-w-7xl w-full px-8 h-16">
            <ul>
              <li>
                <a href="#">
                  <span class="sr-only">FicusJS</span>
                  <img class="h-8 w-auto" src="/assets/img/logo.svg" alt="Ficus logo">
                </a>
              </li>
              <fas-desktop-nav></fas-desktop-nav>
            </ul>
            <ul class="ml-auto">
              ${this.items.map((item) => html`<li>${unsafeHTML(this.getItem(item))}</li>`)}
              <li>
                <a href="#">Sign in</a>
              </li>
              <span class="h-6 w-px mx-2 bg-gray-200" aria-hidden="true"></span>
              <li>
                <a href="#">Create account</a>
              </li>
            </ul>
          </nav>
        </header>
      `
    }
  })
}
