import { storeNames } from '../../util/store-names.js'

export function createNav (helpers) {
  const { html, renderer, getAppState, getRouter, withStore } = helpers
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
        const router = getRouter()
        this.store.loadModuleByPath(item.path).then(() => router.push(item.path))
      }
    },
    render () {
      return html`
        ${this.items.map(item => html`<li><button class="fc-nav-link" type="button" onclick="${e => this.handleClick(e, item)}">${item.title}</button></li>`)}
      `
    }
  })
}
