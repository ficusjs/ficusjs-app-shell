import { storeNames } from '../../modules/shared/constants.mjs'
import { withStore } from '@ficusjs/state'

export function createNav (helpers) {
  const { html, renderer, getAppState, getRouter } = helpers
  const router = getRouter()
  return withStore(getAppState(storeNames.APP_CONFIG), {
    renderer,
    computed: {
      items () {
        const modules = this.store.getState('appConfig.data.modules')
        if (!modules) return []
        return modules.reduce((prev, curr) => [...prev, (curr.layout?.desktop?.nav)], []).filter(x => x != null)
      }
    },
    handleClick (e, item) {
      if (item.path) {
        this.store.loadModuleByPath(item.path).then(() => router.push(item.path))
      }
    },
    render () {
      return html`<nav>
        <ul>
          ${this.items.map(item => html`<li><button type="button" onclick="${e => this.handleClick(e, item)}">${item.title}</button></li>`)}
        </ul>
      </nav>`
    }
  })
}
