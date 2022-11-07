import { storeNames } from '../../util/store-names.js'
import { unsafeHTML } from '../../util/unsafe-html.js'
import { getModuleLayoutItems } from '../../util/get-layout-items.js'

export function createHeader (helpers) {
  const { html, renderer, withStore, getAppState, getRouter, getI18n, withI18n } = helpers
  return withStore(getAppState(storeNames.APP_CONFIG),
    withI18n(getI18n(), {
      renderer,
      computed: {
        items () {
          const modules = this.store.getState('appConfig.data.modules')
          if (!modules) return []
          const sortedComponents = getModuleLayoutItems(modules, curr => (curr.layout?.desktop?.header))
          // adding a separator if two buttons are adjacent
          sortedComponents.forEach((component, index) => {
            if (sortedComponents[index].type === 'component' && sortedComponents[index + 1].type === 'component') {
              sortedComponents.splice(index + 1, 0, { type: 'separator' })
            }
          })
          return sortedComponents
        },
        appTitle () {
          return this.i18n ? this.i18n.t('appTitle') : 'Example'
        }
      },
      handleClick (e, item) {
        if (item.link.path) {
          const router = getRouter()
          this.store.loadModuleByPath(item.link.path).then(() => router.push(item.link.path))
        }
      },
      getLink (item) {
        switch (item.link.type) {
          case 'icon':
            return html`
              <fas-desktop-icon-placeholder icon-type="${item.link.icon}"></fas-desktop-icon-placeholder>`
          case 'text':
            return html`<span>${item.link.textI18n ? this.i18n.t(item.link.textI18n) : item.link.text}</span>`
        }
      },
      getPlaceholder (item) {
        switch (item.placeholder.type) {
          case 'icon':
            return `<fas-desktop-icon-placeholder icon-type="${item.placeholder.icon}"></fas-desktop-icon-placeholder>`
          case 'text':
            return `<fas-desktop-text-placeholder tag="${item.component}" text="${item.placeholder.textI18n ? this.i18n.t(item.placeholder.textI18n) : item.placeholder.text}"></fas-desktop-text-placeholder>`
          default:
            return '<span></span>'
        }
      },
      getItem (item) {
        switch (item.type) {
          case 'component':
            return unsafeHTML(`<li><${item.component}>${this.getPlaceholder(item)}</${item.component}></li>`)
          case 'link':
            return html`
              <li>
                <button type="button" class="text-gray-400 hover:text-gray-500"
                        onclick="${(e) => this.handleClick(e, item)}">${this.getLink(item)}
                </button>
              </li>`
          case 'separator':
            return html`<span class="h-6 w-px mx-2 bg-gray-200" aria-hidden="true"></span>`
        }
      },
      render () {
        return html`
          <header class="bg-white relative z-40">
            <nav aria-label="Top" class="mx-auto max-w-7xl w-full px-8 h-16">
              <ul>
                <li>
                  <button type="button" onclick="${() => getRouter().push('/')}">
                    <span class="sr-only">${this.appTitle}</span>
                    <img class="h-8 w-auto" src="/assets/img/logo.svg" alt="${this.appTitle}">
                  </button>
                </li>
                <fas-desktop-nav></fas-desktop-nav>
              </ul>
              <ul class="ml-auto">
                ${this.items.map((item) => html`${this.getItem(item)}`)}
              </ul>
            </nav>
          </header>
        `
      }
    })
  )
}
