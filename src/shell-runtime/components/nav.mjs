import { createCustomElement, getAppState, html, renderer, withStore } from '../util/shell-runtime.mjs'
import { storeNames } from '../stores/constants.mjs'
import { router } from '../router.mjs'

createCustomElement(
  'ficus-app-shell-nav',
  withStore(getAppState(storeNames.APP_CONFIG), {
    renderer,
    computed: {
      items () {
        const modules = this.store.getState('appConfig.data.modules')
        if (!modules) return []
        return modules.reduce((prev, curr) => [...prev, ...(curr.navigation || [])], [])
      }
    },
    handleClick (e, item) {
      if (item.path) {
        router.push(item.path)
      }
    },
    render () {
      return html`
        <ul>
          ${this.items.map(item => html`<li><button type="button" onclick="${e => this.handleClick(e, item)}">${item.name}</button></li>`)}
        </ul>
      `
    }
  })
)