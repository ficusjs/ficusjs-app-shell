import { storeNames } from '../../util/store-names.js'

export function createText (helpers) {
  const { html, renderer, withStore, getAppState } = helpers
  return withStore(getAppState(storeNames.APP_CONFIG), {
    renderer,
    props: {
      tag: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    },
    loadModuleByComponent (tag) {
      return this.store.loadModuleByComponent(tag)
        .then(() => {
          const component = document.querySelector(tag)
          if (component && component.handleClick) {
            component.handleClick()
          }
        })
    },
    render () {
      return html`
        <button type="button" class="text-gray-400 hover:text-gray-500" onclick="${() => this.loadModuleByComponent(this.props.tag)}">${this.props.text}</button>
      `
    }
  })
}
