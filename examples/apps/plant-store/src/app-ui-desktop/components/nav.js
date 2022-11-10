import { storeNames } from '../../util/store-names.js'
import { getModuleLayoutItems } from '../../util/get-layout-items.js'

export function createNav (helpers) {
  const { html, renderer, getAppState, getRouter, withStore, getI18n, withI18n } = helpers
  return withStore(getAppState(storeNames.APP_CONFIG),
    withI18n(getI18n(), {
      renderer,
      computed: {
        items () {
          const modules = this.store.getState('appConfig.data.modules')
          if (!modules) return []
          return getModuleLayoutItems(modules, curr => (curr.layout?.desktop?.nav))
        }
      },
      handleClick (e, item) {
        if (item.path) {
          const router = getRouter()
          this.store.loadModuleByPath(item.path).then(() => router.push(item.path))
        }
      },
      render () {
        return html`
          ${this.items.map(item => html`
            <li>
              <button class="fc-nav-link" type="button" onclick="${e => this.handleClick(e, item)}">${item.titleI18n ? this.i18n.t(item.titleI18n) : item.title}</button>
            </li>
          `)}
        `
      }
    })
  )
}
